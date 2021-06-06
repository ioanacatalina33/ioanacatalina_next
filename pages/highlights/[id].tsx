import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { getHighlightAlbumDetails } from "staticModel";

import {
  getImagesNamesFromFolder,
  getRouteStaticPaths,
  Routes,
} from "../../api/utils";
import { FullAlbumDetails } from "types";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getRouteStaticPaths(Routes.HIGHLIGHTS);
  return {
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
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <br /> <h1>Album page</h1>
      <br /> Album id: {id}
      <br /> Name: {fullAlbum.album.name}
    </div>
  );
};

export default HighlightAlbum;
