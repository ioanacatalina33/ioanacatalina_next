import React, { useMemo, useState } from "react";
import LazyLoad from "react-lazy-load";

import {
  albumUrl,
  articleCover,
  getFileDateTitleString,
  getLocationsWithComaAnd,
} from "helpers";
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

  const article_locations = album.locations
    .map((loc) => `${loc.name}`)
    .join(", ");

  const titleText =
    album.type === AlbumType.Travel
      ? album.name_location !== undefined && album.name_location !== ""
        ? album.name_location
        : getLocationsWithComaAnd(album.locations)
      : album.name;

  function getTitleStyle() {
    return {
      borderRadius: "0rem",
    };
  }

  function getNameText() {
    return album.type === AlbumType.Travel ? album.name : getDanceNameText();
  }

  function getDanceNameText() {
    const event = getDanceEvent(album.subtype);
    if (event === undefined) {
      return album.subtype + ", " + article_locations;
    } else {
      const organizers = event.organizers
        .map((organizer) => organizer.name)
        .join(" & ");
      return "Organized by " + organizers; //.concat(" in " + article_locations);
    }
  }

  const articleURL = albumUrl(album.type, album.name_url);

  let colsClass =
    type === PhotoContainerType.PHOTOC_REC
      ? "photo-col col-md-offset-2 col-lg-4 col-md-4 col-sm-6 col-centered"
      : "photo-col col-lg-3 col-md-4 col-sm-6 ";

  // version two
  colsClass = colsClass + " photo-col-padding-v2";

  const loadedImage = (
    <img
      className="cover-loaded border-corner-up"
      src={articleCover(album.identifier)}
      alt={titleText + " " + album.country}
      onLoad={onLoad}
    />
  );

  const content = useMemo(
    () => (
      <Link
        scroll={false}
        href={articleURL}
        title={titleText.length > 18 ? titleText : ""}
      >
        {/* <a title={titleText.length > 18 ? titleText : ""}> */}
        <div className="photo-container">
          <div className="photo-container-img-space border-corner-up">
            <div
              className="loading-animation border-corner-up"
              style={{ minHeight: show ? "auto" : "13rem" }}
            >
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
              <LazyLoad offset={1000}>{loadedImage}</LazyLoad>
            ) : (
              loadedImage
            )}
            <span style={getTitleStyle()} className="photo-container-title">
              {titleText}
            </span>
          </div>

          {album.type !== AlbumType.Highlights && (
            <div style={{ background: "transparent" }}>
              <div className="photo-container-name"> {getNameText()} </div>
              <div className="photo-container-date-country">
                <span className="photo-container-country">{album.country}</span>
                <span className="photo-container-date">
                  {getFileDateTitleString(album.date_start, album.date_end)}
                </span>
              </div>
            </div>
          )}
        </div>
        {/* </a> */}
      </Link>
    ),
    [album, onLoad],
  );

  return (
    <div
      className={colsClass}
      // style={{ visibility: show ? "visible" : "hidden" }}
    >
      {lazyload ? <LazyLoad offset={300}>{content}</LazyLoad> : content}
    </div>
  );
};
