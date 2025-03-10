import { NextApiResponse } from "next";

export default async function (_, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
}
