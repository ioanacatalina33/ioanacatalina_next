// ES6
import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl";
import Map from "react-map-gl";

import { Location } from "types";

interface MapComponentProps {
  locationsFiltered: Location[];
  selectedLocation: Location;
  width?: string;
  height?: string;
  viewport?: ViewPort;
  onMarkerClicked: (location: Location) => void;
}

export interface ViewPort {
  longitude: number;
  latitude: number;
  zoom: number;
}

export default function MapComponent({
  locationsFiltered,
  selectedLocation,
  width,
  height,
  viewport: viewportProp,
  onMarkerClicked,
}: MapComponentProps) {
  const [viewport, setViewport] = useState(
    viewportProp
      ? viewportProp
      : {
          longitude: 0,
          latitude: 44.854256,
          zoom: 2.2,
        },
  );

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [markerSize, setMarkerSize] = useState({
    width: "1.1rem",
    height: "1.39rem",
    offsetLeft: 0,
    setOffsetTop: 0,
  });

  useEffect(() => {
    if (viewport.zoom < 2)
      setMarkerSize({
        width: "0.85rem",
        height: "1.14rem",
        offsetLeft: 0,
        setOffsetTop: -7,
      });
    else if (viewport.zoom < 3.2)
      setMarkerSize({
        width: "1.1rem",
        height: "1.39rem",
        offsetLeft: 0,
        setOffsetTop: -9,
      });
    else if (viewport.zoom < 5)
      setMarkerSize({
        width: "1.2rem",
        height: "1.5rem",
        offsetLeft: 0,
        setOffsetTop: -10,
      });
    else
      setMarkerSize({
        width: "1.7rem",
        height: "2.2rem",
        offsetLeft: 0,
        setOffsetTop: -14,
      });
  }, [viewport.zoom]);

  const markers = React.useMemo(
    () =>
      locationsFiltered.map((location) => (
        <Marker
          key={location.name}
          longitude={parseFloat(location.coord_long)}
          latitude={parseFloat(location.coord_lat)}
          offset={[markerSize.offsetLeft, markerSize.setOffsetTop]}
          style={{
            zIndex:
              selectedLocation && selectedLocation.name === location.name
                ? 1
                : 0,
          }}
        >
          <div
            onClick={() => onMarkerClicked(location)}
            style={{
              width: markerSize.width,
              height: markerSize.height,
            }}
            className={
              "marker-img " +
              (selectedLocation && selectedLocation.name === location.name
                ? "marker-img-active"
                : "marker-img-off")
            }
          />
        </Marker>
      )),
    [locationsFiltered, selectedLocation, markerSize],
  );

  return (
    <Map
      initialViewState={{ ...viewport }}
      style={{ width: width ?? "100vw", height: height ?? "100vh" }}
      mapboxAccessToken={token}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      //mapStyle="mapbox://styles/mapbox/satellite-v9"
      onZoom={(zoom) => setViewport(zoom.viewState)}
    >
      {markers}
    </Map>
  );
}
