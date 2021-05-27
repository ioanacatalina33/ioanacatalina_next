import React from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/Header";
import { getRouteStaticPaths, Routes } from "../../src/helpers/routes";
import { getAlbumDetails } from "../../api/controllers/albums";

export async function getStaticPaths() {
  const paths = await getRouteStaticPaths(Routes.DANCE);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const album = await getAlbumDetails(params.id);

  if (!album) {
    return {
      notFound: true,
    };
  }
  return {
    props: { album },
    //revalidate: 1, // In seconds
  };
}

const DanceAlbum = ({ album }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("album is ", { album });

  return (
    <div>
      <Header />
      <br /> <h1>Album page</h1>
      <br /> Album id: {id}
      <br /> Country: {album.article.country}
    </div>
  );
};

export default DanceAlbum;
