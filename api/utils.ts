import fs from "fs";
import path from "path";
import { HighlightsAlbums } from "staticModel";
import { AlbumType, BlogPost, BlogPostCard, Routes } from "types";
import { getUrlPaths } from "./controllers/albums";

export async function getImagesNamesFromFolder(folderPath: string) {
  const directoryPath =
    process.env.NODE_ENV !== "production"
      ? path.join(process.cwd(), "public/img/" + folderPath)
      : process.env.IMAGES_PATH + folderPath;

  if (fs.existsSync(directoryPath)) return fs.readdirSync(directoryPath);
  else return [];
}

export async function getNumberImages() {
  const isDev = process.env.NODE_ENV !== "production";
  const travelFolderPath = isDev
    ? path.join(process.cwd(), "public/img/travel/")
    : process.env.IMAGES_PATH + "Travel";
  const danceFolderPath = isDev
    ? path.join(process.cwd(), "public/img/dance/")
    : process.env.IMAGES_PATH + "Dance";

  const nrTravel = getImagesNumberFromFolder(travelFolderPath);
  const nrDance = getImagesNumberFromFolder(danceFolderPath);

  return nrTravel + nrDance;
}

export function getImagesNumberFromFolder(folderPath: string) {
  const subFolders = fs.readdirSync(folderPath);
  let totalCount = 0;
  subFolders.forEach(
    (folder) =>
      (totalCount =
        totalCount + fs.readdirSync(path.join(folderPath, folder)).length),
  );
  return totalCount;
}

export async function getRouteStaticPaths(route: Routes) {
  let fileNames = [];
  switch (route) {
    case Routes.Travel: {
      fileNames = await getUrlPaths(AlbumType.Travel);
      break;
    }
    case Routes.Dance: {
      fileNames = await getUrlPaths(AlbumType.Dance);
      break;
    }
    case Routes.Highlights: {
      HighlightsAlbums.forEach((high) => fileNames.push(high.name_url));
      break;
    }
    default:
      break;
  }

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function sortBlogPosts(posts: BlogPostCard[]) {
  posts.sort(
    (a, b) =>
      new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime(),
  );
  return posts;
}

export function getRelatedPosts(post: BlogPostCard, posts: BlogPostCard[]) {
  const relatedPosts = posts.filter((p) => p.fields.slug !== post.fields.slug);

  return relatedPosts.sort(() => Math.random() - 0.5).slice(0, 4);
}
