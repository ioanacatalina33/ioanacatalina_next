import type { NextApiRequest, NextApiResponse } from "next";

import { sendBuyDigitalEmail } from "../../../api/controllers/email";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default (
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; result?: number }>,
) => {
  const { method } = req;

  switch (method) {
    case "POST": {
      sendBuyDigitalEmail(req, res);
      break;
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
