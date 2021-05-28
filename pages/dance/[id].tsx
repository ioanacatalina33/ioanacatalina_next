import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { getRouteStaticPaths, Routes } from "helpers/routes";
import { FullAlbumDetails } from "types/modelTypes";

import { getAlbumDetails } from "../../api/controllers";
import Header from "components/Header";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getRouteStaticPaths(Routes.DANCE);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  let fullAlbum = null;
  if (typeof params.id === "string")
    fullAlbum = await getAlbumDetails(params.id);

  if (!fullAlbum) {
    return {
      notFound: true,
    };
  }
  return {
    props: { fullAlbum },
    //revalidate: 1, // In seconds
  };
};

interface Props {
  fullAlbum: FullAlbumDetails;
}

const DanceAlbum = ({ fullAlbum }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("fullAlbum is ", { fullAlbum });

  return (
    <div>
      <Header />
      <br /> <h1>Album page</h1>
      <br /> Album id: {id}
      <br /> Country: {fullAlbum.album.country}
    </div>
  );
};

export default DanceAlbum;
