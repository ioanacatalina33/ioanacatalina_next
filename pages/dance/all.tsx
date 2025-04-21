import { GetStaticProps } from "next";
import React from "react";

import { DancePage } from "components";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers/albums";

export const getServerSideProps: GetStaticProps<Props> = async () => {
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
  return <DancePage albums={albums} />;
};

export default dance;
