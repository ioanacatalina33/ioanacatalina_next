import React from "react";
import LazyLoad from "react-lazy-load";

import { contentScroll } from "helpers";
import { ScreenType } from "helpers/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { useScreenSize, useScreenType } from "hooks/utils";

import { ImageLoader } from "../ImageLoader";

interface FullScreenLayerProps {
  imgUrl: string;
  text: string;
  textClass: string;
}

export const FullScreenLayer = (props: FullScreenLayerProps) => {
  const { screenHeight } = useScreenSize();
  const { screenType } = useScreenType();
  const { isIE } = useBrowsers();

  return (
    <div style={{ marginBottom: "105vh" }}>
      <LazyLoad debounce={false} offsetVertical={1000}>
        <div>
          <ImageLoader
            src={props.imgUrl}
            loadedClassName="img-loaded"
            loadingClassName="img-loading"
            style={{ width: isIE ? "auto" : "100%" }}
          />
          <div className="FullScreen-imgOverlay" />

          {props.text !== undefined && props.text !== "" ? (
            <div
              className={
                screenType === undefined || screenType !== ScreenType.Mobile
                  ? props.textClass + " img-loaded-text-span opacity45"
                  : "img-loaded-text-center opacity45 img-loaded-text-span"
              }
            >
              <h1>{props.text}</h1>
            </div>
          ) : (
            ""
          )}

          <button
            onClick={() => contentScroll(screenHeight)}
            className="arrow-down"
          >
            <i className="fa fa-arrow-down arrow-down-icon"></i>
          </button>
        </div>
      </LazyLoad>
    </div>
  );
};

export default FullScreenLayer;
