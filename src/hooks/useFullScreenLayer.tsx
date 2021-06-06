import React from "react";

import { FullScreenLayer } from "components/UI/FullScreenLayer";
import { PageType } from "types/enums";
import { useEffect, useState } from "react";
import { FullSizeImage, getFullSizeImageByPage } from "staticModel";

export const useFullScreenlayer = (pageType: PageType) => {
  const [imageProps, setImageProps] = useState<FullSizeImage>({
    text: "",
    class: "",
    url: "",
  });

  useEffect(() => {
    setImageProps(getFullSizeImageByPage(pageType));
  }, []);

  return <FullScreenLayer fullSizeImage={imageProps} />;
};
