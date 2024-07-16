import { useScreenSize, useScreenType } from "hooks";
import React, { useRef, useState } from "react";
import { PhotosDisplayType, ScreenType } from "types";

interface ImageLoaderDisplayProps {
  src: string;
  alt?: string;
  displayMode: PhotosDisplayType;
  className?: string;
  loadingClassName?: string;
  loadedClassName?: string;
}

export const ImageLoaderDisplay = ({
  src,
  alt,
  displayMode,
  className = "",
  loadingClassName = "img-loading",
  loadedClassName = "img-loaded",
}: ImageLoaderDisplayProps) => {
  const { screenWidth } = useScreenSize();
  const { screenType } = useScreenType();

  const [loaded, setLoaded] = useState(false);
  const refImage = useRef<HTMLImageElement>();

  const onLoad = () => {
    setLoaded(true);
  };

  className = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  return (
    <img
      ref={refImage}
      src={src}
      style={{
        maxHeight:
          displayMode === PhotosDisplayType.ONE ||
          screenType === ScreenType.Mobile
            ? "900px"
            : screenWidth / Number(displayMode) - 50 + "px",
      }}
      className={className}
      alt={alt ? alt : ""}
      onLoad={onLoad}
    />
  );
};
