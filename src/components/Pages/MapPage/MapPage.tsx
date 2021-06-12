import { sleep } from "helpers";
import { useFilteredLocations } from "hooks";
import React, { useEffect, useState } from "react";

import { FiltersMap } from "components/UI/Filters";
import { Location } from "types";

import { MapAlbums } from "./MapAlbums";
import { MapComponent } from "./MapComponent";

export const MapPage = ({ locations }: { locations: Location[] }) => {
  const { filteredLocations } = useFilteredLocations(locations);

  const [selectedLocation, setSelectedLocation] = useState<Location>();
  const [showAlbums, setShowAlbums] = useState(false);

  async function onMarkerClicked(location: Location) {
    if (
      selectedLocation !== undefined &&
      selectedLocation.name === location.name
    ) {
      setSelectedLocation(undefined);
      setShowAlbums(false);
    } else {
      if (selectedLocation !== undefined) {
        //we need to wait a little
        setSelectedLocation(undefined);
        await sleep(1);
      }
      setSelectedLocation(location);
      setShowAlbums(true);
    }
  }

  function onMarkerAlbumsClosed() {
    setSelectedLocation(undefined);
    setShowAlbums(false);
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  function escFunction(evt) {
    if (evt.keyCode === 27) {
      onMarkerAlbumsClosed();
    }
  }

  return (
    <div style={{ position: "absolute", top: "0", bottom: "0", width: "100%" }}>
      <MapComponent
        onMarkerClicked={onMarkerClicked}
        locationsFiltered={filteredLocations}
        selectedLocation={selectedLocation}
      />
      <FiltersMap locations={locations} nrFiltered={filteredLocations.length} />
      <MapAlbums
        showAlbums={showAlbums}
        location={selectedLocation}
        onClose={onMarkerAlbumsClosed}
      />
    </div>
  );
};
