import React from "react";
import { GetStaticProps } from "next";

import { Home } from "components";

interface Props {
  nrAlbums: number;
  nrLocations: number;
  nrImages: number;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const [nrAlbums, nrLocations, nrImages] = await Promise.all([
  //   getNumberAlbums(),
  //   getNumberLocations(),
  //   getNumberImages(),
  // ]);

  return {
    props: { nrAlbums: 0, nrLocations: 0, nrImages: 0 },
  };
};

const Index = ({ nrAlbums, nrLocations, nrImages }: Props) => {
  return <Home {...{ nrAlbums, nrLocations, nrImages }} />;
};

export default Index;
