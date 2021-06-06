import { HighlightsAlbums } from "staticModel";
import { getUrlPaths } from "../../api/controllers/albums";
import { AlbumType } from "../types/enums";

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
