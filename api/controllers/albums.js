import dbConnect from "../config/dbConnect.js";
import { Article, Location } from "../models";
import { getAlbumImagesFromArticleFolder } from "./helpers.js";

const albumDetails = [
  {
    id: "al-1",
    type: "travel",
    country: "romania",
    continent: "europe",
    title: "some title 1",
  },
  {
    id: "al-2",
    type: "travel",
    country: "spain",
    continent: "europe",
    title: "some title 2",
  },
  {
    id: "al-3",
    type: "dance",
    country: "romania",
    continent: "europe",
    title: "some title 3",
  },
  {
    id: "al-4",
    type: "travel",
    country: "poland",
    continent: "europe",
    title: "some title 4",
  },
  {
    id: "al-5",
    type: "dance",
    country: "uk",
    continent: "europe",
    title: "some title 5",
  },
  {
    id: "al-6",
    type: "travel",
    country: "romania",
    continent: "europe",
    title: "some title 6",
  },
];

const albums = [
  { id: "al-1", type: "travel", country: "romania", continent: "europe" },
  { id: "al-2", type: "travel", country: "spain", continent: "europe" },
  { id: "al-3", type: "dance", country: "romania", continent: "europe" },
  { id: "al-4", type: "travel", country: "poland", continent: "europe" },
  { id: "al-5", type: "dance", country: "uk", continent: "europe" },
  { id: "al-6", type: "travel", country: "romania", continent: "europe" },
];

export function getListOfAlbums() {
  return albums;
}

export function getAlbumDetails(id) {
  const albumFound = albumDetails.filter((album) => album.id === id);
  if (albumFound.length) return albumFound[0];
  return null;
}

export function getStaticPaths() {
  albums.map((album) => album.id);
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
      const images = await getAlbumImagesFromArticleFolder(
        identifier,
        "client"
      );
      res.status(200).json({ images: images });
      return;
    } else if (type !== undefined && type !== "") {
      //retrieve articles by type
      const articles = await Article.find()
        .populate("locations")
        .sort({ date_start: -1 })
        .where("type")
        .equals(type);
      res.status(200).json(articles);
      return;
    } else if (id !== undefined && id !== "") {
      //retrieve one article
      const article = await Article.findById(id)
        .populate("locations")
        .sort({ date_start: -1 });
      const images = await getAlbumImagesFromArticleFolder(
        article.identifier,
        "client"
      );
      res.status(200).json({ article: article, images: images });
      return;
    } else if (name_url !== undefined && name_url !== "") {
      //retrieve one article
      const article = await Article.findOne({ name_url: name_url })
        .populate("locations")
        .sort({ date_start: -1 });
      const images = await getAlbumImagesFromArticleFolder(
        article.identifier,
        "client"
      );
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
          .populate("locations")
          .sort({ date_start: -1 });
        if (recommendedArticles.length < 6) {
          recommendedArticles = recommendedArticles.concat(
            await Article.find({
              _id: { $ne: articleReq._id },
              type: articleReq.type,
              subtype: { $ne: articleReq.subtype },
            })
              .populate("locations")
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
          .populate("locations")
          .sort({ date_start: -1 });
        if (recommendedArticles.length < 6) {
          recommendedArticles = recommendedArticles.concat(
            await Article.find({
              _id: { $ne: articleReq._id },
              country: articleReq.country,
              subtype: { $ne: articleReq.subtype },
              type: articleReq.type,
            })
              .populate("locations")
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
              .populate("locations")
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
        .populate("locations")
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
