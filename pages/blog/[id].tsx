import React from "react";
import { GetServerSideProps } from "next";

import { BlogPost, BlogPostCard } from "types";
import client, { previewClient } from "../../lib/contentful";
import {
  parseToBlogPost,
  parseToBlogPostCards,
} from "../../api/parsers/blogPost";
import { BlogPostPage } from "components/Pages/BlogPostPage";
import { getRelatedPosts, sortBlogPosts } from "../../api/utils";

// export const getStaticPaths: GetStaticPaths = async () => {
//   let paths = [];

//   if (STATIC_PATHS_LOAD) {
//     const response = await client.getEntries({ content_type: "blogPost" });
//     paths = response.items.map((post) => ({
//       params: { id: post.fields.slug },
//     }));
//   }

//   return {
//     paths,
//     fallback: STATIC_PATHS_LOAD ? false : "blocking",
//   };
// };

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  preview = false,
}) => {
  const cfClient = preview ? previewClient : client;
  const postId = params.id.toString();
  const responses = await Promise.all([
    cfClient.getEntries({
      content_type: "blogPost",
      "fields.slug": postId,
    }),
    client.getEntries({
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
    }),
  ]);
  const post = parseToBlogPost(responses[0].items[0]);

  const posts = sortBlogPosts(parseToBlogPostCards(responses[1]));

  const relatedPosts = getRelatedPosts(post, posts);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
      relatedPosts,
      preview,
      fallback: "blocking",
    },
  };
};

interface Props {
  post: BlogPost;
  relatedPosts: BlogPostCard[];
}

const blog = ({ post, relatedPosts }: Props) => {
  return <BlogPostPage post={post} relatedPosts={relatedPosts} />;
};

export default blog;
