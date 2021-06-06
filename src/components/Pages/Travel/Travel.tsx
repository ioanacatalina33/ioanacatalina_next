import React from "react";

import { FiltersTravel } from "components/UI/Filters";
import { Photowall } from "components/UI/Photowall";
import { AlbumType } from "types/enums";
import { useFilteredAlbums } from "hooks/useFilteredAlbums";
import { useIsFiltered } from "hooks/utils";
import { FiltersType } from "store";
import { Album } from "types/modelTypes";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";

interface TravelProps {
  albums: Album[];
}

export const Travel = ({ albums }: TravelProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Travel);

  const { filteredAlbums, loading } = useFilteredAlbums(
    albums,
    FiltersType.Travel
  );

  const { isFiltered } = useIsFiltered(FiltersType.Travel);

  return (
    <>
      {FullSizeLayer}
      <div className="App">
        <h2>Travel</h2>

        <FiltersTravel albums={albums} nrFiltered={filteredAlbums.length} />
        <Photowall
          albums={filteredAlbums}
          loading={loading}
          filtered={isFiltered}
        />
      </div>
    </>
  );
};

export default Travel;
