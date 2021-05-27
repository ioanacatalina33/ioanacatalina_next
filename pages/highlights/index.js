import Link from "next/link";
import React from "react";
import Header from "../../src/components/Header";
import { getHighlightsAlbums } from "../../src/helpers/utils";

export async function getStaticProps(context) {
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
}

const Highlights = ({ albums }) => {
  return (
    <div>
      <Header />
      <br /> <h1>Travel page</h1>
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
