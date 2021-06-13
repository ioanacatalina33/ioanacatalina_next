import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { getHighlightAlbumDetails } from "staticModel";

import { getImagesNamesFromFolder, getRouteStaticPaths } from "../../api/utils";
import { FullAlbumDetails, Routes } from "types";
import { AlbumPage } from "components";
import { STATIC_PATHS_LOAD } from "helpers";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  if (STATIC_PATHS_LOAD) {
    paths = await getRouteStaticPaths(Routes.Highlights);
  }
  return {
    paths: STATIC_PATHS_LOAD ? paths : [],
    fallback: STATIC_PATHS_LOAD ? false : "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  let fullAlbum = null;

  if (typeof params.id === "string")
    fullAlbum = getHighlightAlbumDetails(params.id);

  const images = await getImagesNamesFromFolder(fullAlbum.album.identifier);
  fullAlbum.images = images;

  return {
    props: { fullAlbum },
    //revalidate: 1, // In seconds
  };
};

interface Props {
  fullAlbum: FullAlbumDetails;
}

const HighlightAlbum = ({ fullAlbum }: Props) => {
  return <AlbumPage fullAlbum={fullAlbum} />;
};

export default HighlightAlbum;
