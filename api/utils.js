import fs from "fs";
import path from "path";

export async function getImagesNamesFromFolder(folderPath, client) {
  const directoryPath = path.join(process.cwd(), "public/img/" + folderPath);
  const imagesList = fs.readdirSync(directoryPath, function (err, files) {});
  return imagesList;
}
