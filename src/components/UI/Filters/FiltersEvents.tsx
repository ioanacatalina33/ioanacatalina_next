import React from "react";
import { useDispatch } from "react-redux";
import { useFilters } from "hooks/utils";

import { getUniqueValues } from "helpers";
import { AlbumType } from "types/enums";
import { FilterName, FiltersType } from "store";

import { LogosFiltersProps } from "./common";
import { FilterComponent } from "./FilterComponent";
import { useFiltersQuery } from "hooks/useFiltersQuery";
import { updateFilter, updateFilters } from "store/appSlice";

export const FiltersEvents = ({ albums }: LogosFiltersProps) => {
  const dispatch = useDispatch();
  const { filters } = useFilters(FiltersType.Dance);

  const subtypes = getUniqueValues(albums, "subtype", true);

  const { addFiltersToURL } = useFiltersQuery(FiltersType.Dance);

  function onFiltersChanged(filterName: FilterName, filterNewValues: string[]) {
    if (filterName === FilterName.subtypes) {
      const onlySubtypesFilters = {
        countries: [],
        years: [],
        months: [],
        continents: [],
        types: [],
        subtypes: filterNewValues,
      };
      dispatch(
        updateFilters({
          filters: onlySubtypesFilters,
          filterType: FiltersType.Dance,
        }),
      );
      addFiltersToURL(onlySubtypesFilters);
    } else {
      dispatch(
        updateFilter({
          name: filterName,
          values: filterNewValues,
          filterType: FiltersType.Dance,
        }),
      );
      addFiltersToURL({ [filterName]: filterNewValues });
    }
  }

  return !albums.length ? (
    <></>
  ) : (
    <div className="filters-logos">
      <FilterComponent
        filterName={FilterName.subtypes}
        albumType={AlbumType.Dance}
        values={subtypes}
        selected={filters.subtypes}
        onFiltersChanged={onFiltersChanged}
      />
    </div>
  );
};
