import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { albumUrl, articleCover, getFileDateTitleString } from "helpers";
import { AlbumType, ScreenType } from "types/enums";
import { Album } from "types/modelTypes";
import Link from "next/link";
import { useScreenType } from "hooks";
import Image from "next/image";
import { imageLoader } from "helpers/imageLoader";

interface PhotoContainerMapProps {
  article: Album;
}

export const PhotoContainerMap = ({ article }: PhotoContainerMapProps) => {
  const [show, setShow] = useState(false);

  const { screenType } = useScreenType();

  function onLoad() {
    setShow(true);
  }

  function getTitleStyle() {
    return {
      fontSize: article.type === AlbumType.Travel ? "1.5rem" : "1.35rem",
    };
  }

  function getNameText() {
    return article.type === AlbumType.Travel ? article.name : article.subtype;
  }

  function getLeftCornerText() {
    return article.country;
  }

  function getDate() {
    return getFileDateTitleString(article.date_start, article.date_end);
  }

  const articleURL = albumUrl(article.type, article.name_url);

  const cornersStyle = { borderRadius: " 0.3rem 0.3rem 0rem 0rem" };

  const containerPadding = {
    padding:
      screenType === ScreenType.Desktop
        ? "0rem 2rem 3rem 2rem"
        : "0rem 1rem 1rem 1rem",
  };

  const loadedImage = (
    <Image
      className="cover-loaded border-corner-up"
      // style={cornersStyle}
      loader={imageLoader}
      src={articleCover(article.identifier)}
      alt={article.name}
      width={0}
      height={0}
      onLoad={onLoad}
      sizes="(max-width: 580px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 38vw, 30vw"
    />
  );

  return (
    <div className="map-photo-col col-12 col-centered" style={containerPadding}>
      <Link scroll={false} href={articleURL}>
        <div className="photo-container white-background-hovered">
          <div className="photo-container-img-space border-corner-up">
            <div
              className="loading-animation border-corner-up"
              style={{ minHeight: show ? "auto" : "13rem" }}
            >
              <img
                className="photo-small border-corner-up"
                style={{ visibility: "hidden", ...cornersStyle }}
                src={"/img/cover_placeholder_search_.jpg"}
                alt=""
                onLoad={onLoad}
              />
            </div>

            {loadedImage}
            <span style={getTitleStyle()} className="photo-container-title">
              {getDate()}
            </span>
          </div>

          <div>
            <div className="photo-container-name">{getNameText()}</div>

            <div className="photo-container-date-country">
              <span className="photo-container-country">
                {getLeftCornerText()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
