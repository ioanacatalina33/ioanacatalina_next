import React from "react";
import FadeIn from "react-fade-in";

import { AlbumType } from "types";
import { Album } from "types/modelTypes";

import { PhotoContainer } from "../PhotoContainers";
import {
  PhotoContainerHighlights,
  PhotoContainerType,
} from "../PhotoContainers/PhotoContainerHighlights";

interface PhotowallProps {
  albums: Album[];
  type?: AlbumType;
  loading?: boolean;
  filtered?: boolean;
  lazyload?: boolean;
}

export const Photowall = ({
  albums,
  type,
  loading,
  lazyload,
  filtered = true,
}: PhotowallProps) => {
  const emptyAlbums = !albums || !albums.length;

  return (
    <div className="photowall-container" style={{ minWidth: "30rem" }}>
      <div className="photowall-container-albums">
        {loading ? (
          <></>
        ) : (
          // <div className="loading-plane">
          //   <div className="animated-background"></div>
          // </div>
          <>
            {filtered && emptyAlbums && (
              <div className="no-albums-found ">
                No albums found with these filters!
              </div>
            )}

            {!filtered && emptyAlbums && (
              <div className="no-albums-found ">No albums to show!</div>
            )}

            {!emptyAlbums && (
              // <FadeIn>
              <div className="photo-wall row">
                {albums.map((album, index) =>
                  type === AlbumType.Highlights ? (
                    <PhotoContainerHighlights
                      key={index}
                      album={album}
                      type={PhotoContainerType.PHOTOC_MAIN}
                    />
                  ) : (
                    <PhotoContainer
                      key={index}
                      album={album}
                      lazyload={lazyload}
                      type={PhotoContainerType.PHOTOC_MAIN}
                    />
                  )
                )}
              </div>
              // </FadeIn>
            )}
          </>
        )}
      </div>
    </div>
  );
};
