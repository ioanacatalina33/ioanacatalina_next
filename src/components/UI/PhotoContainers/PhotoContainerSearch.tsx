import Link from "next/link";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { articleCover, getFileDateTitleString } from "helpers";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";
import { getDanceEvent } from "staticModel";

interface PhotoContainerSearchProps {
  article: Album;
  isSingle: boolean;
  onAlbumClicked: () => void;
}

export const PhotoContainerSearch = ({
  article,
  isSingle,
  onAlbumClicked,
}: PhotoContainerSearchProps): JSX.Element => {
  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }

  function getTitleText() {
    return article.type === AlbumType.Travel
      ? article.name_location !== undefined && article.name_location !== ""
        ? article.name_location
        : article_locations
      : article.name;
  }

  function getTitleStyle() {
    return {
      fontSize: article.type === AlbumType.Travel ? "1.5rem" : "1.35rem",
    };
  }

  function getNameText() {
    return article.type === AlbumType.Travel
      ? article.name
      : getDanceNameText();
  }

  function getDanceNameText() {
    const event = getDanceEvent(article.subtype);
    if (event === undefined) {
      return article.subtype + ", " + article_locations;
    } else {
      const organizers = event.organizers
        .map((organizer) => organizer.name)
        .join(" & ");
      return "Organized by " + organizers;
    }
  }

  const article_locations = article.locations
    .map((loc) => `${loc.name}`)
    .join(", ");

  const articleURL = "/" + article.type.toLowerCase() + "/" + article.name_url;

  const widthStyle = { maxWidth: isSingle ? "22rem" : "auto" };

  let colsClass = isSingle
    ? "photo-col"
    : "photo-col col-lg-3 col-md-4 col-sm-6";

  colsClass = colsClass + " photo-col-padding-v2";

  return (
    <div
      className={colsClass}
      // style={{ display: show ? "block" : "none" }}
    >
      <div className="search-photo-col" style={widthStyle}>
        <a>
          <Link scroll={false} href={articleURL}>
            <div
              onClick={onAlbumClicked}
              className="photo-container search-background"
            >
              <div className="photo-container-img-space border-corner-up">
                <div
                  className="loading-animation border-corner-up"
                  style={{ minHeight: show ? "auto" : "13rem" }}
                >
                  <img
                    className="photo-small border-corner-up"
                    style={{ visibility: "hidden" }}
                    src={"/img/cover_placeholder_search_.jpg"}
                    alt=""
                    onLoad={onLoad}
                  />
                </div>
                <LazyLoad offset={800}>
                  <img
                    className="cover-loaded border-corner-up"
                    src={articleCover(article.identifier)}
                    alt=""
                  />
                </LazyLoad>
                <span style={getTitleStyle()} className="photo-container-title">
                  {getTitleText()}
                </span>
              </div>

              <div className="photo-container-name"> {getNameText()}</div>
              <div className="photo-container-date-country">
                <span className="photo-container-country">
                  {article.country}
                </span>
                <span className="photo-container-date">
                  {getFileDateTitleString(article.date_start, article.date_end)}
                </span>
              </div>
            </div>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default PhotoContainerSearch;
