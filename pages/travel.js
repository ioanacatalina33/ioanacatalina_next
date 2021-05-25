import Link from "next/link";
import React from "react";
import { getListOfAlbums } from "../api/controllers/albums";
import Header from "../src/components/Header";

export async function getStaticProps(context) {
  const data = getListOfAlbums();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { albums: data }, // will be passed to the page component as props
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

const Travel = ({ albums }) => {
  return (
    <div>
      <Header />
      <br /> <h1>Travel page</h1>
      <div style={{ backgroundColor: "yellow" }}>
        {albums.map((album) => (
          <div key={album.id}>
            <Link href={"/travel/" + album.id}>
              <a>
                {album.id} {album.type} {album.country} {album.continent}
              </a>
            </Link>
          </div>
        ))}
        {/* <Link href="/travel/a-1">
          <a>Album 1</a>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/travel/a-2">
          <a>Album 2</a>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/travel/a-3">
          <a>Album 3</a>
        </Link> */}
      </div>
    </div>
  );
};

export default Travel;
