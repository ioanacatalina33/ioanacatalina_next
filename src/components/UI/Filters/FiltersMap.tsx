import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFilters } from "hooks/utils";

import { getYears } from "helpers";
import { FilterName, FiltersType, updateFilter } from "store";

import { Months } from "helpers/const";

import { MapFiltersProps } from "./common";
import { FiltersHeader } from "./FiltersHeader";
import { FilterComponent } from "./FilterComponent";
import { Album } from "types";
import { useFiltersQuery } from "hooks/useFiltersQuery";

export const FiltersMap = ({ locations, nrFiltered }: MapFiltersProps) => {
  const dispatch = useDispatch();
  const { filters } = useFilters(FiltersType.Map);

  const { addFiltersToURL } = useFiltersQuery(FiltersType.Map);

  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const albumIds = [];
    const albums_ = [];
    locations.forEach((location) =>
      location.articles.forEach((article) => {
        if (!albumIds.includes(article.identifier))
          albumIds.push(article.identifier);
        albums_.push(article);
      })
    );
    setAlbums(albums_);
  }, [locations]);

  const years = getYears(albums);
  const months = Months;
  const subtypes = ["Nature", "City"];
  const types = ["Travel", "Dance"];
  const [showFilters, setShowFilters] = useState(true);

  function onFiltersChanged(filterName: FilterName, filterNewValues: string[]) {
    dispatch(updateFilter(filterName, filterNewValues, FiltersType.Map));
    addFiltersToURL({ [filterName]: filterNewValues });
  }

  function toggleFilters() {
    setShowFilters((prevState) => !prevState);
  }

  return !albums.length ? (
    <></>
  ) : (
    <div
      className="filter-container-div"
      style={{
        position: "absolute",
        left: "1rem",
        top: "5rem",
        padding: "0.5rem",
        height: showFilters ? "auto" : "fit-content",
        backgroundColor: "rgba(245, 245, 245, 0.7)",
      }}
    >
      <FiltersHeader
        nrDisplayed={nrFiltered}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        forMap
      />
      <div style={{ marginTop: "0.5rem" }}>
        Locations displayed: {nrFiltered}
      </div>
      <div
        style={{ height: showFilters ? "auto" : 0 }}
        className={showFilters ? "box-show" : "box-hide"}
      >
        <div>
          <div
            style={{
              padding: "0.4rem 0.4rem 0.4rem 0.4rem",
              fontSize: "0.9rem",
            }}
          >
            <b>Ctrl+Click</b> for multiple select
          </div>
          <div
            style={{
              marginTop: "0.8rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FilterComponent
              filterName={FilterName.types}
              values={types}
              selected={filters.types}
              onFiltersChanged={onFiltersChanged}
              mapFilters
            />

            <FilterComponent
              filterName={FilterName.subtypes}
              values={subtypes}
              selected={filters.subtypes}
              onFiltersChanged={onFiltersChanged}
              mapFilters
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            &nbsp;&nbsp;&nbsp;
            <FilterComponent
              filterName={FilterName.years}
              values={years}
              selected={filters.years}
              onFiltersChanged={onFiltersChanged}
              mapFilters
            />
            <FilterComponent
              filterName={FilterName.months}
              values={months}
              selected={filters.months}
              onFiltersChanged={onFiltersChanged}
              mapFilters
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};
