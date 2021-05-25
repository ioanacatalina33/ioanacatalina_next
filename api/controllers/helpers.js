import fs from "fs";
import path from "path";

export async function getAlbumImagesFromArticleFolder(identifier, client) {
  var pathForCurrent =
    process.env.NODE_ENV === "production"
      ? "../../" + client + "/public/img/"
      : "../../" + client + "/public/img/";
  var jsonPath = path.join(__dirname, pathForCurrent, identifier);
  var imagesList = [];
  imagesList = fs.readdirSync(jsonPath, function (err, files) {});

  // return imagesList.filter((image) => image !== "cover_large.jpg");
  return imagesList;
}
