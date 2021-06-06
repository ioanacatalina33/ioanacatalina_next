import React from "react";
import FadeIn from "react-fade-in";
import { Album, Highlight } from "types/modelTypes";
import { PhotoContainer } from "../PhotoContainers";
import {
  PhotoContainerHighlights,
  PhotoContainerType,
} from "../PhotoContainers/PhotoContainerHighlights";

interface PhotowallProps {
  albums?: Album[];
  highlights?: Highlight[];
  loading?: boolean;
  filtered?: boolean;
}

export const Photowall = ({
  albums,
  highlights,
  loading,
  filtered = true,
}: PhotowallProps) => {
  const emptyAlbums = !albums || !albums.length;
  const emptyHighlights = highlights || !highlights.length;
  const emptyList = emptyAlbums && emptyHighlights;

  return (
    <div className="photowall-container">
      <div className="photowall-container-albums">
        {loading ? (
          <></>
        ) : (
          // <div className="loading-plane">
          //   <div className="animated-background"></div>
          // </div>
          <>
            {filtered && emptyList && (
              <div className="no-albums-found ">
                No albums found with these filters!
              </div>
            )}

            {!filtered && emptyList && (
              <div className="no-albums-found ">No albums to show!</div>
            )}

            {!emptyAlbums && (
              <FadeIn>
                <div className="photo-wall row">
                  {albums.map((album, index) => (
                    <PhotoContainer
                      key={index}
                      article={album}
                      type={PhotoContainerType.PHOTOC_MAIN}
                    />
                  ))}
                </div>
              </FadeIn>
            )}

            {!emptyHighlights && (
              <FadeIn>
                <div className="photo-wall row">
                  {highlights.map((album, index) => (
                    <PhotoContainerHighlights
                      key={index}
                      article={album}
                      type={PhotoContainerType.PHOTOC_MAIN}
                    />
                  ))}
                </div>
              </FadeIn>
            )}
          </>
        )}
      </div>
    </div>
  );
};
