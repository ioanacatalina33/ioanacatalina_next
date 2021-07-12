import React, { useState } from "react";
import { PhotosDisplayType } from "types";
import { PhotosDisplay } from "../AlbumPage/Components/PhotosDisplay";

export function BlogImagesDisplay({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [modalShow, setModalShow] = useState(false);

  async function setIndex(index: number) {
    setCurrentIndex(index);
    setModalShow(index !== undefined ? true : false);
    if (index !== undefined) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  return (
    <>
      <PhotosDisplay
        setIndex={setIndex}
        currentIndex={currentIndex}
        modalShow={modalShow}
        displayMode={PhotosDisplayType.FOUR}
        images={images}
        alt={alt}
      />
    </>
  );
}
