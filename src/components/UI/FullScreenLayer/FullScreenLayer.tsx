import React from "react";
import LazyLoad from "react-lazy-load";

import { contentScroll } from "helpers";
import { ScreenType } from "types/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { useScreenSize, useScreenType } from "hooks/utils";
import { FullSizeImage } from "staticModel";

import { ImageLoader } from "../ImageLoader";

interface FullScreenLayerProps {
  fullSizeImage: FullSizeImage;
}

export const FullScreenLayer = ({ fullSizeImage }: FullScreenLayerProps) => {
  const { screenHeight } = useScreenSize();
  const { screenType } = useScreenType();
  const { isIE } = useBrowsers();

  return (
    <div style={{ marginBottom: "100vh" }}>
      {/* <LazyLoad debounce={false} offsetVertical={1000}> */}
      <div>
        <ImageLoader
          src={fullSizeImage.url}
          loadedClassName="img-loaded"
          loadingClassName="img-loading"
          style={{ width: isIE ? "auto" : "100%" }}
          alt={fullSizeImage.alt}
        />
        <div className="FullScreen-imgOverlay" />

        {fullSizeImage.text !== undefined && fullSizeImage.text !== "" ? (
          <div
            className={
              screenType === undefined || screenType !== ScreenType.Mobile
                ? fullSizeImage.class + " img-loaded-text-span opacity45"
                : "img-loaded-text-center opacity45 img-loaded-text-span"
            }
          >
            <h1>{fullSizeImage.text}</h1>
          </div>
        ) : (
          ""
        )}

        <button
          onClick={() => contentScroll(screenHeight - 60)}
          className="arrow-down arrow-down-absolute"
        >
          <i className="fa fa-angle-down arrow-down-icon"></i>
        </button>
      </div>
      {/* </LazyLoad> */}
    </div>
  );
};

export default FullScreenLayer;
