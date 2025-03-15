import React, { useEffect } from "react";

import { FiltersDance, FiltersEvents } from "components/UI/Filters";
import { Photowall } from "components/UI/Photowall";
import { AlbumType } from "types/enums";
import { useFilteredAlbums } from "hooks/useFilteredAlbums";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { useIsFiltered } from "hooks/utils";
import { FiltersType } from "store";
import { Album } from "types/modelTypes";
import { LogosExplanation } from "components/UI/Filters/components";
import { Flex } from "components/UI/Flex/Flex";
import { COUNTER_DANCE } from "helpers";

interface DanceProps {
  albums: Album[];
}

export const DancePage = ({ albums }: DanceProps) => {
  const FullSizeLayer = useFullScreenlayer(AlbumType.Dance);

  const { filteredAlbums, loading } = useFilteredAlbums(
    albums,
    FiltersType.Dance,
  );

  const { isFiltered } = useIsFiltered(FiltersType.Dance);

  useEffect(() => {
    // dispatch(incrementTravelPageCount());
    if (typeof window !== "undefined") {
      const dancePageCount = localStorage.getItem(COUNTER_DANCE) ?? 0;
      localStorage.setItem(
        COUNTER_DANCE,
        (Number(dancePageCount) + 1).toString(),
      );
    }
  }, []);

  return (
    <>
      {FullSizeLayer}
      <main className="App">
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
              filtered={isFiltered}
            />
          </div>
        </Flex>
      </main>
    </>
  );
};
