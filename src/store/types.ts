import { ScreenType } from "types/enums";
import { Album } from "types/modelTypes";

export type Filters = Partial<Record<FilterName, string[]>>;
export type BlogFilters = Record<FilterName, string[]>;

export enum FiltersType {
  Travel = "travel",
  Dance = "dance",
  Map = "map",
  Blog = "blog",
}

export enum FilterName {
  years = "years",
  months = "months",
  continents = "continents",
  countries = "countries",
  subtypes = "subtypes",
  types = "types",
  topics = "topics",
}

export interface AppStore {
  screenType: ScreenType;
  screenWidth: number;
  screenHeight: number;
  allArticles: Album[];
  isMobileSearch: boolean;
  queryText: string;
  travelPageCount: number;
  filters: {
    travel: Filters;
    dance: Filters;
    map: Filters;
    blog: Filters;
  };
}

export interface ApplicationState {
  app: AppStore;
}
