import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { BlogPost } from "types";
import client, { previewClient } from "../../lib/contentful";
import { parseToBlogPost } from "../../api/parsers/blogPost";
import { STATIC_PATHS_LOAD } from "helpers";
import { BlogPostPage } from "components/Pages/BlogPostPage";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];

  if (STATIC_PATHS_LOAD) {
    const response = await client.getEntries({ content_type: "blogPost" });
    paths = response.items.map((post) => ({
      params: { id: post.fields.slug },
    }));
  }

  return {
    paths,
    fallback: STATIC_PATHS_LOAD ? false : "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  preview = false,
}) => {
  const cfClient = preview ? previewClient : client;
  const postId = params.id.toString();
  const response = await cfClient.getEntries({
    content_type: "blogPost",
    "fields.slug": postId,
  });
  const post = response.items[0];

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: parseToBlogPost(post),
      preview,
      fallback: "blocking",
    },
  };
};

interface Props {
  post: BlogPost;
}

const blog = ({ post }: Props) => {
  return <BlogPostPage post={post} />;
};

export default blog;
