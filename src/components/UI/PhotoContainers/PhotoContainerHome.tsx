import Link from "next/link";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

interface PhotoContainerHome {
  url: string;
  img: string;
  name: string;
  lazyLoad?: string;
}

export const PhotoContainerHome = ({
  url,
  img,
  name,
  lazyLoad,
}: PhotoContainerHome) => {
  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }

  const cornersStyle = { borderRadius: "0.1rem" };

  const loadedImg = (
    <img
      className="cover-loaded"
      style={cornersStyle}
      src={img}
      alt={name}
      onLoad={onLoad}
    />
  );

  return (
    <div
      className="photo-col-home col-lg-4 col-md-4 col-5 col-xs-offset-2 col-centered"
      // style={{ visibility: show ? "visible" : "hidden" }}
    >
      {/* <LazyLoad
        debounce={false}
        offsetVertical={500}
        placeholder={<img alt="" src="/img/loading.gif" />}
        alt=""
      > */}
      <Link scroll={false} href={url}>
        <a>
          <div
            className="photo-container photo-container-opacity"
            style={cornersStyle}
          >
            <div className="photo-container-img-space">
              <div className="loading-animation" style={cornersStyle}>
                <img
                  className="photo-small"
                  onLoad={onLoad}
                  style={{ visibility: "hidden", ...cornersStyle }}
                  src={"/img/cover_placeholder_square.jpg"}
                  alt=""
                />
              </div>
              {lazyLoad ? (
                <LazyLoad debounce={false} offsetVertical={300}>
                  {loadedImg}
                </LazyLoad>
              ) : (
                loadedImg
              )}
              <span
                style={cornersStyle}
                className="photo-container-title photo-container-title-home"
              >
                {name}
              </span>
            </div>
          </div>
        </a>
      </Link>
      {/* </LazyLoad> */}
    </div>
  );
};
