import { ScreenType } from "types/enums";
import { Album } from "types/modelTypes";

import * as types from "./types";

// APP
export function updateScreen(screenType: ScreenType) {
  return { type: types.UPDATE_SCREEN, screenType };
}

export function updateScreenDim(screenWidth: number, screenHeight: number) {
  return { type: types.UPDATE_SCREEN_WIDTH, screenWidth, screenHeight };
}

export function updateArticles(allArticles: Album[]) {
  return { type: types.UPDATE_ARTICLES, allArticles };
}

export function updateIsLoading(isLoading: boolean) {
  return { type: types.UPDATE_IS_LOADING, isLoading };
}

export function updateQueryText(queryText: string) {
  return { type: types.UPDATE_QUERY_TEXT, queryText };
}

export function updateMobileSearch(isMobileSearch: boolean) {
  return { type: types.IS_MOBILE_SEARCH, isMobileSearch };
}

export function updateFilters(
  filters: types.Filters,
  filterType: types.FiltersType
) {
  return { type: types.UPDATE_FILTERS, filters, filterType };
}

export function updateFilter(
  name: types.FilterName,
  values: string[],
  filterType: types.FiltersType
) {
  return { type: types.UPDATE_FILTER, name, values, filterType };
}
