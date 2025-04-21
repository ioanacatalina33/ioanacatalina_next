import type { NextApiRequest, NextApiResponse } from "next";
import { Album } from "types";

import { getSmallAlbums } from "../../api/controllers/albums";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default (
  req: NextApiRequest,
  res: NextApiResponse<Album[] | { message: string }>,
) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      getSmallAlbums()
        .then((albums) => {
          res.status(200).json(albums);
        })
        .catch((err) => {
          console.error(JSON.stringify(err));
          res.status(400).json({ message: err.message });
        });

      break;
    }
    //default:
    // res.setHeader("Allow", ["GET"]);
    // res.status(405).end(`Method ${method} Not Allowed`);
  }
};
