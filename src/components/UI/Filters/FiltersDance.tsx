import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFilters } from "hooks/utils";

import { getUniqueValues, getYears } from "helpers";
import { AlbumType } from "types/enums";
import { Months } from "helpers/const";
import { FilterName, FiltersType, updateFilter, updateFilters } from "store";

import { FiltersProps } from "./common";
import { FiltersHeader } from "./FiltersHeader";
import { FilterComponent } from "./FilterComponent";

export const FiltersDance = ({ albums, nrFiltered }: FiltersProps) => {
  const dispatch = useDispatch();
  const { filters } = useFilters(FiltersType.Dance);

  const years = getYears(albums);
  const months = Months;
  const subtypes = getUniqueValues(albums, "subtype", true);
  const countries = getUniqueValues(albums, "country", true);
  const [showFilters, setShowFilters] = useState(true);

  function onFiltersChanged(filterName: FilterName, filterNewValues: string[]) {
    if (filterName === FilterName.subtypes) {
      dispatch(
        updateFilters(
          {
            countries: [],
            years: [],
            months: [],
            continents: [],
            subtypes: filterNewValues,
          },
          FiltersType.Dance
        )
      );
    } else {
      dispatch(updateFilter(filterName, filterNewValues, FiltersType.Dance));
    }
  }

  function toggleFilters() {
    setShowFilters((prevState) => !prevState);
  }

  var styleMention = {
    padding: "0.4rem 0rem 0.4rem 0rem",
    fontSize: "0.9rem",
  };

  return !albums.length ? (
    <></>
  ) : (
    <div className="filter-container-div">
      <FiltersHeader
        nrDisplayed={nrFiltered}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
      />
      <div>
        <div
          style={{ height: showFilters ? "auto" : 0 }}
          className={showFilters ? "box-show" : "box-hide"}
        >
          <div>
            <div className="col" style={styleMention}>
              <b>Ctrl+Click</b> for multiple select year and month, <b>Esc</b>{" "}
              to deselect all
            </div>
            <FilterComponent
              filterName={FilterName.years}
              values={years}
              albumType={AlbumType.Dance}
              selected={filters.years}
              onFiltersChanged={onFiltersChanged}
            />
            <FilterComponent
              filterName={FilterName.months}
              values={months}
              albumType={AlbumType.Dance}
              selected={filters.months}
              onFiltersChanged={onFiltersChanged}
            />

            <FilterComponent
              albumType={AlbumType.Dance}
              filterName={FilterName.countries}
              values={countries}
              selected={filters.countries}
              onFiltersChanged={onFiltersChanged}
            />
          </div>
        </div>
      </div>
      <div className="filters-logos">
        {/* {this.state.subtypes.map( (subtype) => <div className="col-12"> */}
        <FilterComponent
          filterName={FilterName.subtypes}
          albumType={AlbumType.Dance}
          values={subtypes}
          selected={filters.subtypes}
          onFiltersChanged={onFiltersChanged}
        />
        {/* </div>)} */}
      </div>
    </div>
  );
};
