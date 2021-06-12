import { filterLocations, sleep } from "helpers";
import { useEffect, useState } from "react";
import { FiltersType } from "store";
import { Location } from "types/modelTypes";
import { useFilters } from "./utils";

export const useFilteredLocations = (locations: Location[]) => {
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const { filters } = useFilters(FiltersType.Map);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filter();
  }, [filters, locations]);

  async function filter() {
    setLoading(true);
    setFilteredLocations([]);
    await sleep(1);
    const filtered = filterLocations(locations, filters);
    setFilteredLocations(filtered);
    setLoading(false);
  }

  return { filteredLocations, loading };
};
