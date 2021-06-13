import React, { CSSProperties, useState } from "react";

interface ImageLoaderProps {
  src: string;
  style: CSSProperties;
  className?: string;
  loadingClassName?: string;
  loadedClassName?: string;
  alt?: string;
}

export const ImageLoader = ({
  src,
  style,
  className = "",
  loadingClassName = "img-loading",
  loadedClassName = "img-loaded",
  alt,
}: ImageLoaderProps) => {
  const [loaded, isLoaded] = useState(false);

  function onLoad() {
    isLoaded(true);
  }

  className = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  return (
    <img
      src={src}
      style={style}
      className={className}
      alt={alt ? alt : ""}
      onLoad={onLoad}
    />
  );
};

export default ImageLoader;
