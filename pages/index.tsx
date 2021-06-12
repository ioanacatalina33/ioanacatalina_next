import React from "react";
import { GetStaticProps } from "next";

import { HomePage } from "components";
import { getNumberAlbums, getNumberLocations } from "../api/controllers";
import { getNumberImages } from "../api/utils";

interface Props {
  nrAlbums: number;
  nrLocations: number;
  nrImages: number;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [nrAlbums, nrLocations, nrImages] = await Promise.all([
    getNumberAlbums(),
    getNumberLocations(),
    getNumberImages(),
  ]);

  return {
    props: { nrAlbums, nrLocations, nrImages },
  };
};

const Index = ({ nrAlbums, nrLocations, nrImages }: Props) => {
  return <HomePage {...{ nrAlbums, nrLocations, nrImages }} />;
};

export default Index;
