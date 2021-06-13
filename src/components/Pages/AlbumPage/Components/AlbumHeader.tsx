import { Button } from "react-bootstrap";
import Link from "next/link";
import React from "react";

import { contentScroll } from "helpers";
import { useBrowsers, useScreenSize } from "hooks";
import { AlbumType } from "types";
import { ImageLoader } from "components/UI/ImageLoader";

interface AlbumHeaderProps {
  type: AlbumType;
  coverImageSrc: string;
  isCoverLarge?: boolean;
  title: string;
  subtitle: string;
  prevLink?: string;
  nextLink?: string;
}

export const AlbumHeader = ({
  type,
  coverImageSrc,
  isCoverLarge,
  title,
  subtitle,
  prevLink,
  nextLink,
}: AlbumHeaderProps) => {
  const { screenHeight } = useScreenSize();

  const { isIE } = useBrowsers();

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
                Next album
                <i className="fa fa-angle-right"></i>
              </Button>
            </a>
          </Link>
        )}

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
            alt={title + " " + subtitle + " header"}
          />
          <div className="img-loaded-text-album-header-absolute">
            <div className="img-loaded-text-album-header">
              <span
                className={
                  type !== AlbumType.Highlights
                    ? "album-header-text-span"
                    : "album-header-text-span album-header-text-span-highlights"
                }
              >
                {title}
              </span>

              {type !== AlbumType.Highlights && (
                <span className="album-header-text-span-subtitle">
                  {subtitle}
                </span>
              )}
            </div>
            <button
              onClick={() => contentScroll(screenHeight)}
              className="arrow-down arrow-down-inverted"
              style={{ margin: "0 auto", marginTop: "2rem" }}
            >
              <i className="fa fa-arrow-down arrow-down-icon-inverted"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
