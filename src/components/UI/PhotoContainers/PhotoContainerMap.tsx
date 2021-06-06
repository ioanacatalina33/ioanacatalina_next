import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { articleCover, getFileDateTitleString } from "helpers";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";
import Link from "next/link";

interface PhotoContainerMapProps {
  article: Album;
}

export const PhotoContainerMap = ({ article }: PhotoContainerMapProps) => {
  const [show, setShow] = useState(false);

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

  const articleURL =
    "/" + article.type.toLowerCase() + "/" + article.identifier;

  const cornersStyle = { borderRadius: " 0.3rem 0.3rem 0rem 0rem" };
  return (
    <figure
      className="map-photo-col col-12 col-centered"
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <Link scroll={false} href={articleURL}>
        <div className="photo-container white-background-hovered">
          <div className="photo-container-img-space">
            <img
              className="photo-small"
              style={cornersStyle}
              src={"/img/cover_placeholder_map.png"}
              alt=""
              onLoad={onLoad}
            />
            <LazyLoad debounce={false} offsetVertical={800}>
              <img
                className="cover-loaded"
                style={cornersStyle}
                src={articleCover(article.identifier)}
                alt=""
                onLoad={onLoad}
              />
            </LazyLoad>
            {show ? (
              <span style={getTitleStyle()} className="photo-container-title">
                {getDate()}
              </span>
            ) : (
              " "
            )}
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
    </figure>
  );
};
