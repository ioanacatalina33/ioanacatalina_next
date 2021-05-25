import { getSmallAlbums } from "../../api/controllers/albums";

export default function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET": {
      // Get data from your database
      getSmallAlbums(req, res);
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
