// Fake users data

import { getListOfAlbums } from "../../api/controllers/albums";
import { get as getAlbumDetails } from "../../api/controllers/article.controller";

export default function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET": {
      // Get data from your database
      getAlbumDetails(req, res);
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
