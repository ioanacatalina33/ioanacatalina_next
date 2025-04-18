import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import Link from "next/link";

import { articleCover } from "helpers";
import { Album } from "types";

export enum PhotoContainerType {
  PHOTOC_MAIN = "main",
  PHOTOC_REC = "recomm",
}

interface PhotoContainerProps {
  album: Album;
  type: PhotoContainerType;
  isSingle?: boolean;
  lazyLoad?: boolean;
}

export const PhotoContainerHighlights = ({
  album,
  type,
  lazyLoad,
  isSingle,
}: PhotoContainerProps): JSX.Element => {
  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }

  const articleURL = ("/" + album.type + "/" + album.name_url).toLowerCase();

  let colsClass = isSingle
    ? "photo-col"
    : type === PhotoContainerType.PHOTOC_REC
      ? "photo-col col-md-offset-2 col-lg-4 col-md-4 col-sm-6 col-centered"
      : "photo-col col-lg-4 col-md-4 col-sm-6";

  //adding v2 padding
  colsClass = colsClass + " photo-col-padding-v2";

  const widthStyle = { maxWidth: isSingle ? "22rem" : "auto" };
  const cornersStyle = { borderRadius: "0.1rem" };

  const loadedImage = (
    <img
      className="cover-loaded"
      style={cornersStyle}
      src={articleCover(album.identifier)}
      alt=""
      onLoad={onLoad}
    />
  );

  const content = (
    <Link scroll={false} href={articleURL}>
      <div className="photo-container" style={widthStyle}>
        <div className="photo-container-img-space">
          <div
            className="loading-animation"
            style={{ minHeight: show ? "auto" : "13rem" }}
          >
            <img
              className="photo-small"
              style={cornersStyle}
              src={"/img/cover_placeholder_.png"}
              onLoad={onLoad}
              alt=""
            />
          </div>
          {lazyLoad ? (
            <LazyLoad offset={1000}>{loadedImage}</LazyLoad>
          ) : (
            loadedImage
          )}
          <span
            style={{ fontSize: "1.7rem", ...cornersStyle }}
            className="photo-container-title"
          >
            {album.name}
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <div
      className={colsClass}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      {lazyLoad ? <LazyLoad offset={300}>{content}</LazyLoad> : content}
    </div>
  );
};
