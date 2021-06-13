import React, { useMemo, useState } from "react";
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
  lazyload?: boolean;
}

export const PhotoContainer = ({
  album,
  type,
  lazyload,
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

  const loadedImage = (
    <img
      className="cover-loaded border-corner-up"
      src={articleCover(album.identifier)}
      alt={getTitleText() + " " + album.country}
      onLoad={onLoad}
    />
  );

  const content = useMemo(
    () => (
      <Link scroll={false} href={articleURL}>
        <a>
          <div className="photo-container">
            <div className="photo-container-img-space border-corner-up">
              <div className="loading-animation border-corner-up">
                <img
                  className="photo-small border-corner-up"
                  style={{
                    visibility: "hidden",
                  }}
                  src={"/img/cover_placeholder_.jpg"}
                  onLoad={onLoad}
                  alt=""
                />
              </div>
              {lazyload ? (
                <LazyLoad debounce={false} offsetVertical={1000}>
                  {loadedImage}
                </LazyLoad>
              ) : (
                loadedImage
              )}
              <span style={getTitleStyle()} className="photo-container-title">
                {getTitleText()}
              </span>
            </div>

            {type !== PhotoContainerType.PHOTOC_REC && (
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
            )}
          </div>
        </a>
      </Link>
    ),
    [album, onLoad]
  );

  return (
    <div
      className={colsClass}
      // style={{ visibility: show ? "visible" : "hidden" }}
    >
      {lazyload ? (
        <LazyLoad
          debounce={false}
          offsetVertical={300}
          placeholder={<img alt="" src="/img/loading.gif" />}
          alt=""
        >
          {content}
        </LazyLoad>
      ) : (
        content
      )}
    </div>
  );
};
