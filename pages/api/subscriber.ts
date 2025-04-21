import type { NextApiRequest, NextApiResponse } from "next";
import { addSubscriber } from "../../api/controllers/subscriber";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default (
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; result: number }>,
) => {
  const { method } = req;

  switch (method) {
    case "POST": {
      addSubscriber(req, res);
      break;
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
