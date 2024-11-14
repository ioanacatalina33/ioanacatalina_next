import React from "react";

import { FullScreenLayer } from "components/UI/FullScreenLayer";
import { PageType } from "types/enums";
import { useEffect, useState } from "react";
import { FullSizeImage, getFullSizeImageByPage } from "staticModel";
import { useSelector } from "./utils";

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

  const travelPageCount = useSelector((state) => state.app.travelPageCount);

  useEffect(() => {
    setImageProps(
      imageP ? imageP : getFullSizeImageByPage(pageType, travelPageCount),
    );
  }, []);

  return <FullScreenLayer fullSizeImage={imageProps} inverse={inverse} />;
};
