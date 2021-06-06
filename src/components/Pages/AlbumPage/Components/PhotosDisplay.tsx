import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import { Button } from "react-bootstrap";

import { ModalBuyDigital } from "components/UI/Modals";
import { WEBSITE_PATH } from "helpers";
import { useScreenType } from "hooks";
import { ScreenType } from "types";

import { PhotosDisplayType } from "../AlbumPage";
import { ImageLoaderDisplay } from "./ImageLoaderDisplay";
import SlideshowModal from "./SlideshowModal";

interface PhotosDisplayProps {
  currentIndex: number;
  modalShow: boolean;
  images: string[];
  displayMode: PhotosDisplayType;
  setIndex: (value: number) => void;
}

export const PhotosDisplay = ({
  setIndex,
  images,
  modalShow,
  displayMode,
  currentIndex,
}: PhotosDisplayProps) => {
  const { screenType } = useScreenType();

  const [digitalShow, setDigitalShow] = useState<number | undefined>(undefined);

  function getPicWidth(mode: PhotosDisplayType) {
    var picWidth = "100%";
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
    if (screenType !== ScreenType.Mobile) {
      setIndex(index);
    }
  }

  async function modalClose() {
    setIndex(undefined);
  }

  async function onLeft() {
    var current = currentIndex;
    if (current !== 0) {
      current = current - 1;
      setIndex(current);
    }
  }

  async function onRight() {
    var current = currentIndex;
    if (current !== images.length - 1) {
      current = current + 1;
      setIndex(current);
    }
  }

  function getImage(image: string, index: number) {
    return (
      <div
        onClick={() => imageClicked(index)}
        key={index}
        style={{
          width: getPicWidth(
            screenType === ScreenType.Mobile
              ? PhotosDisplayType.ONE
              : displayMode
          ),
        }}
        className="photo-display-container"
      >
        <div className="photo-small-display">
          <LazyLoad debounce={false} offsetVertical={500}>
            <ImageLoaderDisplay
              displayMode={displayMode}
              loadedClassName="img-display-loaded"
              loadingClassName="img-display-loading"
              src={image}
            />
          </LazyLoad>
        </div>
      </div>
    );
  }

  return (
    <div>
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
          ? images.map((image, index) =>
              screenType !== ScreenType.Mobile ? (
                getImage(image, index)
              ) : (
                <div key={index} style={{ paddingBottom: "0.5rem" }}>
                  {getImage(image, index)}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="warning"
                      onClick={() => setDigitalShow(index)}
                      className="button-buy"
                      style={{ fontSize: "0.9rem", padding: "0.5rem 1.4rem" }}
                    >
                      Buy digital
                    </Button>
                    <Button
                      variant="warning"
                      data-cp-url={WEBSITE_PATH + "/offline" + image}
                      className="button-buy"
                      style={{ fontSize: "0.9rem", padding: "0.5rem 1.4rem" }}
                    >
                      Buy print
                    </Button>
                  </div>
                </div>
              )
            )
          : ""}
      </div>
    </div>
  );
};
