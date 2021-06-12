import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { albumUrl, articleCover, getFileDateTitleString } from "helpers";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";
import Link from "next/link";
import { getDanceEvent } from "staticModel";

export enum PhotoContainerType {
  PHOTOC_MAIN = "main",
  PHOTOC_REC = "recomm",
}

interface PhotoContainerProps {
  album: Album;
  type: PhotoContainerType;
}

export const PhotoContainer = ({
  album,
  type,
}: PhotoContainerProps): JSX.Element => {
  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }

  function getTitleText() {
    return album.type === AlbumType.Travel
      ? album.name_location !== undefined && album.name_location !== ""
        ? album.name_location
        : article_locations
      : album.name;
  }

  function getTitleStyle() {
    return {
      fontSize: album.type === AlbumType.Travel ? "1.5rem" : "1.35rem",
      borderRadius: "0rem",
    };
  }

  function getNameText() {
    return album.type === AlbumType.Travel ? album.name : getDanceNameText();
  }

  function getDanceNameText() {
    var event = getDanceEvent(album.subtype);
    if (event === undefined) {
      return album.subtype + ", " + article_locations;
    } else {
      let organizers = event.organizers
        .map((organizer) => organizer.name)
        .join(" & ");
      return "Organized by " + organizers; //.concat(" in " + article_locations);
    }
  }

  const article_locations = album.locations
    .map((loc) => `${loc.name}`)
    .join(", ");

  const articleURL = albumUrl(album.type, album.name_url);

  const colsClass =
    type === PhotoContainerType.PHOTOC_REC
      ? "photo-col col-md-offset-2 col-lg-4 col-md-4 col-sm-6 col-centered"
      : "photo-col col-lg-3 col-md-4 col-sm-6";

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
                  style={{ borderRadius: "0.3rem 0.3rem 0rem 0rem" }}
                  src={"/img/cover_placeholder.png"}
                  onLoad={onLoad}
                  alt=""
                />
                <LazyLoad debounce={false} offsetVertical={1000}>
                  <img
                    className="cover-loaded"
                    style={{ borderRadius: "0.3rem 0.3rem 0rem 0rem" }}
                    src={articleCover(album.identifier)}
                    alt=""
                    onLoad={onLoad}
                  />
                </LazyLoad>
                <span style={getTitleStyle()} className="photo-container-title">
                  {getTitleText()}
                </span>
              </div>

              {
                <div style={{ background: "transparent" }}>
                  <div className="photo-container-name"> {getNameText()} </div>
                  <div className="photo-container-date-country">
                    <span className="photo-container-country">
                      {album.country}
                    </span>
                    <span className="photo-container-date">
                      {getFileDateTitleString(album.date_start, album.date_end)}
                    </span>
                  </div>
                </div>
              }
            </div>
          </a>
        </Link>
      </LazyLoad>
    </figure>
  );
};
