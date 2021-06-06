import React from "react";

import { Photowall } from "components/UI/Photowall";
import { AlbumType } from "types/enums";
import { Highlight } from "types/modelTypes";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";

interface HighlightsProps {
  albums: Highlight[];
}

export const Highlights = ({ albums }: HighlightsProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Highlights);

  return (
    <>
      {FullSizeLayer}
      <div className="App">
        <h2>Highlights</h2>

        <Photowall highlights={albums} />
      </div>
    </>
  );
};

export default Highlights;
