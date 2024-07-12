import { ScreenType } from "types/enums";
import { Album } from "types/modelTypes";

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
  types = "types",
}
export interface AppStore {
  screenType: ScreenType;
  screenWidth: number;
  screenHeight: number;
  allArticles: Album[];
  isMobileSearch: boolean;
  queryText: string;
  filters: {
    travel: Filters;
    dance: Filters;
    map: Filters;
  };
}

export interface ApplicationState {
  app: AppStore;
}
