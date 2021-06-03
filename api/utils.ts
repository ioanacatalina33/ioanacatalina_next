import fs from "fs";
import path from "path";

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
