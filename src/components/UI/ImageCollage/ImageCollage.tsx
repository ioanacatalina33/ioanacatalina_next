import React from "react";
import LazyLoad from "react-lazy-load";

import { ScreenType } from "types/enums";
import { useScreenSize, useScreenType } from "hooks/utils";

interface ImageCollageProps {
  photos: string[];
  collaborations?: boolean;
  photoPadding?: string;
  marginTopBottom?: string;
  fullWidth?: number;
}

export const ImageCollage = ({
  photos,
  collaborations,
  photoPadding,
  marginTopBottom,
  fullWidth: fullWidthParam,
}: ImageCollageProps) => {
  const { screenType } = useScreenType();
  const { screenWidth } = useScreenSize();

  const imageRatio = 66.7;

  const renderImages =
    screenType === ScreenType.Desktop && collaborations !== true
      ? photos
      : photos.slice(0, 4);
  const imageWidthPercentage =
    screenType !== ScreenType.Desktop || collaborations
      ? 50
      : 100 / renderImages.length;
  const imageStyle = {
    width: imageWidthPercentage + "%",
    padding:
      !photoPadding || screenType === ScreenType.Mobile ? "0rem" : photoPadding,
  };
  let imageHeight = 0;
  const fullWidth = !!fullWidthParam ? fullWidthParam : screenWidth;

  if (screenType !== undefined) {
    const imageWidth = (fullWidth * imageWidthPercentage) / 100;
    imageHeight = (imageWidth * imageRatio) / 100;
    if (screenType !== ScreenType.Desktop || collaborations)
      imageHeight = imageHeight * 2;
  }

  return (
    <div
      style={
        !isNaN(imageHeight)
          ? {
              height: imageHeight,
              width: fullWidth,
              margin: (marginTopBottom ? marginTopBottom : "3rem") + " auto",
            }
          : {}
      }
      className="collage-container"
    >
      <LazyLoad debounce={false} offsetVertical={500}>
        <div>
          {renderImages.map((image) => (
            <img
              className="collage-img"
              key={image}
              style={imageStyle}
              alt=""
              src={image}
            />
          ))}
        </div>
      </LazyLoad>
    </div>
  );
};
