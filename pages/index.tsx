import React from "react";
import { GetStaticProps } from "next";

import { HomePage } from "components";
import {
  getNumberAlbums,
  getNumberLocations,
  getNumberOfCountries,
} from "../api/controllers";
import { getNumberImages } from "../api/utils";

interface Props {
  nrCountries: number;
  nrAlbums: number;
  nrLocations: number;
  nrImages: number;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [nrCountries, nrAlbums, nrLocations, nrImages] = await Promise.all([
    getNumberOfCountries(),
    getNumberAlbums(),
    getNumberLocations(),
    getNumberImages(),
  ]);

  return {
    props: { nrCountries: nrCountries + 2, nrAlbums, nrLocations, nrImages },
  };
};

const Index = ({ nrCountries, nrAlbums, nrLocations, nrImages }: Props) => {
  return <HomePage {...{ nrCountries, nrAlbums, nrLocations, nrImages }} />;
};

export default Index;
