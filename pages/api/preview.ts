import { NextApiRequest, NextApiResponse } from "next";
import { BlogPost } from "types";
import { previewClient } from "../../lib/contentful";

const handler = async function (
  req: NextApiRequest,
  res: NextApiResponse<BlogPost | { message: string }>,
) {
  const { secret, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const response = await previewClient.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  const blogPost = response?.items[0];

  if (!blogPost) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});
  const url = `/blog/${blogPost.fields.slug}`;
  res.writeHead(307, { Location: url });
  res.end();
};

export default handler;
