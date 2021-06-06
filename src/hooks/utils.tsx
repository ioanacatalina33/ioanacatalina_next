import { useSelector as useReduxSelector } from "react-redux";

import { ApplicationState, FilterName, FiltersType } from "store";

export function useSelector<T>(selector: (state: ApplicationState) => T) {
  return useReduxSelector((state: ApplicationState) => selector(state));
}

export const useScreenSize = () => {
  const screenHeight = useSelector((state) => state.app.screenHeight);
  const screenWidth = useSelector((state) => state.app.screenWidth);

  return { screenWidth, screenHeight };
};

export const useScreenType = () => {
  return { screenType: useSelector((state) => state.app.screenType) };
};

export const useFilters = (filterType: FiltersType) => {
  return { filters: useSelector((state) => state.app.filters[filterType]) };
};

export const useFilter = (filterType: FiltersType, filterName: FilterName) => {
  return {
    filter: useSelector((state) => state.app.filters[filterType][filterName]),
  };
};

export const useIsFiltered = (filterType: FiltersType) => {
  return {
    isFiltered: useSelector(
      (state) =>
        !!state.app.filters[filterType].continents.length ||
        !!state.app.filters[filterType].countries.length ||
        !!state.app.filters[filterType].months.length ||
        !!state.app.filters[filterType].years.length ||
        !!state.app.filters[filterType].subtypes.length
    ),
  };
};
