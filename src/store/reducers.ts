import { combineReducers } from "redux";
import produce from "immer";

import { ScreenType } from "types/enums";

import * as types from "./types";

const initialAppState: types.AppStore = {
  screenType: ScreenType.Desktop,
  screenWidth: undefined,
  screenHeight: undefined,
  allArticles: [],
  isLoading: false,
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

function appReducer(state = initialAppState, action): types.AppStore {
  if (action.type === types.UPDATE_SCREEN) {
    const otherState = Object.assign({}, state, {
      screenType: action.screenType,
    });
    return otherState;
  }

  if (action.type === types.UPDATE_SCREEN_WIDTH) {
    const otherState = Object.assign({}, state, {
      screenWidth: action.screenWidth,
      screenHeight: action.screenHeight,
    });
    return otherState;
  }

  if (action.type === types.UPDATE_FILTERS) {
    const otherState = Object.assign({}, state, {
      filters: { ...state.filters, [action.filterType]: action.filters },
    });
    return otherState;
  }

  if (action.type === types.UPDATE_FILTER) {
    return produce(state, (draftState) => {
      draftState.filters[action.filterType][action.name] = action.values;
    });
  }

  if (action.type === types.UPDATE_ARTICLES) {
    const otherState = Object.assign({}, state, {
      allArticles: action.allArticles,
    });
    return otherState;
  }

  if (action.type === types.UPDATE_IS_LOADING) {
    const otherState = Object.assign({}, state, {
      isLoading: action.isLoading,
    });
    return otherState;
  }

  if (action.type === types.UPDATE_QUERY_TEXT) {
    const otherState = Object.assign({}, state, {
      queryText: action.queryText,
    });
    return otherState;
  }

  if (action.type === types.IS_MOBILE_SEARCH) {
    const otherState = Object.assign({}, state, {
      isMobileSearch: action.isMobileSearch,
    });
    return otherState;
  }

  return state;
}

// COMBINED REDUCERS
const reducers = {
  app: appReducer,
};

export default combineReducers<types.ApplicationState>(reducers);
