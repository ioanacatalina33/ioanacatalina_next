import { GetStaticProps } from "next";
import React from "react";

import { Dance } from "components";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers";

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
  return <Dance albums={albums} />;
};

export default dance;
