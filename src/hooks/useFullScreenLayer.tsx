import React from "react";

import { FullScreenLayer } from "components/UI/FullScreenLayer";
import { AlbumType, PageType } from "types/enums";
import { useEffect, useState } from "react";
import { FullSizeImage, getFullSizeImageByPage } from "staticModel";
import { COUNTER_DANCE, COUNTER_TRAVEL } from "helpers";

export const useFullScreenlayer = (pageType: PageType, inverse?: boolean) => {
  const [imageProps, setImageProps] = useState<FullSizeImage>({
    url: "",
    text: "",
    alt: "",
    class: { textPosition: "", width: 0 },
  });

  const travelPageCount =
    typeof window !== "undefined"
      ? localStorage.getItem(COUNTER_TRAVEL) ?? 0
      : 0;

  const dancePageCount =
    typeof window !== "undefined"
      ? localStorage.getItem(COUNTER_DANCE) ?? 0
      : 0;

  // For dynamic covers that hold counts in localStorage we need to wait for the first render first before setting the cover
  // since the server has no idea about the localStorage
  const isDynamicCover =
    pageType === AlbumType.Travel || pageType === AlbumType.Dance;

  useEffect(() => {
    setImageProps(
      getFullSizeImageByPage(
        pageType,
        Number(travelPageCount),
        Number(dancePageCount),
      ),
    );
  }, []);

  return (
    <FullScreenLayer
      fullSizeImage={
        isDynamicCover
          ? imageProps
          : getFullSizeImageByPage(
              pageType,
              Number(travelPageCount),
              Number(dancePageCount),
            )
      }
      inverse={inverse}
    />
  );
};
