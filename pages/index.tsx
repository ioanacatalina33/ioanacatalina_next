import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";

import { HomePage } from "components";
import {
  getNumberAlbums,
  getNumberOfCountries,
} from "../api/controllers/albums";
import { getNumberImages } from "../api/utils";
import { getNumberLocations } from "../api/controllers/location";

interface Props {
  nrCountries: number;
  nrAlbums: number;
  nrLocations: number;
  nrImages: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
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
