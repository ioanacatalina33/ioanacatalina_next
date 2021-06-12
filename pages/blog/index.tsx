import { GetStaticProps } from "next";
import React from "react";

import { TravelPage } from "components";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";

import { getAlbumsByType } from "../../api/controllers/albums";

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const data = await getAlbumsByType(AlbumType.Travel);
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { albums: data },
//     // revalidate: 1, // In seconds
//   };
// };

// interface Props {
//   albums: Album[];
// }

const blog = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Coming up soon! :)</h1>
    </div>
  );
};

export default blog;
