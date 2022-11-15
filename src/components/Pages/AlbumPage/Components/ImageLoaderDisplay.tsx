import { useScreenSize, useScreenType } from "hooks";
import React, { useRef, useState } from "react";
import { ScreenType, PhotosDisplayType } from "types";

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

  const [isPortrait, setIsPortrait] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const refImage = useRef<HTMLImageElement>();

  const onLoad = () => {
    setLoaded(true);
    if (refImage.current.offsetWidth < refImage.current.offsetHeight) {
      setIsPortrait(true);
    }
  };

  function getCorrectHeight() {
    if (isPortrait && screenType !== ScreenType.Mobile) {
      const correctHeight =
        displayMode === PhotosDisplayType.ONE
          ? "900"
          : screenWidth / Number(displayMode) - 50;
      const styleHeight = {
        height: correctHeight + "px",
        width: "auto",
      };
      return styleHeight;
    }
  }

  className = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  return (
    <img
      ref={refImage}
      src={src}
      style={getCorrectHeight()}
      className={className}
      alt={alt ? alt : ""}
      onLoad={onLoad}
    />
  );
};
