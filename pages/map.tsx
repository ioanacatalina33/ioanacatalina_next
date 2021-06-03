import React from "react";
import { fetchValidLocations } from "../api/controllers/location";

export async function getStaticProps(context) {
  const data = await fetchValidLocations();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { locations: data },
    // revalidate: 1, // In seconds
  };
}

const Map = ({ locations }) => {
  return (
    <div>
      <br /> <h1>Map page</h1>
      <div>
        {locations.map((loc, i) => (
          <div key={i}>
            {loc.name} {loc.coord_lat} {loc.coord_long}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
