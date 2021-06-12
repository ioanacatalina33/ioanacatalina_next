import { GetStaticProps } from "next";
import React from "react";

import { HighlightsPage } from "components";

import { getHighlightsAlbums } from "staticModel";
import { Album } from "types";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = getHighlightsAlbums();
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

const highlights = ({ albums }: Props) => {
  return <HighlightsPage albums={albums} />;
};

export default highlights;
