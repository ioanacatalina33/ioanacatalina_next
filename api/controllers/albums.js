import dbConnect from "../config/dbConnect.js";
import { Article, Location } from "../models";
import { getImagesNamesFromFolder } from "../utils";

export async function getUrlPaths(type) {
  let paths = [];
  try {
    await dbConnect();
    console.log("getUrlPaths called");

    //retrieve albums by type
    const pathsObj = await Article.find()
      .select({
        name_url: 1,
      })
      .sort({ date_start: -1 })
      .where("type")
      .equals(type);
    pathsObj.map((path) => paths.push(path.name_url));
  } catch (err) {
    console.error("error at getUrlPaths " + err.message);
  }
  return JSON.parse(JSON.stringify(paths));
}

export async function getAlbumsByType(type) {
  let albums = [];
  try {
    await dbConnect();
    console.log("Getting albums by type");

    //retrieve albums by type
    albums = await Article.find()
      .select({
        _id: 1,
        name: 1,
        name_url: 1,
        name_location: 1,
        date_start: 1,
        date_end: 1,
        country: 1,
        continent: 1,
        type: 1,
        subtype: 1,
        identifier: 1,
        metadata: 1,
      })
      .populate("locations", Location)
      .sort({ date_start: -1 })
      .where("type")
      .equals(type);
  } catch (err) {
    console.error("error at getAlbumDetails " + err.message);
  }
  return JSON.parse(JSON.stringify(albums));
}

export async function getAlbumDetails(name_url) {
  console.log("Getting album details");

  let data = { article: null, images: [] };
  try {
    await dbConnect();
    const article = await Article.findOne({ name_url })
      .populate("locations", Location)
      .sort({ date_start: -1 });
    const [images, recommended, { next, prev }] = await Promise.all([
      getImagesNamesFromFolder(article.identifier),
      getRecommended(article),
      getNextAndPrev(name_url, article.type),
    ]);
    data = { article, images, recommended, next, prev };
  } catch (err) {
    console.error("error at getAlbumDetails " + err.message);
  }
  return JSON.parse(JSON.stringify(data));
}

async function getNextAndPrev(albumUrl, type) {
  const paths = await getUrlPaths(type);
  const next = [];
  const prev = [];
  const albumIndex = paths.indexOf(albumUrl);
  if (albumIndex > -1) {
    for (let i = albumIndex; next.length < 3 && i > 0; i--) {
      next.push(paths[i - 1]);
    }
    for (let i = albumIndex; prev.length < 3 && i < paths.length - 1; i++) {
      prev.push(paths[i + 1]);
    }
  }
  return { next, prev };
}

async function getRecommended(album) {
  console.log("Getting recommended");

  let recommended = [];
  if (album.type === "Dance") {
    recommended = await Article.find({
      _id: { $ne: album._id },
      subtype: album.subtype,
      type: album.type,
    })
      .populate("locations", Location)
      .sort({ date_start: -1 });
    if (recommended.length < 6) {
      recommended = recommended.concat(
        await Article.find({
          _id: { $ne: album._id },
          type: album.type,
          subtype: { $ne: album.subtype },
        })
          .populate("locations", Location)
          .sort({ date_start: -1 })
      );
    }
  } else if (album.type === "Travel") {
    recommended = await Article.find({
      _id: { $ne: album._id },
      country: album.country,
      subtype: album.subtype,
      type: album.type,
    })
      .populate("locations", Location)
      .sort({ date_start: -1 });
    if (recommended.length < 6) {
      recommended = recommended.concat(
        await Article.find({
          _id: { $ne: album._id },
          country: album.country,
          subtype: { $ne: album.subtype },
          type: album.type,
        })
          .populate("locations", Location)
          .sort({ date_start: -1 })
      );
    }
    return recommended.slice(0, 6);
  }
}

export async function getSmallAlbums(req, res) {
  try {
    await dbConnect();
    var articles = await Article.find()
      .select({
        _id: 1,
        name: 1,
        name_url: 1,
        name_location: 1,
        date_start: 1,
        date_end: 1,
        country: 1,
        continent: 1,
        type: 1,
        subtype: 1,
        identifier: 1,
        metadata: 1,
      })
      .populate("locations", Location)
      .sort({ date_start: -1 });
    res.status(200).json(articles);
  } catch (err) {
    console.error(JSON.stringify(err));
    res.status(500).json({ message: err.message });
  }
}

export async function getAlbums(req, res) {
  try {
    await dbConnect();
    console.log("Get Articles Request");
    const type = req.body.type;
    const id = req.body.id;
    const name_url = req.body.name_url;
    const articleReq = req.body.article;
    const recommended = req.body.recommended;
    if (type === "Highlights") {
      const identifier = req.body.identifier;
      const images = await getImagesNamesFromFolder(identifier);
      res.status(200).json({ images: images });
      return;
    } else if (type !== undefined && type !== "") {
      //retrieve articles by type
      const articles = await Article.find()
        .populate("locations", Location)
        .sort({ date_start: -1 })
        .where("type")
        .equals(type);
      res.status(200).json(articles);
      return;
    } else if (id !== undefined && id !== "") {
      //retrieve one article
      const article = await Article.findById(id)
        .populate("locations", Location)
        .sort({ date_start: -1 });
      const images = await getImagesNamesFromFolder(article.identifier);
      res.status(200).json({ article: article, images: images });
      return;
    } else if (name_url !== undefined && name_url !== "") {
      //retrieve one article
      const article = await Article.findOne({ name_url: name_url })
        .populate("locations", Location)
        .sort({ date_start: -1 });
      const images = await getImagesNamesFromFolder(article.identifier);
      res.status(200).json({ article: article, images: images });
      return;
    } else if (articleReq !== undefined && recommended) {
      //retrieve recommended
      let recommendedArticles;
      if (articleReq.type === "Dance") {
        recommendedArticles = await Article.find({
          _id: { $ne: articleReq._id },
          subtype: articleReq.subtype,
          type: articleReq.type,
        })
          .populate("locations", Location)
          .sort({ date_start: -1 });
        if (recommendedArticles.length < 6) {
          recommendedArticles = recommendedArticles.concat(
            await Article.find({
              _id: { $ne: articleReq._id },
              type: articleReq.type,
              subtype: { $ne: articleReq.subtype },
            })
              .populate("locations", Location)
              .sort({ date_start: -1 })
          );
        }
      } else if (articleReq.type === "Travel") {
        recommendedArticles = await Article.find({
          _id: { $ne: articleReq._id },
          country: articleReq.country,
          subtype: articleReq.subtype,
          type: articleReq.type,
        })
          .populate("locations", Location)
          .sort({ date_start: -1 });
        if (recommendedArticles.length < 6) {
          recommendedArticles = recommendedArticles.concat(
            await Article.find({
              _id: { $ne: articleReq._id },
              country: articleReq.country,
              subtype: { $ne: articleReq.subtype },
              type: articleReq.type,
            })
              .populate("locations", Location)
              .sort({ date_start: -1 })
          );
        }
        if (recommendedArticles.length < 6) {
          recommendedArticles = recommendedArticles.concat(
            await Article.find({
              _id: { $ne: articleReq._id },
              type: articleReq.type,
              subtype: articleReq.subtype,
              country: { $ne: articleReq.country },
            })
              .populate("locations", Location)
              .sort({ date_start: -1 })
          );
        }
      }
      res
        .status(200)
        .json({ recommendedArticles: recommendedArticles.slice(0, 6) });
      return;
    } else {
      var articles = await Article.find()
        .populate("locations", Location)
        .sort({ date_start: -1 });
      res.status(200).json(articles);
      return;
    }
  } catch (err) {
    console.error("error retrieving articles " + err.message);
    res.status(500).json({ message: err.message });
    return;
  }
}
