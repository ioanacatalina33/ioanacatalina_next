import React from "react";
import Image from "next/image";

import { contentScroll } from "helpers";
import { useBrowsers } from "hooks/useBrowsers";
import { useScreenSize, useScreenType } from "hooks/utils";
import { FullSizeImage } from "staticModel";
import { imageLoader } from "helpers/imageLoader";

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

  const isMobileOrUndefined = screenType === undefined || isMobile;
  const headerVisible = isDesktop;

  const splitText = fullSizeImage.text.split("<br/>");

  return (
    <div
      className={"header-album"}
      style={headerVisible ? { height: "100vh", marginTop: "-51px" } : {}}
    >
      <div className="album-header-wrapper">
        {fullSizeImage.url && (
          <Image
            src={fullSizeImage.url}
            loader={imageLoader}
            className="img-loaded"
            alt={"Full screen representative nature image"}
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL="./img/gradient_10x10_horizontal.png"
            priority
          />
        )}
        {!isMobile && <div className="header-shader" />}

        {fullSizeImage.text !== undefined && fullSizeImage.text !== "" ? (
          <div
            className={
              (!isMobileOrUndefined
                ? fullSizeImage.class.textPosition
                : "img-loaded-text-center-mobile") + " img-loaded-text-span"
            }
            style={{
              width: isMobileOrUndefined
                ? "85%"
                : fullSizeImage.class.width
                  ? fullSizeImage.class.width + "%"
                  : "auto",
              opacity: isMobile
                ? fullSizeImage.class.mobileOpacity ?? "0.50"
                : fullSizeImage.class.opacity ?? "0.45",
            }}
          >
            <h1>
              {splitText.length === 1
                ? fullSizeImage.text
                : splitText.map((text) => (
                    <span key={text}>
                      {text}
                      <br />
                    </span>
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
          aria-label="Go to content"
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
    </div>
  );
};

export default FullScreenLayer;
