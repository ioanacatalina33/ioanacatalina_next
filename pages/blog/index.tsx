import React from "react";

import { BlogPage } from "components/Pages/BlogPage";
import client from "../../lib/contentful";
import { BlogPostCard } from "types";
import { parseToBlogPostCard } from "../../api/parsers/blogPost";
import { LazyLoadContext } from "Context/LazyLoadContext";

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "blogPost" });

  const posts: BlogPostCard[] = response.items.map((post) =>
    parseToBlogPostCard(post),
  );

  posts.sort(
    (a, b) =>
      new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime(),
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
  return (
    <LazyLoadContext.Provider value={{ lazyload: true }}>
      <BlogPage posts={posts} />
    </LazyLoadContext.Provider>
  );
};

export default blog;
