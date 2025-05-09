import { GetServerSideProps } from "next";
import React from "react";

import { TravelPage } from "components";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers/albums";
import { LazyLoadContext } from "Context/LazyLoadContext";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await getAlbumsByType(AlbumType.Travel);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { albums: data },
  };
};

interface Props {
  albums: Album[];
}

const travel = ({ albums }: Props) => {
  return (
    <LazyLoadContext.Provider value={{ lazyload: true }}>
      <TravelPage albums={albums} />
    </LazyLoadContext.Provider>
  );
};

export default travel;
