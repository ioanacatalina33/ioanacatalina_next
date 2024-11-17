import { Flex } from "components/UI/Flex/Flex";
import { PhotoContainerHighlights } from "components/UI/PhotoContainers";
import { PhotoContainerType } from "components/UI/PhotoContainers/PhotoContainer";
import React from "react";
// import FadeIn from "react-fade-in/lib/FadeIn";
import { getHighlightsAlbums } from "staticModel";

export const AlbumRecommendedMyLife = () => {
  return (
    <Flex column fullWidth align={(a) => a.center}>
      <h4 className="text-container-bold">For more photos:</h4>

      <PhotoContainerHighlights
        album={getHighlightsAlbums("myadventures")[0]}
        type={PhotoContainerType.PHOTOC_REC}
      />
    </Flex>
  );
};
