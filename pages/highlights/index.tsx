import Link from "next/link";
import { GetStaticProps } from "next";
import React from "react";

import Header from "components/Header";
import { Highlight } from "types/modelTypes";
import { getHighlightsAlbums } from "staticModel";

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
  albums: Highlight[];
}

const Highlights = ({ albums }: Props) => {
  return (
    <div>
      <Header />
      <br /> <h1>Highlight page</h1>
      <div>
        {albums.map((album, i) => (
          <div key={i}>
            <Link href={"/highlights/" + album.href}>
              <a>{album.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
