import Link from "next/link";
import React from "react";
import { getAlbumsByType } from "../../api/controllers/albums";
import Header from "../../src/components/Header";
import { TYPE_TRAVEL } from "../../src/helpers/constants";

export async function getStaticProps(context) {
  const data = await getAlbumsByType(TYPE_TRAVEL);
  //console.log("getStaticProps data ", { data });
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

const Travel = ({ albums }) => {
  // console.log("We have these albums: ", { albums });
  return (
    <div>
      <Header />
      <br /> <h1>Travel page</h1>
      <div>
        {albums.map((album, i) => (
          <div key={i}>
            <Link href={"/travel/" + album.name_url}>
              <a>{album.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;
