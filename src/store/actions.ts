import { ScreenType } from "types/enums";
import { Album } from "types/modelTypes";

import * as types from "./types";

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });

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
