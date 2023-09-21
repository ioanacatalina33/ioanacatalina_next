import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import { FollowMe } from "components/UI/FollowMe";
import { Meta } from "components/Head";
import {
  mapPhotoFromURL,
  mapPropertyFromURL,
  articleCoverLarge,
  urlAlbumHeader,
  getFullPathImgs,
  albumUrl,
  DefaultDisplayType,
  getLocationsWithComaAnd,
} from "helpers";
import { AlbumType, FullAlbumDetails, PhotosDisplayType } from "types";

import { AlbumHeader } from "./Components/AlbumHeader";
import { GeenaPage } from "../GeenaPage";
import { AlbumDisplayType } from "./Components/AlbumDisplayType";
import { PhotosDisplay } from "./Components/PhotosDisplay";
import { AlbumRecommended } from "./Components/AlbumRecommended";
import { AlbumRecommendedMyLife } from "./Components/AlbumRecommendedMyLife";
import { ArticleSubHeader } from "components/UI/ArticleSubHeader";

interface AlbumPageProps {
  fullAlbum: FullAlbumDetails;
}

export const AlbumPage = ({
  fullAlbum: { images, album, prev: prevPhotos, recommended, next: nextPhotos },
}: AlbumPageProps) => {
  const { push, query } = useRouter();

  const [selectedDisplay, setSelectedDisplay] = useState(DefaultDisplayType);
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [pathname, setPathname] = useState("");

  const [modalShow, setModalShow] = useState(false);

  type QueryType = {
    display?: PhotosDisplayType;
    img?: number;
  };

  function pushQuery() {
    let newQuery: QueryType = { ...query };
    if (selectedDisplay !== DefaultDisplayType)
      newQuery = { ...newQuery, display: selectedDisplay };

    if (currentIndex !== undefined) {
      newQuery = { ...newQuery, img: currentIndex + 1 };
    }

    push(
      {
        pathname: pathname,
        query: newQuery,
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  useEffect(() => {
    pushQuery();
  }, [currentIndex, selectedDisplay]);

  useEffect(() => {
    const photoIndex = mapPhotoFromURL(window.location.search);
    const displayMode = mapPropertyFromURL(window.location.search, "display");

    setPathname(
      window.location.href.indexOf("?") > 0
        ? window.location.href.slice(0, window.location.href.indexOf("?"))
        : window.location.href
    );

    if (displayMode !== undefined)
      setSelectedDisplay(displayMode as PhotosDisplayType);

    setCurrentIndex(photoIndex);
    setModalShow(photoIndex !== undefined ? true : false);
  }, []);

  const imagesFullPath = getFullPathImgs(images, album.identifier);

  const hasLargeCover = imagesFullPath.includes(
    articleCoverLarge(album.identifier)
  );
  const imagesToDisplay = imagesFullPath.filter(
    (img) =>
      img !== articleCoverLarge(album.identifier) &&
      (img.includes(".jpg") || img.includes(".png"))
  );

  function albumDisplaySelected(value: PhotosDisplayType) {
    setSelectedDisplay(value);
  }

  async function setIndex(index: number) {
    setCurrentIndex(index);
    setModalShow(index !== undefined ? true : false);
    if (index !== undefined) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  const title = useMemo(
    () =>
      album.type === AlbumType.Travel && !!album.locations
        ? album.name_location
          ? album.name_location
          : getLocationsWithComaAnd(album.locations)
        : album.name,
    [album]
  );

  const subTitle = useMemo(
    () =>
      album.type === AlbumType.Dance && !!album.locations
        ? getLocationsWithComaAnd(album.locations) + ", " + album.country
        : album.country,
    [album]
  );

  return (
    <>
      <Meta album={album} />
      <div className="App">
        <AlbumHeader
          type={album.type}
          title={title}
          subtitle={subTitle}
          coverImageSrc={urlAlbumHeader(
            album.type,
            album.identifier,
            hasLargeCover
          )}
          isCoverLarge={hasLargeCover}
          nextLink={
            nextPhotos.length
              ? albumUrl(nextPhotos[0].type, nextPhotos[0].name_url)
              : ""
          }
          prevLink={
            prevPhotos.length
              ? albumUrl(prevPhotos[0].type, prevPhotos[0].name_url)
              : ""
          }
        />

        {album.name === "Geena" && <GeenaPage />}

        <div className="text-container">
          <ArticleSubHeader
            title={
              album.type === AlbumType.Highlights
                ? album.description
                : album.name
            }
            dateStart={album.date_start}
            dateEnd={album.date_end}
            danceEvent={
              album.type === AlbumType.Dance ? album.subtype : undefined
            }
          />

          <div dangerouslySetInnerHTML={{ __html: album.description }} />
          {!!album.description && (
            <>
              <br />
              <br />
            </>
          )}
        </div>

        <AlbumDisplayType
          selected={selectedDisplay}
          albumDisplaySelected={albumDisplaySelected}
        />
        <PhotosDisplay
          setIndex={setIndex}
          currentIndex={currentIndex}
          modalShow={modalShow}
          displayMode={selectedDisplay}
          images={imagesToDisplay}
          alt={title + " " + subTitle}
        />

        <div style={{ height: "3rem" }} />
        <FollowMe invertColors />

        {nextPhotos.length !== 0 && (
          <AlbumRecommended text="Next albums:" recommended={nextPhotos} />
        )}
        {prevPhotos.length !== 0 && (
          <AlbumRecommended text="Previous albums:" recommended={prevPhotos} />
        )}
        {album.name === "Geena" ? (
          <AlbumRecommendedMyLife />
        ) : recommended.length > 0 ? (
          <AlbumRecommended text="Recommended:" recommended={recommended} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
