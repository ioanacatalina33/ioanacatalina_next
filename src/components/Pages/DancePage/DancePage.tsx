import React from "react";

import { FiltersDance } from "components/UI/Filters";
import { Photowall } from "components/UI/Photowall";
import { AlbumType } from "types/enums";
import { useFilteredAlbums } from "hooks/useFilteredAlbums";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { useIsFiltered } from "hooks/utils";
import { FiltersType } from "store";
import { Album } from "types/modelTypes";

interface DanceProps {
  albums: Album[];
  lazyload?: boolean;
}

export const DancePage = ({ albums, lazyload }: DanceProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Dance);

  const { filteredAlbums, loading } = useFilteredAlbums(
    albums,
    FiltersType.Dance
  );

  const { isFiltered } = useIsFiltered(FiltersType.Dance);

  return (
    <>
      {FullSizeLayer}
      <div className="App">
        <h2>Dance events</h2>

        <FiltersDance albums={albums} nrFiltered={filteredAlbums.length} />
        <Photowall
          albums={filteredAlbums}
          loading={loading}
          lazyload={lazyload}
          filtered={isFiltered}
        />
      </div>
    </>
  );
};
