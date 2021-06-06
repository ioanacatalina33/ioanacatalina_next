import React from "react";

import { Photowall } from "components/UI/Photowall";
import { Album, AlbumType } from "types";
import { useFullScreenlayer } from "hooks";

interface HighlightsProps {
  albums: Album[];
}

export const Highlights = ({ albums }: HighlightsProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Highlights);

  return (
    <>
      {FullSizeLayer}
      <div className="App">
        <h2>Highlights</h2>

        <Photowall albums={albums} type={AlbumType.Highlights} />
      </div>
    </>
  );
};

export default Highlights;
