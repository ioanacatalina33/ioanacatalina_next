import React from "react";

interface FiltersHeaderProps {
  nrDisplayed: number;
  showFilters: boolean;
  forMap?: boolean;
  toggleFilters: () => void;
}

export const FiltersHeader = ({
  nrDisplayed,
  showFilters,
  forMap,
  toggleFilters,
}: FiltersHeaderProps) => {
  const showFiltersText = (
    <span onClick={toggleFilters} className="hide-filters">
      {showFilters ? (
        <i className="fa fa-angle-up" />
      ) : (
        <i className="fa fa-angle-down" />
      )}{" "}
      {showFilters ? "Hide filters" : "Show filters"}
    </span>
  );

  if (forMap) return <div>{showFiltersText}</div>;

  return (
    <div
      style={{
        display: "flex",
        margin: "0rem 0rem 0rem 0rem",
        padding: "0rem 1rem 0rem 1rem",
      }}
    >
      {<div style={{ flex: 1 }} />}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {showFiltersText}
      </div>
      <div style={{ flex: 1 }}>Albums displayed: {nrDisplayed}</div>
    </div>
  );
};
