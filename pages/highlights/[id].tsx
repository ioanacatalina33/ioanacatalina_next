import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { getRouteStaticPaths, Routes } from "helpers/routes";
import { FullHighlightDetails } from "types/modelTypes";
import { getHighlightAlbumDetails } from "staticModel";

import { getImagesNamesFromFolder } from "../../api/utils";

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

  const images = await getImagesNamesFromFolder(fullAlbum.highlight.identifier);
  fullAlbum.images = images;

  return {
    props: { fullAlbum },
    //revalidate: 1, // In seconds
  };
};

interface Props {
  fullAlbum: FullHighlightDetails;
}

const HighlightAlbum = ({ fullAlbum }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("album is ", { fullAlbum });

  return (
    <div>
      <br /> <h1>Album page</h1>
      <br /> Album id: {id}
      <br /> Name: {fullAlbum.highlight.name}
    </div>
  );
};

export default HighlightAlbum;
