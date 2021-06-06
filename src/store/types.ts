import { ScreenType } from "types/enums";
import { Album } from "types/modelTypes";

export const UPDATE_SCREEN = "UPDATE_SCREEN";
export const UPDATE_SCREEN_WIDTH = "UPDATE_SCREEN_WIDTH";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_IS_LOADING = "IS_LOADING";
export const UPDATE_ARTICLES = "UPDATE_ARTICLES";
export const UPDATE_QUERY_TEXT = "UPDATE_QUERY_TEXT";
export const IS_MOBILE_SEARCH = "IS_MOBILE_SEARCH";

// REDUX ACTION TYPES
export const TICK = "TICK";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export interface TimerState {
  lastUpdate: number;
  light: boolean;
}

export type Filters = Record<FilterName, string[]>;

export enum FiltersType {
  Travel = "travel",
  Dance = "dance",
  Map = "map",
}

export enum FilterName {
  years = "years",
  months = "months",
  continents = "continents",
  countries = "countries",
  subtypes = "subtypes",
}
export interface AppStore {
  screenType: ScreenType;
  screenWidth: number;
  screenHeight: number;
  allArticles: Album[];
  isLoading: boolean;
  isMobileSearch: boolean;
  queryText: string;
  filters: {
    travel: Filters;
    dance: Filters;
    map: Filters;
  };
}

export interface ApplicationState {
  counter: number;
  timer: TimerState;
  app: AppStore;
}
