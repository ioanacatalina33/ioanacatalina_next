import React from "react";

import { FiltersDance, FiltersEvents } from "components/UI/Filters";
import { Photowall } from "components/UI/Photowall";
import { AlbumType } from "types/enums";
import { useFilteredAlbums } from "hooks/useFilteredAlbums";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { useIsFiltered } from "hooks/utils";
import { FiltersType } from "store";
import { Album } from "types/modelTypes";
import { ShopLink } from "components/UI/Advertising";
import { LogosExplanation } from "components/UI/Filters/components";
import { Flex } from "components/UI/Flex/Flex";

interface DanceProps {
  albums: Album[];
  lazyload?: boolean;
}

export const DancePage = ({ albums, lazyload }: DanceProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Dance);

  const { filteredAlbums, loading } = useFilteredAlbums(
    albums,
    FiltersType.Dance,
  );

  const { isFiltered } = useIsFiltered(FiltersType.Dance);

  return (
    <>
      {FullSizeLayer}
      <div className="App">
        <h2>Dance events</h2>
        {/* <ShopLink center /> */}
        <LogosExplanation />
        <FiltersEvents albums={albums} />
        <Flex>
          <FiltersDance albums={albums} showFilters />
          <div style={{ flex: 5 }}>
            <div style={{ paddingLeft: "0.2rem", paddingTop: "1rem" }}>
              Albums displayed: {filteredAlbums.length}
            </div>

            <Photowall
              albums={filteredAlbums}
              loading={loading}
              lazyload={lazyload}
              filtered={isFiltered}
            />
          </div>
        </Flex>
      </div>
    </>
  );
};
