import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppStore, FilterName, Filters, FiltersType } from "./types";
import { Album, ScreenType } from "types";

export interface CounterState {
  value: number;
}

const initialState: AppStore = {
  screenType: ScreenType.Desktop,
  screenWidth: undefined,
  screenHeight: undefined,
  allArticles: [],
  isMobileSearch: false,
  queryText: "",
  filters: {
    travel: {
      years: [],
      months: [],
      continents: [],
      countries: [],
      subtypes: [],
      types: [],
    },
    dance: {
      years: [],
      months: [],
      continents: [],
      countries: [],
      subtypes: [],
      types: [],
    },
    map: {
      years: [],
      months: [],
      continents: [],
      countries: [],
      subtypes: [],
      types: [],
    },
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateScreen: (state, action: PayloadAction<ScreenType>) => {
      state.screenType = action.payload;
    },
    updateScreenDim: (
      state,
      action: PayloadAction<{ screenWidth: number; screenHeight: number }>,
    ) => {
      (state.screenWidth = action.payload.screenWidth),
        (state.screenHeight = action.payload.screenHeight);
    },
    updateArticles: (state, action: PayloadAction<Album[]>) => {
      state.allArticles = action.payload;
    },
    updateQueryText: (state, action: PayloadAction<string>) => {
      state.queryText = action.payload;
    },
    updateMobileSearch: (state, action: PayloadAction<boolean>) => {
      state.isMobileSearch = action.payload;
    },
    updateFilters: (
      state,
      action: PayloadAction<{ filters: Filters; filterType: FiltersType }>,
    ) => {
      state.filters = {
        ...state.filters,
        [action.payload.filterType]: action.payload.filters,
      };
    },
    updateFilter: (
      state,
      action: PayloadAction<{
        name: FilterName;
        values: string[];
        filterType: FiltersType;
      }>,
    ) => {
      state.filters[action.payload.filterType][action.payload.name] =
        action.payload.values;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateScreen,
  updateScreenDim,
  updateArticles,
  updateQueryText,
  updateMobileSearch,
  updateFilters,
  updateFilter,
} = appSlice.actions;

export default appSlice.reducer;
