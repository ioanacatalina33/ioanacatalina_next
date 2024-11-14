import React from "react";
import LazyLoad from "react-lazy-load";

import { contentScroll } from "helpers";
import { ScreenType } from "types/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { useScreenSize, useScreenType } from "hooks/utils";
import { FullSizeImage } from "staticModel";

interface FullScreenLayerProps {
  fullSizeImage: FullSizeImage;
  inverse?: boolean;
}

export const FullScreenLayer = ({
  fullSizeImage,
  inverse,
}: FullScreenLayerProps) => {
  const { screenHeight } = useScreenSize();
  const { isMobile, screenType, isDesktop } = useScreenType();
  const { isIE } = useBrowsers();

  const isMobileOrUndefined = screenType === undefined || isMobile;
  const headerVisible = isDesktop;

  const splitText = fullSizeImage.text.split("<br/>");

  return (
    <div
      className={"header-album"}
      style={headerVisible ? { height: "100vh", marginTop: "-60px" } : {}}
    >
      <div className="album-header-wrapper">
        <img
          className="img-loaded"
          style={{
            objectFit: "cover",
            width: isIE ? "auto" : "100%",
          }}
          src={fullSizeImage.url}
          alt={fullSizeImage.alt}
        />
        <div className="header-shader" />

        {fullSizeImage.text !== undefined && fullSizeImage.text !== "" ? (
          <div
            className={
              (!isMobileOrUndefined
                ? fullSizeImage.class.textPosition
                : "img-loaded-text-center") + " img-loaded-text-span"
            }
            style={{
              width: isMobileOrUndefined
                ? "85%"
                : fullSizeImage.class.width
                  ? fullSizeImage.class.width + "%"
                  : "auto",
              opacity: isMobile
                ? "0.50"
                : fullSizeImage.class.opacity ?? "0.45",
            }}
          >
            <h1>
              {splitText.length === 1
                ? fullSizeImage.text
                : splitText.map((text) => (
                    <>
                      {text}
                      <br />
                    </>
                  ))}
            </h1>
            {fullSizeImage.author ? (
              <h4 style={{ marginTop: "-0.6rem" }}>
                {"—" + fullSizeImage.author}
              </h4>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <button
          onClick={() => contentScroll(screenHeight - 60)}
          className={
            "arrow-down arrow-down-absolute " +
            (inverse ? "arrow-down-inverted" : "")
          }
        >
          <i
            className={
              "fa fa-angle-down " +
              (inverse ? "arrow-down-icon-inverted" : "arrow-down-icon")
            }
          ></i>
        </button>
      </div>
      {/* </div> */}
      {/* </LazyLoad> */}
    </div>
  );
};

export default FullScreenLayer;
