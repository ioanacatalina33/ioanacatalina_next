import React from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/Header";
import { getRouteStaticPaths, Routes } from "../../src/utils/routes";
import { getAlbumDetails } from "../../api/controllers/albums";

const Album = ({ album }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("album is ", { album });

  return (
    <div>
      <Header />
      <br /> <h1>Album page</h1>
      <br /> Album id: {id}
      <br /> More post data: {album.title}
    </div>
  );
};

export default Album;

export async function getStaticPaths() {
  const paths = getRouteStaticPaths(Routes.TRAVEL);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //const postData = await getPostData(params.id)
  // const postData = {
  //   someData: params.id + "_moreData",
  // };
  console.log("params.id " + params.id);
  const album = getAlbumDetails(params.id);
  if (!album) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      album,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
