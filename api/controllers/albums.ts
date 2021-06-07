import { AlbumType } from "types";
import { Album, AlbumDetails, FullAlbumDetails } from "types/modelTypes.js";

import dbConnect from "../config/dbConnect";
import { Article, Location } from "../models";
import { getImagesNamesFromFolder } from "../utils";

export async function getUrlPaths(type: AlbumType): Promise<string[]> {
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

export async function getAlbumsByType(type: AlbumType): Promise<Album[]> {
  let albums = [];
  try {
    await dbConnect();
    console.log("Getting albums by type");

    //retrieve albums by type
    albums = await Article.find()
      .select({
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
      })
      .populate("locations", Location)
      .sort({ date_start: -1 })
      .where("type")
      .equals(type);
  } catch (err) {
    console.error("error at getAlbumsByType: " + err.message);
  }
  return JSON.parse(JSON.stringify(albums));
}

export async function getAlbumDetails(
  name_url: string
): Promise<FullAlbumDetails> {
  console.log("Getting album details");

  let data: FullAlbumDetails;
  try {
    await dbConnect();
    const album: AlbumDetails = await Article.findOne({ name_url })
      .populate("locations", Location)
      .sort({ date_start: -1 });
    const [images, recommended, { next, prev }] = await Promise.all([
      getImagesNamesFromFolder(album.identifier),
      getRecommended(album),
      getNextAndPrev(name_url, album.type),
    ]);
    data = { album, images, recommended, next, prev };
  } catch (err) {
    console.error("error at getAlbumDetails " + err.message);
  }
  return JSON.parse(JSON.stringify(data));
}

async function getNextAndPrev(
  albumUrl: string,
  type: AlbumType
): Promise<{ next: Album[]; prev: Album[] }> {
  const next = [];
  const prev = [];

  try {
    const allTypedAlbums = await getAlbumsByType(type);
    let albumIndex = 0;
    allTypedAlbums.forEach((element, i) => {
      if (element.name_url == albumUrl) albumIndex = i;
    });
    if (albumIndex > -1) {
      for (let i = albumIndex; next.length < 3 && i > 0; i--) {
        next.push(allTypedAlbums[i - 1]);
      }
      for (
        let i = albumIndex;
        prev.length < 3 && i < allTypedAlbums.length - 1;
        i++
      ) {
        prev.push(allTypedAlbums[i + 1]);
      }
    }
  } catch (err) {
    console.error("error at getNextAndPrev: " + err.message);
  }

  return { next, prev };
}

async function getRecommended(album: Album): Promise<Album[]> {
  console.log("Getting recommended");
  let recommended = [];
  try {
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
    }
  } catch (err) {
    console.error("error at getRecommended: " + err.message);
  }
  return recommended.slice(0, 6);
}

export async function getNumberAlbums(): Promise<number> {
  let number = 0;
  try {
    await dbConnect();
    console.log("Getting getNumberAlbums");

    number = await Article.count();
  } catch (err) {
    console.error("error at getNumberAlbums: " + err.message);
  }
  return number;
}

export async function getSmallAlbums(): Promise<Album[]> {
  try {
    await dbConnect();
    const albums = await Article.find()
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
    return albums;
  } catch (err) {
    console.error(JSON.stringify(err));
    throw err;
  }
}
