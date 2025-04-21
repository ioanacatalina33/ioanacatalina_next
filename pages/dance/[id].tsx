import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";

import { FullAlbumDetails } from "types/modelTypes";

import { getAlbumDetails } from "../../api/controllers/albums";
import { getRouteStaticPaths } from "../../api/utils";
import { AlbumPage } from "components";
import { Routes } from "types";
import { STATIC_PATHS_LOAD } from "helpers";

// export const getStaticPaths: GetStaticPaths = async () => {
//   let paths = [];
//   if (STATIC_PATHS_LOAD) {
//     paths = await getRouteStaticPaths(Routes.Dance);
//   }
//   return {
//     paths: STATIC_PATHS_LOAD ? paths : [],
//     fallback: STATIC_PATHS_LOAD ? false : "blocking",
//   };
// };

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
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
  };
};

interface Props {
  fullAlbum: FullAlbumDetails;
}

const DanceAlbum = ({ fullAlbum }: Props) => {
  return <AlbumPage fullAlbum={fullAlbum} />;
};

export default DanceAlbum;
