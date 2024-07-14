import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { BlogArticlePage } from "components/Pages/BlogArticlePage";
import { STATIC_PATHS_LOAD } from "helpers";
import { getImagesNamesFromFolder, getRouteStaticPaths } from "../../api/utils";
import { AlbumType, Routes } from "types";
import { FullBlogPostDetails, getBlogPostByUrl } from "staticModel/Blog/blog";
import { getAlbumsBetweenDates } from "../../api/controllers";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  if (STATIC_PATHS_LOAD) {
    paths = await getRouteStaticPaths(Routes.BlogArticle);
  }
  return {
    paths: STATIC_PATHS_LOAD ? paths : [],
    fallback: STATIC_PATHS_LOAD ? false : "blocking",
  };
};

interface Props {
  fullPost: FullBlogPostDetails;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const postId = params.id.toString();
  const post = getBlogPostByUrl(postId);
  const fullPost = { post, images: [], albums: [] };

  const images = await getImagesNamesFromFolder("/Blog/" + post.id);
  const imagesFullPath = images.map(
    (img) => "/img/Blog/" + post.id + "/" + img,
  );
  fullPost.images = imagesFullPath;

  if (post.dateStart && post.dateEnd) {
    const albums = await getAlbumsBetweenDates(
      post.dateStart,
      post.dateEnd,
      AlbumType.Travel,
    );
    fullPost.albums = albums;
  }

  const final = JSON.parse(JSON.stringify(fullPost));

  return {
    props: { fullPost: final },
    //revalidate: 1, // In seconds
  };
};

const blog = ({ fullPost }: Props) => {
  return <BlogArticlePage fullPost={fullPost} />;
};

export default blog;
