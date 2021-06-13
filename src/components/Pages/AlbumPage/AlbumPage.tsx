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
  getLocationsWithComa,
} from "helpers";
import { AlbumType, FullAlbumDetails, PhotosDisplayType } from "types";

import { AlbumHeader } from "./Components/AlbumHeader";
import { GeenaPage } from "../GeenaPage";
import { AlbumDisplayType } from "./Components/AlbumDisplayType";
import { PhotosDisplay } from "./Components/PhotosDisplay";
import { AlbumRecommended } from "./Components/AlbumRecommended";
import { AlbumRecommendedMyLife } from "./Components/AlbumRecommendedMyLife";
import { AlbumSubHeader } from "./Components/AlbumSubHeader";

interface AlbumPageProps {
  fullAlbum: FullAlbumDetails;
}

export const AlbumPage = ({
  fullAlbum: { images, album, prev: prevPhotos, recommended, next: nextPhotos },
}: AlbumPageProps) => {
  const { push } = useRouter();

  const [selectedDisplay, setSelectedDisplay] = useState(DefaultDisplayType);
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [pathname, setPathname] = useState("");

  const [modalShow, setModalShow] = useState(false);

  type QueryType = {
    display?: PhotosDisplayType;
    img?: number;
  };

  function pushQuery() {
    let query: QueryType = {};
    if (selectedDisplay !== DefaultDisplayType)
      query = { ...query, display: selectedDisplay };

    if (currentIndex !== undefined) {
      query = { ...query, img: currentIndex + 1 };
    }

    push(
      {
        pathname: pathname,
        query: query,
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

    // @ts-ignore
    if (displayMode !== undefined) setSelectedDisplay(displayMode);

    setCurrentIndex(photoIndex);
    setModalShow(photoIndex !== undefined ? true : false);
  }, []);

  const imagesFullPath = getFullPathImgs(images, album.identifier);

  const hasLargeCover = imagesFullPath.includes(
    articleCoverLarge(album.identifier)
  );
  const imagesToDisplay = imagesFullPath.filter(
    (img) => img !== articleCoverLarge(album.identifier)
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
        ? !!album.name_location
          ? album.name_location
          : getLocationsWithComa(album.locations)
        : album.name,
    [album]
  );

  const subTitle = useMemo(
    () =>
      album.type === AlbumType.Dance && !!album.locations
        ? getLocationsWithComa(album.locations) + ", " + album.country
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
          {<AlbumSubHeader album={album} />}

          <div dangerouslySetInnerHTML={{ __html: album.description }} />
          <br />
          <br />
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

        <FollowMe />

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
