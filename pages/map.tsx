import { MapPage } from "components/Pages/MapPage";
import React from "react";
import { Location } from "types";
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

interface Props {
  locations: Location[];
}

const Map = ({ locations }: Props) => {
  return <MapPage locations={locations} />;
};

export default Map;
