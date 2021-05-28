import fs from "fs";
import path from "path";

export async function getImagesNamesFromFolder(folderPath: string) {
  const directoryPath = path.join(process.cwd(), "public/img/" + folderPath);
  return fs.readdirSync(directoryPath);
}
