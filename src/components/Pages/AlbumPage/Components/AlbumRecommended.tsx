import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useScreenType } from "hooks";
import { Album } from "types";
import { PhotoContainer } from "components/UI/PhotoContainers";
import { PhotoContainerType } from "components/UI/PhotoContainers/PhotoContainer";

interface AlbumRecommendedProps {
  text: string;
  recommended: Album[];
}

export const AlbumRecommended = ({
  text,
  recommended,
}: AlbumRecommendedProps) => {
  const { screenType } = useScreenType();
  return (
    <div className="photowall-container-recommended">
      <h2 style={{ textAlign: "center" }}>{text}</h2>
      <div className="photowall-container-albums-recommended">
        <FadeIn>
          <div className="photo-wall-recommended row">
            {recommended.map((recom, index) => (
              <PhotoContainer
                key={index}
                album={recom}
                type={PhotoContainerType.PHOTOC_REC}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
