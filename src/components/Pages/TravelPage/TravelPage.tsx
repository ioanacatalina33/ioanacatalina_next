import React, { useEffect } from "react";

import { FiltersTravel } from "components/UI/Filters";
import { Photowall } from "components/UI/Photowall";
import { AlbumType } from "types/enums";
import { useFilteredAlbums } from "hooks/useFilteredAlbums";
import { useIsFiltered } from "hooks/utils";
import { FiltersType, incrementTravelPageCount } from "store";
import { Album } from "types/modelTypes";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { useDispatch } from "react-redux";

interface TravelProps {
  albums: Album[];
  lazyload?: boolean;
}

export const TravelPage = ({ albums, lazyload }: TravelProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Travel);

  const dispatch = useDispatch();

  const { filteredAlbums, loading } = useFilteredAlbums(
    albums,
    FiltersType.Travel,
  );

  useEffect(() => {
    dispatch(incrementTravelPageCount());
  }, []);

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
          lazyload={lazyload}
        />
      </div>
    </>
  );
};
