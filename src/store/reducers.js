import { combineReducers } from "redux";
import * as types from "./types";

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

const initialAppState = {
  screenType: "desktop",
  screenWidth: undefined,
  screenHeight: undefined,
  allArticles: [],
  isLoading: false,
  isMobileSearch: false,
  queryText: "",

  filters_travel: {
    years: [2014],
    months: [],
    continents: [],
    countries: [],
    subtypes: [],
  },
};

function appReducer(state = initialAppState, action) {
  if (action.type === types.UPDATE_SCREEN) {
    let otherState = Object.assign({}, state, {
      screenType: action.screenType,
    });
    return otherState;
  }
  if (action.type === types.UPDATE_SCREEN_WIDTH) {
    let otherState = Object.assign({}, state, {
      screenWidth: action.screenWidth,
      screenHeight: action.screenHeight,
    });
    return otherState;
  }
  if (action.type === types.UPDATE_TRAVEL_FILTERS) {
    let otherState = Object.assign({}, state, {
      filters_travel: action.filters_travel,
    });
    return otherState;
  }
  if (action.type === types.UPDATE_ARTICLES) {
    let otherState = Object.assign({}, state, {
      allArticles: action.allArticles,
    });
    return otherState;
  }
  if (action.type === types.UPDATE_IS_LOADING) {
    let otherState = Object.assign({}, state, {
      isLoading: action.isLoading,
    });
    return otherState;
  }
  if (action.type === types.UPDATE_QUERY_TEXT) {
    let otherState = Object.assign({}, state, {
      queryText: action.queryText,
    });
    return otherState;
  }
  if (action.type === types.IS_MOBILE_SEARCH) {
    let otherState = Object.assign({}, state, {
      isMobileSearch: action.isMobileSearch,
    });
    return otherState;
  }
  return state;
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  app: appReducer,
};

export default combineReducers(reducers);
