import fs from "fs";
import path from "path";
import { HighlightsAlbums } from "staticModel";
import { AlbumType, BlogPost, BlogPostCard, Routes } from "types";
import { getUrlPaths } from "./controllers";

export async function getImagesNamesFromFolder(folderPath: string) {
  const directoryPath = path.join(process.cwd(), "public/img/" + folderPath);
  if (fs.existsSync(directoryPath)) return fs.readdirSync(directoryPath);
  else return [];
}

export async function getNumberImages() {
  const nrTravel = getImagesNumberFromFolder(
    path.join(process.cwd(), "public/img/travel/"),
  );
  const nrDance = getImagesNumberFromFolder(
    path.join(process.cwd(), "public/img/dance/"),
  );
  // const nrHighlights = getImagesNumberFromFolder(
  //   path.join(process.cwd(), "public/img/highlights/")
  // );
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
