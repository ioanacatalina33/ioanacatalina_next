import React from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/Header";
import { getRouteStaticPaths, Routes } from "../../src/helpers/routes";
import { getImagesNamesFromFolder } from "../../api/utils";
import { getHighlightAlbumDetails } from "../../src/helpers/utils";

export async function getStaticPaths() {
  const paths = await getRouteStaticPaths(Routes.HIGHLIGHTS);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const album = getHighlightAlbumDetails(params.id);
  const images = await getImagesNamesFromFolder(album.highlight.identifier);
  album.images = images;
  return {
    props: { album },
    //revalidate: 1, // In seconds
  };
}

const HighlightAlbum = ({ album }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("album is ", { album });

  return (
    <div>
      <Header />
      <br /> <h1>Album page</h1>
      <br /> Album id: {id}
      <br /> Name: {album.highlight.name}
    </div>
  );
};

export default HighlightAlbum;
