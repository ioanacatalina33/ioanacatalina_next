import { getAlbumDetails } from "../../../api/controllers/albums";

export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET": {
      // Get data from your database
      const album = getAlbumDetails(id);
      if (album) {
        res.status(200).json(album);
      } else {
        res.status(404).json({ error: "not found!" });
      }
      break;
    }
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
