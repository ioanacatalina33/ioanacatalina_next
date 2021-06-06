import { filterArticles, sleep } from "helpers";
import { AlbumType } from "types/enums";
import { useEffect, useState } from "react";
import { FiltersType } from "store";
import { Album } from "types/modelTypes";
import { useFilters } from "./utils";

export const useFilteredAlbums = (
  albums: Album[],
  filtersType: FiltersType
) => {
  const [filteredAlbums, setFilteredAlbums] = useState(albums);
  const { filters } = useFilters(filtersType);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filter();
  }, [filters]);

  async function filter() {
    setLoading(true);
    setFilteredAlbums([]);
    await sleep(1);
    const filteredArtciles = filterArticles(albums, filters);
    setFilteredAlbums(filteredArtciles);
    setLoading(false);
  }

  return { filteredAlbums, loading };
};
