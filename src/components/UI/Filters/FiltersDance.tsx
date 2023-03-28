import React from "react";
import { useDispatch } from "react-redux";
import { useFilters, useScreenType } from "hooks/utils";

import { getUniqueValues, getYears } from "helpers";
import { AlbumType } from "types/enums";
import { Months } from "helpers/const";
import { FilterName, FiltersType, updateFilter, updateFilters } from "store";

import { DanceFiltersProps } from "./common";
import { FilterComponent } from "./FilterComponent";
import { useFiltersQuery } from "hooks/useFiltersQuery";

export const FiltersDance = ({ albums, showFilters }: DanceFiltersProps) => {
  const dispatch = useDispatch();
  const { filters } = useFilters(FiltersType.Dance);

  const { isMobile, isTablet, isDesktop } = useScreenType();

  const years = getYears(albums);
  const months = Months;
  const countries = getUniqueValues(albums, "country", true);

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
      dispatch(updateFilters(onlySubtypesFilters, FiltersType.Dance));
      addFiltersToURL(onlySubtypesFilters);
    } else {
      dispatch(updateFilter(filterName, filterNewValues, FiltersType.Dance));
      addFiltersToURL({ [filterName]: filterNewValues });
    }
  }

  const styleMention = {
    padding: "0rem 0rem 0.8rem 0rem",
    fontSize: "0.9rem",
  };

  return (
    <div
      style={{
        margin: isDesktop
          ? "3.65rem 0.6rem 0rem 0.8rem"
          : "3.65rem 0.1rem 0rem 0.1rem",
        padding: "1rem 1.2rem",
        flex: isMobile ? 3 : isTablet ? 2 : 1,
        boxShadow: "-4px 2px 10px #aaaaaa",
        overflowY: "auto",
        height: !isDesktop ? "calc(100vh - 100px)" : "fit-content",
        background: "#f3f3f3",
      }}
    >
      {!albums.length ? (
        <></>
      ) : (
        <div className="filter-container-div">
          <div
            style={{ marginBottom: "1rem", height: showFilters ? "auto" : 0 }}
            className={showFilters ? "box-show" : "box-hide"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: isMobile ? "0.4rem" : 0,
              }}
            >
              {isMobile && (
                <div className="col" style={styleMention}>
                  <b>Ctrl+Click</b> for multiple select
                  <br />
                  <b>Esc</b> to deselect all
                </div>
              )}

              <span style={{ fontWeight: "bold" }}>Years:</span>

              <FilterComponent
                filterName={FilterName.years}
                values={years}
                albumType={AlbumType.Dance}
                selected={filters.years}
                onFiltersChanged={onFiltersChanged}
              />
              <br />
              <span style={{ fontWeight: "bold" }}>Months:</span>

              <FilterComponent
                filterName={FilterName.months}
                values={months}
                albumType={AlbumType.Dance}
                selected={filters.months}
                onFiltersChanged={onFiltersChanged}
              />
              <br />
              <span style={{ fontWeight: "bold" }}>Countries:</span>
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
      )}
    </div>
  );
};
