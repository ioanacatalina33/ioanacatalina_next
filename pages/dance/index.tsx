import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

import Header from "components/Header";
import { AlbumType } from "helpers/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getAlbumsByType(AlbumType.DANCE);

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

const Dance = ({ albums }: Props) => {
  return (
    <div>
      <Header />
      <br /> <h1>Dance page</h1>
      <div>
        {albums.map((album, i) => (
          <div key={i}>
            <Link href={"/dance/" + album.name_url}>
              <a>{album.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dance;
