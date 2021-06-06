import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { articleCover, getFileDateTitleString } from "helpers";
import { AlbumType } from "types/enums";
import { Album } from "types/modelTypes";
import Link from "next/link";
import { getDanceEvent } from "staticModel";

export enum PhotoContainerType {
  PHOTOC_MAIN = "main",
  PHOTOC_REC = "recomm",
}

interface PhotoContainerProps {
  article: Album;
  type: PhotoContainerType;
}

export const PhotoContainer = ({
  article,
  type,
}: PhotoContainerProps): JSX.Element => {
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
      borderRadius: "0rem",
    };
  }

  function getNameText() {
    return article.type === AlbumType.Travel
      ? article.name
      : getDanceNameText();
  }

  function getDanceNameText() {
    var event = getDanceEvent(article.subtype);
    if (event === undefined) {
      return article.subtype + ", " + article_locations;
    } else {
      let organizers = event.organizers
        .map((organizer) => organizer.name)
        .join(" & ");
      return "Organized by " + organizers; //.concat(" in " + article_locations);
    }
  }

  const article_locations = article.locations
    .map((loc) => `${loc.name}`)
    .join(", ");

  const articleURL = "/" + article.type.toLowerCase() + "/" + article.name_url;

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
                  src={articleCover(article.identifier)}
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
                    {article.country}
                  </span>
                  <span className="photo-container-date">
                    {getFileDateTitleString(
                      article.date_start,
                      article.date_end
                    )}
                  </span>
                </div>
              </div>
            }
          </div>
        </Link>
      </LazyLoad>
    </figure>
  );
};
