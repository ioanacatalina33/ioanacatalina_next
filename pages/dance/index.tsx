import { GetStaticProps } from "next";
import React, { createContext } from "react";

import { DancePage } from "components";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers";
import { LazyLoadContext } from "Context/LazyLoadContext";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getAlbumsByType(AlbumType.Dance);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { albums: data },
    // revalidate: 1, // In seconds
  };
};

interface Props {
  albums: Album[];
}

const dance = ({ albums }: Props) => {
  return (
    <LazyLoadContext.Provider value={{ lazyload: true }}>
      <DancePage albums={albums} />
    </LazyLoadContext.Provider>
  );
};

export default dance;
