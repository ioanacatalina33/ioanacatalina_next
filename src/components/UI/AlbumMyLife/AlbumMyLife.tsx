import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { getHighlightsAlbums } from "staticModel";

import {
  PhotoContainerHighlights,
  PhotoContainerType,
} from "../PhotoContainers/PhotoContainerHighlights";

export const AlbumMyLife = () => {
  return (
    <div>
      <div className="text-container text-centered">
        <span className="text-container-bold">
          If you want to see more photos from my life follow the album below:
        </span>
      </div>

      <FadeIn>
        <div
          className="photo-wall-aboutme"
          style={{ padding: "0rem 0rem 2rem 0rem" }}
        >
          <PhotoContainerHighlights
            album={getHighlightsAlbums("myadventures")[0]}
            type={PhotoContainerType.PHOTOC_REC}
            isSingle
          />
        </div>
      </FadeIn>
    </div>
  );
};
