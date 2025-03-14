import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "helpers/imageLoader";

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

  return (
    <div className="photo-col photo-col-padding-v3 col-lg-4 col-md-4 col-5 col-xs-offset-2 col-centered">
      <Link scroll={false} href={url}>
        <div
          className="photo-container photo-container-opacity"
          style={cornersStyle}
        >
          <div className="photo-container-img-space-home">
            <Image
              className="cover-loaded"
              loader={imageLoader}
              style={cornersStyle}
              src={img}
              alt={name}
              width={0}
              height={0}
              onLoad={onLoad}
              sizes="(max-width: 768px) 50vw, (max-width: 1000px) 25vw"
            />
            <span
              style={cornersStyle}
              className="photo-container-title photo-container-title-home"
            >
              {name}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
