import { getUrlPaths } from "../../api/controllers/albums";
import * as Constants from "./constants";

export const Routes = {
  TRAVEL: "travel",
  DANCE: "dance",
  HIGHLIGHTS: "highlights",
};

export async function getRouteStaticPaths(route) {
  let fileNames = [];
  switch (route) {
    case Routes.TRAVEL: {
      fileNames = await getUrlPaths(Constants.TYPE_TRAVEL);
      break;
    }
    case Routes.DANCE: {
      fileNames = await getUrlPaths(Constants.TYPE_DANCE);
      break;
    }
    case Routes.HIGHLIGHTS:
      //fileNames = fs.readdirSync(highlightsDirectory);
      break;
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
