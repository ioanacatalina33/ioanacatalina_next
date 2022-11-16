import { useScreenType } from "hooks";
import React from "react";
import { ScreenType } from "types";
import { ShowFiltersText } from "./components";

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
  const { screenType } = useScreenType();

  if (forMap)
    return (
      <div>
        {
          <ShowFiltersText
            showFilters={showFilters}
            toggleFilters={toggleFilters}
          />
        }
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        margin: "0rem 0rem 0rem 0rem",
        padding: "0rem 1rem 0rem 1rem",
      }}
    >
      {screenType !== ScreenType.Mobile && <div style={{ flex: 1 }} />}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: screenType !== ScreenType.Mobile ? "center" : "left",
        }}
      >
        {
          <ShowFiltersText
            showFilters={showFilters}
            toggleFilters={toggleFilters}
          />
        }
      </div>
      <div style={{ flex: 1 }}>Albums displayed: {nrDisplayed}</div>
    </div>
  );
};
