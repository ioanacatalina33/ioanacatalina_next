import React from "react";

import { FullScreenLayer } from "components/UI/FullScreenLayer";
import { PageType } from "types/enums";
import { useEffect, useState } from "react";
import { FullSizeImage, getFullSizeImageByPage } from "staticModel";
// import { useSelector } from "./utils";
import { COUNTER_DANCE, COUNTER_TRAVEL } from "helpers";

export const useFullScreenlayer = (
  pageType: PageType,
  imageP?: FullSizeImage,
  inverse?: boolean,
) => {
  const [imageProps, setImageProps] = useState<FullSizeImage>({
    text: "",
    class: {
      textPosition: "",
      opacity: 0.45,
    },
    url: "",
    alt: "",
  });

  const travelPageCount =
    typeof window !== "undefined"
      ? localStorage.getItem(COUNTER_TRAVEL) ?? 0
      : 0;

  const dancePageCount =
    typeof window !== "undefined"
      ? localStorage.getItem(COUNTER_DANCE) ?? 0
      : 0;

  //const travelPageCount = useSelector((state) => state.app.travelPageCount);

  useEffect(() => {
    setImageProps(
      imageP
        ? imageP
        : getFullSizeImageByPage(
            pageType,
            Number(travelPageCount),
            Number(dancePageCount),
          ),
    );
  }, []);

  return <FullScreenLayer fullSizeImage={imageProps} inverse={inverse} />;
};
