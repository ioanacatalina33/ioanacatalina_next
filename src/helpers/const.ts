import { PhotosDisplayType } from "types";

export const STATIC_PAGE_LOAD = true;
export const STATIC_PATHS_LOAD = true;

export const PAGE_NOT_FOUND = "PNF";

export const WEBSITE_PATH = "https://www.ioanacatalina.com";

export const rootPath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : WEBSITE_PATH;

export const PATH_LOGO = "img/Logos/";
export const PATH_ARTICLES = "/img";

export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DefaultDisplayType = PhotosDisplayType.FOUR;

export const COUNTER_TRAVEL = "counter-travel";
export const COUNTER_DANCE = "counter-dance";
