import fs from "fs";
import path from "path";

export const Routes = {
  TRAVEL: "travel",
  DANCE: "fance",
};

// eslint-disable-next-line no-undef
const travelDirectory = path.join(process.cwd(), "public/img/travel");

export function getRouteStaticPaths(route) {
  let fileNames = [];
  switch (route) {
    case Routes.TRAVEL:
      fileNames = fs.readdirSync(travelDirectory);
  }

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
