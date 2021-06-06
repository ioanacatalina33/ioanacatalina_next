import { Button } from "react-bootstrap";
import Link from "next/link";
import React from "react";

import { contentScroll, getLocationsWithComa } from "helpers";
import { useBrowsers, useScreenSize } from "hooks";
import { AlbumType, Location } from "types";
import { ImageLoader } from "components/UI/ImageLoader";

interface AlbumHeaderProps {
  type: AlbumType;
  coverImageSrc: string;
  isCoverLarge?: boolean;
  name?: string;
  name_location?: string;
  locations?: Location[];
  country?: string;
  prevLink?: string;
  nextLink?: string;
}

export const AlbumHeader = ({
  type,
  coverImageSrc,
  isCoverLarge,
  name,
  name_location,
  country,
  locations,
  prevLink,
  nextLink,
}: AlbumHeaderProps) => {
  const { screenHeight } = useScreenSize();

  const { isIE } = useBrowsers();

  function getTitle() {
    return type === AlbumType.Travel && !!locations
      ? !!name_location
        ? name_location
        : getLocationsWithComa(locations)
      : name;
  }

  function getSubTitle() {
    return type === AlbumType.Dance && !!locations
      ? getLocationsWithComa(locations) + ", " + country
      : country;
  }

  return (
    <div
      className={
        type === AlbumType.Highlights
          ? "album-header header-album"
          : "album-header header-album"
      }
    >
      <div className="album-header-wrapper">
        {/* <button onClick={props.backPressed} variant="outline-light" className="album-header-button album-header-button-close">
          <i className="fa fa-arrow-circle-left"></i> Back
        </button> */}

        {prevLink && (
          <Link href={prevLink}>
            <a>
              <Button
                variant="outline-light"
                className="album-header-button album-header-button-left"
              >
                <i className="fa fa-angle-left"></i> Previous album
              </Button>
            </a>
          </Link>
        )}

        {nextLink && (
          <Link href={nextLink}>
            <a>
              <Button
                variant="outline-light"
                className="album-header-button album-header-button-right"
              >
                Next album <i className="fa fa-angle-right"></i>
              </Button>
            </a>
          </Link>
        )}

        <Button
          onClick={() => contentScroll(screenHeight)}
          className="arrow-down arrow-down-smaller arrow-down-inverted"
        >
          <i className="fa fa-arrow-down arrow-down-icon-inverted"></i>
        </Button>

        <div className={(isIE ? "row " : "") + " album-header-container"}>
          <ImageLoader
            style={{
              objectFit:
                type === AlbumType.Highlights || isCoverLarge
                  ? "cover"
                  : "contain",
              width: isIE ? "auto" : "100%",
            }}
            src={coverImageSrc}
            loadedClassName="img-normal-loaded"
            loadingClassName="img-normal-loading"
          />
          <div className="img-loaded-text-album-header">
            <span
              className={
                type !== AlbumType.Highlights
                  ? "album-header-text-span"
                  : "album-header-text-span album-header-text-span-highlights"
              }
            >
              {getTitle()}
            </span>

            {type !== AlbumType.Highlights ? (
              <span className="album-header-text-span-subtitle">
                {getSubTitle()}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
