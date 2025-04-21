import React from "react";

import { BlogPage } from "components/Pages/BlogPage";
import client from "../../lib/contentful";
import { BlogPostCard } from "types";
import { parseToBlogPostCards } from "../../api/parsers/blogPost";
import { LazyLoadContext } from "Context/LazyLoadContext";
import { sortBlogPosts } from "../../api/utils";

export const getServerSideProps = async () => {
  const response = await client.getEntries({
    content_type: "blogPost",
    select: [
      "sys",
      "fields.title",
      "fields.summary",
      "fields.date",
      "fields.slug",
      "fields.headerPhoto",
      "fields.keywords",
      "fields.author",
    ],
  });

  const posts = sortBlogPosts(parseToBlogPostCards(response));

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
