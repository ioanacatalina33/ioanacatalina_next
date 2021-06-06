import fs from "fs";
import path from "path";
import { HighlightsAlbums } from "staticModel";
import { AlbumType } from "types";
import { getUrlPaths } from "./controllers";

export async function getImagesNamesFromFolder(folderPath: string) {
  const directoryPath = path.join(process.cwd(), "public/img/" + folderPath);
  return fs.readdirSync(directoryPath);
}

export async function getNumberImages() {
  const nrTravel = getImagesNumberFromFolder(
    path.join(process.cwd(), "public/img/travel/")
  );
  const nrDance = getImagesNumberFromFolder(
    path.join(process.cwd(), "public/img/dance/")
  );
  const nrHighlights = getImagesNumberFromFolder(
    path.join(process.cwd(), "public/img/highlights/")
  );
  return nrTravel + nrDance + nrHighlights;
}

export function getImagesNumberFromFolder(folderPath: string) {
  const subFolders = fs.readdirSync(folderPath);
  let totalCount = 0;
  subFolders.forEach(
    (folder) =>
      (totalCount =
        totalCount + fs.readdirSync(path.join(folderPath, folder)).length)
  );
  return totalCount;
}

export enum Routes {
  TRAVEL = "travel",
  DANCE = "dance",
  HIGHLIGHTS = "highlights",
}

export async function getRouteStaticPaths(route: Routes) {
  let fileNames = [];
  switch (route) {
    case Routes.TRAVEL: {
      fileNames = await getUrlPaths(AlbumType.Travel);
      break;
    }
    case Routes.DANCE: {
      fileNames = await getUrlPaths(AlbumType.Dance);
      break;
    }
    case Routes.HIGHLIGHTS: {
      HighlightsAlbums.forEach((high) => fileNames.push(high.href));
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
