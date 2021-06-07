import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { getHighlightAlbumDetails } from "staticModel";

import {
  getImagesNamesFromFolder,
  getRouteStaticPaths,
  Routes,
} from "../../api/utils";
import { FullAlbumDetails } from "types";
import { AlbumPage } from "components";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getRouteStaticPaths(Routes.HIGHLIGHTS);
  return {
    // paths: [],
    // fallback: "blocking",
    paths,
    fallback: false,
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
