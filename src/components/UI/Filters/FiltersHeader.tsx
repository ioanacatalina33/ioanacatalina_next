import React from "react";

interface FiltersHeaderProps {
  nrDisplayed: number;
  showFilters: boolean;
  toggleFilters: () => void;
}

export const FiltersHeader = ({
  nrDisplayed,
  showFilters,
  toggleFilters,
}: FiltersHeaderProps) => {
  return (
    <div
      className="row"
      style={{
        margin: "0rem 0rem 0rem 0rem",
        padding: "0rem 1rem 0rem 1rem",
      }}
    >
      <div className="col-12 col-sm-4"></div>
      <div
        className="col-12 col-sm-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span onClick={toggleFilters} className="hide-filters">
          {showFilters ? (
            <i className="fa fa-angle-up" />
          ) : (
            <i className="fa fa-angle-down" />
          )}{" "}
          {showFilters ? "Hide filters" : "Show filters"}
        </span>
      </div>
      <div className="col-12 col-sm-4">Albums displayed: {nrDisplayed}</div>
    </div>
  );
};
