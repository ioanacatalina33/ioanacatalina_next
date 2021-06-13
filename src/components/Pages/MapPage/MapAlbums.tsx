import React from "react";
import { PhotoContainerMap } from "../../UI/PhotoContainers";

import { Location } from "types";

interface MapAlbumsProps {
  showAlbums: boolean;
  location: Location;
  onClose: () => void;
}

export const MapAlbums = ({
  showAlbums,
  location,
  onClose,
}: MapAlbumsProps) => {
  return (
    <div
      id="map-component-wrapper"
      className={showAlbums ? "slideIn" : "slideOut"}
    >
      <div className="map-component-close-button">
        <button onClick={onClose} className="map-albums-close">
          <i className="fa fa-close"></i>
        </button>
      </div>
      <h3 style={{ textAlign: "center", color: "#222222" }}>
        {location ? "Trips in " + location.name : ""}
      </h3>

      {location && (
        <div className="map-component">
          <div className="photo-wall-map row">
            {location.articles.map((article, index) => (
              <PhotoContainerMap key={index} article={article} />
            ))}
          </div>{" "}
        </div>
      )}
    </div>
  );
};
