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
import { GeenaPage } from "../../UI/GeenaPg";
import { AlbumDisplayType } from "./Components/AlbumDisplayType";
import { PhotosDisplay } from "./Components/PhotosDisplay";
import { AlbumRecommended } from "./Components/AlbumRecommended";
import { ArticleSubHeader } from "components/UI/ArticleSubHeader";
import { Flex } from "components/UI/Flex/Flex";
import { Spacer } from "components/UI/Spacer/Spacer";
import { ShareButtons } from "components/UI/Modals/ShareButtons";

interface AlbumPageProps {
  fullAlbum: FullAlbumDetails;
}

export const AlbumPage = ({
  fullAlbum: { images, album, prev: prevPhotos, recommended, next: nextPhotos },
}: AlbumPageProps) => {
  const { push, query } = useRouter();

  const [selectedDisplay, setSelectedDisplay] = useState(DefaultDisplayType);
  const [currentIndex, setCurrentIndex] = useState(undefined);

  const isTravelType = album.type === AlbumType.Travel;
  const isDanceType = album.type === AlbumType.Dance;
  const isHighlightType = album.type === AlbumType.Highlights;

  const [modalShow, setModalShow] = useState(false);

  type QueryType = {
    display?: PhotosDisplayType;
    img?: number;
  };

  function pushIndex(index: number) {
    let newQuery: QueryType = { ...query };
    if (index !== undefined) {
      newQuery = { ...newQuery, img: index + 1 };
    } else {
      delete newQuery.img;
    }
    pushQuery(newQuery);
  }

  function pushDisplay(display: PhotosDisplayType) {
    let newQuery: QueryType = { ...query };
    if (display !== DefaultDisplayType) {
      newQuery = { ...newQuery, display: display };
    } else delete newQuery.display;
    pushQuery(newQuery);
  }

  function pushQuery(newQuery: QueryType) {
    push(
      {
        query: newQuery,
      },
      undefined,
      {
        shallow: true,
      },
    );
  }

  useEffect(() => {
    const photoIndex = mapPhotoFromURL(window.location.search);
    const displayMode = mapPropertyFromURL(window.location.search, "display");

    if (displayMode !== undefined)
      setSelectedDisplay(displayMode as PhotosDisplayType);

    setCurrentIndex(photoIndex);
    setModalShow(photoIndex !== undefined ? true : false);
  }, []);

  const imagesFullPath = getFullPathImgs(images, album.identifier);

  const hasLargeCover = imagesFullPath.includes(
    articleCoverLarge(album.identifier),
  );
  const imagesToDisplay = imagesFullPath.filter(
    (img) =>
      img !== articleCoverLarge(album.identifier) &&
      (img.includes(".jpg") || img.includes(".png")),
  );

  function albumDisplaySelected(value: PhotosDisplayType) {
    setSelectedDisplay(value);
    pushDisplay(value);
  }

  async function setIndex(index: number) {
    setCurrentIndex(index);
    pushIndex(index);
    setModalShow(index !== undefined ? true : false);
    if (index !== undefined) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  const title = useMemo(
    () =>
      isTravelType && !!album.locations
        ? album.name_location
          ? album.name_location
          : getLocationsWithComaAnd(album.locations)
        : album.name,
    [album],
  );

  const subTitle = useMemo(
    () =>
      isDanceType && !!album.locations
        ? getLocationsWithComaAnd(album.locations) + ", " + album.country
        : album.country,
    [album],
  );

  return (
    <>
      <Meta album={album} />
      <Flex className_="App">
        <AlbumHeader
          type={album.type}
          title={title}
          subtitle={subTitle}
          coverImageSrc={urlAlbumHeader(
            album.type,
            album.identifier,
            hasLargeCover,
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
        <Spacer size={(s) => s.m} />
        {album.name === "Geena" && <GeenaPage />}

        <ArticleSubHeader
          title={isHighlightType ? album.description : album.name}
          dateStart={album.date_start}
          dateEnd={album.date_end}
          danceEvent={
            album.type === AlbumType.Dance ? album.subtype : undefined
          }
        />

        <div className="text-container">
          {!isHighlightType && (
            <div dangerouslySetInnerHTML={{ __html: album.description }} />
          )}
          {!isHighlightType && !!album.description && (
            <>
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
        <Flex align={(a) => a.center}>
          <ShareButtons facebook twitter whatsupp pinterest />
        </Flex>
        <div style={{ height: "3rem" }} />
        <FollowMe invertColors />

        {nextPhotos.length !== 0 && (
          <AlbumRecommended text="Next albums:" recommended={nextPhotos} />
        )}
        {prevPhotos.length !== 0 && (
          <AlbumRecommended text="Previous albums:" recommended={prevPhotos} />
        )}

        {recommended.length > 0 ? (
          <AlbumRecommended
            text={isHighlightType ? "More highlights:" : "Recommended:"}
            recommended={recommended}
          />
        ) : (
          ""
        )}
      </Flex>
    </>
  );
};
