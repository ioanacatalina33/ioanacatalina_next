import React, { useEffect, useState } from "react";

import { useScreenType } from "hooks";
import { AlbumType, FullAlbumDetails, FullHighlightDetails } from "types";
import { useRouter } from "next/router";
import {
  mapURLPhoto,
  mapPhotoFromURL,
  mapPropertyFromURL,
  articleCoverLarge,
  mapURLToProperty,
  urlAlbumHeader,
} from "helpers";
import { FollowMe } from "components/UI/FollowMe";
import { AlbumHeader } from "./Components/AlbumHeader";

interface AlbumPageProps {
  fullAlbum?: FullAlbumDetails;
  fullHighlight?: FullHighlightDetails;
  type: AlbumType;
}

export const AlbumPage = ({
  type,
  fullAlbum,
  fullHighlight,
}: AlbumPageProps) => {
  const { screenType } = useScreenType();
  const { pathname } = useRouter();

  const [selectedDisplay, setSelectedDisplay] = useState("4");
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [modalShow, setModalShow] = useState(false);

  function onImgIndexChanged(imgIndex: number) {
    var url = mapURLPhoto(imgIndex, window.location.search);
    // history.replace(`?${url}`);
  }

  useEffect(() => {
    var photoIndex = mapPhotoFromURL(window.location.search);
    var displayMode = mapPropertyFromURL(window.location.search, "display");

    if (displayMode !== undefined) setSelectedDisplay(displayMode);
    setCurrentIndex(photoIndex);
    setModalShow(photoIndex !== undefined ? true : false);
  }, []);

  const identifier = fullAlbum
    ? fullAlbum.album.identifier
    : fullHighlight
    ? fullHighlight.highlight.identifier
    : "";

  const images = fullAlbum
    ? fullAlbum.images
    : fullHighlight
    ? fullHighlight.images
    : [];

  const hasLargeCover = images.includes(articleCoverLarge(identifier));
  const imagesToDisplay = images.filter(
    (img) => img !== articleCoverLarge(identifier)
  );

  const nextPhotos = fullAlbum ? fullAlbum.next : fullHighlight.next;

  const prevPhotos = fullAlbum ? fullAlbum.prev : fullHighlight.prev;

  const recommended = fullAlbum
    ? fullAlbum.recommended
    : fullHighlight.recommended;

  function albumDisplaySelected(value) {
    setSelectedDisplay(value);
    var url = mapURLToProperty(value, "display", window.location.search);
    // history.replace(`?${url}`);
  }

  async function setIndex(index) {
    setCurrentIndex(index);
    setModalShow(index !== undefined ? true : false);
    if (index !== undefined) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    onImgIndexChanged(index);
  }

  return (
    <div className="App">
      {/* <AlbumHeader
        type={type}
        coverImageSrc={urlAlbumHeader(type, identifier, hasLargeCover)}
        isCoverLarge={hasLargeCover}
        country={fullAlbum ? fullAlbum.album.country : null}
        locations={fullAlbum ? fullAlbum.album.locations : null}
        nextLink={nextPhotos.length ? nextPhotos[0].identifier : ""}
      />

      {fullHighlight && fullHighlight.highlight.name === "Geena" && <Geena />}

      <div className="text-container">
        {<AlbumSubHeader article={article} />}

        <div dangerouslySetInnerHTML={{ __html: article.description }} />
        <br />
        <br />
      </div>

      <AlbumDisplayType
        selected={selectedDisplay}
        albumDisplaySelected={albumDisplaySelected}
        screenType={screenType}
      />

      <PhotosDisplay
        setIndex={setIndex}
        currentIndex={currentIndex}
        modalShow={modalShow}
        displayMode={selectedDisplay}
        images={imagesToDisplay}
      />

      <FollowMe />

      {nextPhotos.length !== 0 && (
        <AlbumRecommended
          text="Next albums:"
          recommended={nextPhotos}
          loadingRecommended={false}
        />
      )}
      {prevPhotos.length !== 0 && (
        <AlbumRecommended
          text="Previous albums:"
          recommended={prevPhotos}
          loadingRecommended={false}
        />
      )}
      {article !== undefined && article.name === "Geena" ? (
        <AlbumRecommendedMyLife />
      ) : recommended.length > 0 ? (
        <AlbumRecommended
          text="Recommended:"
          recommended={recommended}
          loadingRecommended={loadingRecommended}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};
