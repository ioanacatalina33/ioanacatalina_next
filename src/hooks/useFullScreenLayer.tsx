import React from "react";

import { FullScreenLayer } from "components/UI/FullScreenLayer";
import { PageType } from "types/enums";
import { useEffect, useState } from "react";
import { FullSizeImage, getFullSizeImageByPage } from "staticModel";

export const useFullScreenlayer = (
  pageType: PageType,
  imageP?: FullSizeImage,
  inverse?: boolean
) => {
  const [imageProps, setImageProps] = useState<FullSizeImage>({
    text: "",
    class: "",
    url: "",
    alt: "",
  });

  useEffect(() => {
    setImageProps(imageP ? imageP : getFullSizeImageByPage(pageType));
  }, []);

  return <FullScreenLayer fullSizeImage={imageProps} inverse={inverse} />;
};
