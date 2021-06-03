import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

import { AlbumType } from "helpers/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers/albums";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getAlbumsByType(AlbumType.Travel);
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

const Travel = ({ albums }: Props) => {
  return (
    <div>
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
