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
}

export const PhotoContainerHighlights = ({
  album,
  type,
}: PhotoContainerProps): JSX.Element => {
  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }

  const articleURL = ("/" + album.type + "/" + album.name_url).toLowerCase();

  const colsClass =
    type === PhotoContainerType.PHOTOC_REC
      ? "photo-col col-md-offset-2 col-lg-4 col-md-4 col-sm-6 col-centered"
      : "photo-col col-lg-4 col-md-4 col-sm-6";

  return (
    <figure
      className={colsClass}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <LazyLoad
        debounce={false}
        offsetVertical={300}
        placeholder={<img alt="" src="/img/loading.gif" />}
        alt=""
      >
        <Link scroll={false} href={articleURL}>
          <a>
            <div className="photo-container">
              <div className="photo-container-img-space">
                <img
                  className="photo-small"
                  style={{ borderRadius: "0.3rem" }}
                  src={"/img/cover_placeholder.png"}
                  onLoad={onLoad}
                  alt=""
                />
                <LazyLoad debounce={false} offsetVertical={1000}>
                  <img
                    className="cover-loaded"
                    style={{ borderRadius: "0.3rem" }}
                    src={articleCover(album.identifier)}
                    alt=""
                    onLoad={onLoad}
                  />
                </LazyLoad>
                <span
                  style={{ fontSize: "1.7rem", borderRadius: "0.3rem" }}
                  className="photo-container-title"
                >
                  {album.name}
                </span>
              </div>
            </div>
          </a>
        </Link>
      </LazyLoad>
    </figure>
  );
};
