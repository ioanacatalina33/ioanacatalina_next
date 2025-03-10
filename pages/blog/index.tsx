import React from "react";

import { BlogPage } from "components/Pages/BlogPage";
import client from "../../lib/contentful";
import { BlogPostCard } from "types";
import { parseToBlogPostCard } from "../../api/parsers/blogPost";

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "blogPost" });

  const posts: BlogPostCard[] = response.items.map((post) =>
    parseToBlogPostCard(post),
  );

  return {
    props: {
      posts,
    },
  };
};

interface Props {
  posts: BlogPostCard[];
}

const blog = ({ posts }: Props) => {
  return <BlogPage posts={posts} />;
};

export default blog;
