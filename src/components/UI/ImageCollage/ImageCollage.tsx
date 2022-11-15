import React from "react";
import LazyLoad from "react-lazy-load";

import { ScreenType } from "types/enums";
import { useScreenSize, useScreenType } from "hooks/utils";

interface ImageCollageProps {
  photos: string[];
  alt?: string;
  collaborations?: boolean;
  photoPadding?: string;
  marginTopBottom?: string;
  fullWidth?: number;
}

export const ImageCollage = ({
  photos,
  alt,
  collaborations,
  photoPadding,
  marginTopBottom,
  fullWidth: fullWidthParam,
}: ImageCollageProps) => {
  const { screenType } = useScreenType();
  const { screenWidth } = useScreenSize();

  const imageRatio = 66.7;

  const renderImages =
    screenType === ScreenType.Desktop ? photos : photos.slice(0, 4);

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
  const fullWidth = fullWidthParam
    ? Math.min(fullWidthParam, screenWidth)
    : screenWidth;

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
              maxWidth: fullWidthParam ? fullWidthParam : "100%",
              margin:
                (marginTopBottom
                  ? marginTopBottom
                  : screenType !== ScreenType.Mobile
                  ? "3rem"
                  : "1rem") + " auto",
              padding: "0rem",
            }
          : {}
      }
    >
      <LazyLoad debounce={false} offsetVertical={500}>
        <div>
          {renderImages.map((image, i) => (
            <img
              className="collage-img"
              key={image}
              style={imageStyle}
              alt={(alt ? alt : "") + i.toString()}
              src={image}
            />
          ))}
        </div>
      </LazyLoad>
    </div>
  );
};
