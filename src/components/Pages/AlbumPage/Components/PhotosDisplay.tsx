import React, { useState } from "react";

import { ModalBuyDigital } from "components/UI/Modals";
import { useScreenType } from "hooks";
import { PhotosDisplayType } from "types";

import { ImageLoaderDisplay } from "./ImageLoaderDisplay";
import { SlideshowModal } from "./SlideshowModal";
import LazyLoad from "react-lazy-load";
import { Flex } from "components/UI/Flex/Flex";

interface PhotosDisplayProps {
  currentIndex: number;
  modalShow: boolean;
  images: string[];
  alt: string;
  displayMode: PhotosDisplayType;
  setIndex: (value: number) => void;
}

export const PhotosDisplay = ({
  setIndex,
  images,
  alt,
  modalShow,
  displayMode,
  currentIndex,
}: PhotosDisplayProps) => {
  const { isDesktop, isMobile } = useScreenType();

  const [digitalShow, setDigitalShow] = useState<number | undefined>(undefined);

  function getPicWidth(mode: PhotosDisplayType) {
    let picWidth = "100%";
    switch (mode) {
      case PhotosDisplayType.ONE:
        picWidth = "100%";
        break;
      case PhotosDisplayType.TWO:
        picWidth = "50%";
        break;
      case PhotosDisplayType.THREE:
        picWidth = "33%";
        break;
      case "4":
        PhotosDisplayType.FOUR;
        picWidth = "25%";
        break;
      default:
        break;
    }
    return picWidth;
  }

  async function imageClicked(index: number) {
    if (!isMobile) {
      setIndex(index);
    }
  }

  async function modalClose() {
    setIndex(undefined);
  }

  async function onLeft() {
    let current = currentIndex;
    if (current !== 0) {
      current = current - 1;
      setIndex(current);
    }
  }

  async function onRight() {
    let current = currentIndex;
    if (current !== images.length - 1) {
      current = current + 1;
      setIndex(current);
    }
  }

  function getImage(image: string, index: number) {
    return (
      <div
        onClick={() => imageClicked(index)}
        key={image + index}
        style={{
          width: getPicWidth(isMobile ? PhotosDisplayType.ONE : displayMode),
        }}
        className="photo-display-container"
      >
        <div className="photo-small-display loading-animation">
          <LazyLoad>
            <ImageLoaderDisplay
              displayMode={displayMode}
              loadedClassName={
                "img-display-loaded " + (isDesktop ? "image-zoom" : "")
              }
              loadingClassName="img-display-loading"
              src={image}
              alt={alt + " " + index}
            />
          </LazyLoad>
        </div>
      </div>
    );
  }

  const [printsDisabled, setPrintsDisabled] = useState(false);

  function disablePrints() {
    setPrintsDisabled(true);
    setTimeout(() => {
      setPrintsDisabled(false);
    }, 500);
  }

  return (
    <Flex fullWidth column align={(a) => a.center}>
      <SlideshowModal
        show={modalShow}
        images={images}
        currentIndex={currentIndex}
        onClose={modalClose}
        onLeft={onLeft}
        onRight={onRight}
      />
      <ModalBuyDigital
        show={digitalShow !== undefined}
        onHide={() => setDigitalShow(undefined)}
        imgurl={images[digitalShow]}
      />

      <div className="photo-display">
        {images !== undefined && images.length > 0
          ? images.map((image, index) => getImage(image, index))
          : ""}
      </div>

      {/* <div className="photo-display-grid">
        {images.map((image, index) => <></>)}
      </div> */}
    </Flex>
  );
};

{
}
