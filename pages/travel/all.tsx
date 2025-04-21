import { GetServerSideProps } from "next";
import React from "react";

import { TravelPage } from "components";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers/albums";

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
  return <TravelPage albums={albums} />;
};

export default travel;
