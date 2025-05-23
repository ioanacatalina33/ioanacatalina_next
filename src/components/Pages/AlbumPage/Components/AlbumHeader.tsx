import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { contentScroll } from "helpers";
import { useBrowsers, useScreenSize } from "hooks";
import { AlbumType } from "types";
import { imageLoader } from "helpers/imageLoader";

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

  const blurrBackground = {
    // backgroundImage: "url('" + coverImageSrc + "')",
    backgroundColor: "rgba(var(--secondary-color),0.9)",
  };

  return (
    <div className={"header-album"} style={blurrBackground}>
      <div className="album-header-wrapper">
        <div
          // className={
          //   !coverImageSrc.includes("_large") ? "blurred-background" : ""
          // }
          style={blurrBackground}
        />
        {/* <button onClick={props.backPressed} variant="outline-light" className="album-header-button album-header-button-close">
          <i className="fa fa-arrow-circle-left"></i> Back
        </button> */}
        {prevLink && (
          <Link href={prevLink}>
            <Button
              variant="outline-light"
              className="album-header-button album-header-button-left"
            >
              <i className="fa fa-angle-left"></i> Previous album
            </Button>
          </Link>
        )}
        {nextLink && (
          <Link href={nextLink}>
            <Button
              variant="outline-light"
              className="album-header-button album-header-button-right"
            >
              Next album
              <i className="fa fa-angle-right"></i>
            </Button>
          </Link>
        )}

        <Image
          src={coverImageSrc}
          loader={imageLoader}
          className="img-loaded"
          alt={title + " " + subtitle + " header"}
          sizes="100vw"
          width={0}
          height={0}
          style={{
            objectFit:
              type === AlbumType.Highlights || isCoverLarge
                ? "cover"
                : "contain",
            width: isIE ? "auto" : "100%",
          }}
          priority
        />
        {/* <img
          className="img-loaded"
          style={{
            objectFit:
              type === AlbumType.Highlights || isCoverLarge
                ? "cover"
                : "contain",
            width: isIE ? "auto" : "100%",
          }}
          src={coverImageSrc}
          alt={title + " " + subtitle + " header"}
        /> */}

        <div className="img-loaded-text-album-header-absolute no-right-click">
          <div
            className="img-loaded-text-album-header"
            style={{ paddingBottom: "0.8rem" }}
          >
            <span
              className={
                type !== AlbumType.Highlights
                  ? "album-header-text-span"
                  : "album-header-text-span album-header-text-span-highlights"
              }
            >
              <h1 style={{ padding: "0.8rem 0rem 0.5rem 0rem", margin: "0" }}>
                {title}
              </h1>
            </span>

            {type !== AlbumType.Highlights && (
              <span className="album-header-text-span-subtitle">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => contentScroll(screenHeight - 60)}
          className="arrow-down arrow-down-absolute arrow-down-inverted"
          aria-label="Go to content"
          style={{ margin: "0 auto", marginTop: "2rem" }}
        >
          <i className="fa fa-angle-down arrow-down-icon-inverted"></i>
        </button>
      </div>
    </div>
  );
};
