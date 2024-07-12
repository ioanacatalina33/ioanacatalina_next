import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFilters, useScreenType } from "hooks/utils";

import {
  getUniqueCountriesByContinents,
  getUniqueValues,
  getYears,
} from "helpers";
import { FilterName, FiltersType, updateFilter } from "store";

import { AlbumType, ScreenType } from "types/enums";
import { Months } from "helpers/const";

import { FiltersProps } from "./common";
import { FiltersHeader } from "./FiltersHeader";
import { FilterComponent } from "./FilterComponent";
import { useFiltersQuery } from "hooks/useFiltersQuery";

export const FiltersTravel = ({ albums, nrFiltered }: FiltersProps) => {
  const dispatch = useDispatch();
  const { filters } = useFilters(FiltersType.Travel);

  const { addFiltersToURL } = useFiltersQuery(FiltersType.Travel);

  const years = getYears(albums);
  const months = Months;
  const continents = getUniqueValues(albums, "continent", true);
  const subtypes = getUniqueValues(albums, "subtype", true);
  const [countries, setCountries] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  const { screenType } = useScreenType();

  useEffect(() => {
    if (filters.continents.length) {
      setCountries(
        getUniqueCountriesByContinents(albums, filters.continents, true),
      );
    } else setCountries([]);
  }, [filters.continents]);

  function onFiltersChanged(filterName: FilterName, filterNewValues: string[]) {
    dispatch(
      updateFilter({
        name: filterName,
        values: filterNewValues,
        filterType: FiltersType.Travel,
      }),
    );

    if (filterName === FilterName.continents) {
      dispatch(
        updateFilter({
          name: FilterName.countries,
          values: [],
          filterType: FiltersType.Travel,
        }),
      );
      addFiltersToURL({
        [filterName]: filterNewValues,
        [FilterName.countries]: [],
      });
    } else {
      addFiltersToURL({ [filterName]: filterNewValues });
    }
  }

  function toggleFilters() {
    setShowFilters((prevState) => !prevState);
  }

  const styleMention = {
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

      <div
        style={{ height: showFilters ? "auto" : 0 }}
        className={showFilters ? "box-show" : "box-hide"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: screenType === ScreenType.Mobile ? "0.4rem" : 0,
          }}
        >
          {screenType !== ScreenType.Mobile && (
            <div className="col" style={styleMention}>
              <b>Ctrl+Click</b> for multiple select, <b>Esc</b> to deselect all
            </div>
          )}
          <FilterComponent
            filterName={FilterName.years}
            values={years}
            albumType={AlbumType.Travel}
            selected={filters.years}
            onFiltersChanged={onFiltersChanged}
          />
          <FilterComponent
            filterName={FilterName.months}
            values={months}
            albumType={AlbumType.Travel}
            selected={filters.months}
            onFiltersChanged={onFiltersChanged}
          />
          <div
            style={{
              marginTop: "0.8rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FilterComponent
              filterName={FilterName.continents}
              albumType={AlbumType.Travel}
              values={continents}
              selected={filters.continents}
              onFiltersChanged={onFiltersChanged}
            />
            &nbsp;&nbsp;&nbsp;
            <FilterComponent
              filterName={FilterName.subtypes}
              albumType={AlbumType.Travel}
              values={subtypes}
              selected={filters.subtypes}
              onFiltersChanged={onFiltersChanged}
            />
          </div>
        </div>
        <FilterComponent
          albumType={AlbumType.Travel}
          filterName={FilterName.countries}
          values={countries}
          selected={filters.countries}
          onFiltersChanged={onFiltersChanged}
        />
      </div>
    </div>
  );
};
