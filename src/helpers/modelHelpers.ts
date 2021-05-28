import moment from "moment";

import { AlbumType } from "./enums";
import { PATH_ARTICLES } from "./const";
import { Album, Location } from "types/modelTypes";

export const articleCover = (identifier: string): string => {
  return PATH_ARTICLES + identifier + "/cover.jpg";
};

export const articleCoverLarge = (identifier: string): string => {
  return PATH_ARTICLES + identifier + "cover_large.jpg";
};

export const urlAlbumHeader = (
  type: AlbumType,
  identifier: string,
  isCoverLarge: boolean
): string => {
  return type === AlbumType.HIGHLIGHTS || isCoverLarge
    ? articleCoverLarge(identifier)
    : articleCover(identifier);
};

export const getUniqueValues = (
  articles: Album[],
  property: string,
  sort: boolean
): Album[] => {
  if (sort === true) {
    return Array.from(new Set(articles.map((item) => item[property]))).sort();
  } else {
    return Array.from(new Set(articles.map((item) => item[property])));
  }
};

export const getUniqueCountriesByContinents = (
  articles: Album[],
  continents: string[],
  sort: boolean
): string[] => {
  if (continents.length === 0) return [];
  if (sort === true) {
    return Array.from(
      new Set(
        articles
          .filter((article) => continents.includes(article.continent))
          .map((item) => item.country)
      )
    ).sort();
  } else {
    return Array.from(
      new Set(
        articles
          .filter((article) => continents.includes(article.continent))
          .map((item) => item.country)
      )
    );
  }
};

export const getYears = (articles: Album[]): string[] => {
  return Array.from(
    new Set(articles.map((item) => moment(item.date_start).format("YYYY")))
  ).sort();
};

export const getMonths = (articles: Album[]): string[] => {
  return Array.from(
    new Set(articles.map((item) => moment(item.date_start).format("MMM")))
  ).sort();
};

interface Filters {
  years: string[];
  months: string[];
  continents: string[];
  countries: string[];
  subtypes: string[];
  types: AlbumType[];
}

export const filterArticles = (
  articles: Album[],
  filters: Partial<Filters>
): Album[] => {
  var hasYears = filters.years && filters.years.length !== 0;
  var hasMonths = filters.months && filters.months.length !== 0;
  var hasContinents = filters.continents && filters.continents.length !== 0;
  var hasCountries = filters.countries && filters.countries.length !== 0;
  var hasSubtypes = filters.subtypes && filters.subtypes.length !== 0;
  return articles.filter((article) => {
    return (
      (!hasContinents ||
        filters.continents.filter(
          (continent) => article.continent === continent
        ).length > 0) &&
      (!hasCountries ||
        filters.countries.filter((country) => article.country === country)
          .length > 0) &&
      (!hasSubtypes ||
        filters.subtypes.filter((subtype) => article.subtype === subtype)
          .length > 0) &&
      (!hasYears ||
        filters.years.filter(
          (year) => moment(article.date_start).format("YYYY") === year
        ).length > 0) &&
      (!hasMonths ||
        filters.months.filter(
          (month) => moment(article.date_start).format("MMM") === month
        ).length > 0)
    );
  });
};

export const filterLocations = (
  locations: Location[],
  filters: Partial<Filters>
) => {
  if (!filters.years || filters.years.length === 0) {
    return [];
  }
  if (!filters.months || filters.months.length === 0) {
    return [];
  }
  if (
    (!filters.subtypes || filters.subtypes.length === 0) &&
    !filters.types.includes(AlbumType.DANCE)
  ) {
    return [];
  }
  if (!filters.types || filters.types.length === 0) {
    return [];
  }

  var newLocations = locations.filter((location) => {
    var articles = filterArticlesForLocation(location.articles, filters);
    return articles.length > 0;
  });
  return newLocations;
};

export const filterArticlesForLocation = (
  articles: Album[],
  filters: Partial<Filters>
): Album[] => {
  var articlesSelected = articles.filter((article) => {
    return (
      filters.types.filter((type) => article.type === type).length > 0 &&
      (filters.subtypes.filter((subtype) => article.subtype === subtype)
        .length > 0 ||
        article.type !== "Travel") &&
      filters.years.filter(
        (year) => moment(article.date_start).format("YYYY") === year
      ).length > 0 &&
      filters.months.filter(
        (month) => moment(article.date_start).format("MMM") === month
      ).length > 0
    );
  });
  return articlesSelected;
};

export const getLocationsWithComa = (locations: Location[]): string => {
  return locations.map((loc) => `${loc.name}`).join(", ");
};

export const getFileDateTitle = (date_start: Date, date_end: Date): string => {
  if (
    moment(date_start).format("YYYY.MM.DD") ===
    moment(date_end).format("YYYY.MM.DD")
  )
    return moment(date_start).format("YYYY.MM.DD");
  else if (
    moment(date_start).format("YYYY.MM") === moment(date_end).format("YYYY.MM")
  )
    return (
      moment(date_start).format("YYYY.MM.DD") +
      "-" +
      moment(date_end).format("DD")
    );
  else if (
    moment(date_start).format("YYYY") === moment(date_end).format("YYYY")
  )
    return (
      moment(date_start).format("YYYY.MM.DD") +
      "-" +
      moment(date_end).format("MM.DD")
    );
  else
    return (
      moment(date_start).format("YYYY.MM.DD") +
      "-" +
      moment(date_end).format("YYYY.MM.DD")
    );
};

export const getFileDateTitleString = (
  date_start: Date,
  date_end: Date
): string => {
  if (
    moment(date_start).format("YYYY.MM.DD") ===
    moment(date_end).format("YYYY.MM.DD")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMM YYYY")
    );
  else if (
    moment(date_start).format("YYYY.MM") === moment(date_end).format("YYYY.MM")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMM YYYY")
    );
  else if (
    moment(date_start).format("YYYY") === moment(date_end).format("YYYY")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMM") +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMM YYYY")
    );
  else
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMM YYYY") +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMM YYYY")
    );
};

export const getFileDateTitleMonthString = (
  date_start: Date,
  date_end: Date
): string => {
  if (
    moment(date_start).format("YYYY.MM.DD") ===
    moment(date_end).format("YYYY.MM.DD")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMMM YYYY")
    );
  else if (
    moment(date_start).format("YYYY.MM") === moment(date_end).format("YYYY.MM")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMMM YYYY")
    );
  else if (
    moment(date_start).format("YYYY") === moment(date_end).format("YYYY")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMMM") +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMMM YYYY")
    );
  else
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMMM YYYY") +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMMM YYYY")
    );
};

export const getFileDateTitleMonthStringWithoutDay = (
  date_start: Date,
  date_end: Date
): string => {
  if (
    moment(date_start).format("YYYY.MM") === moment(date_end).format("YYYY.MM")
  )
    return moment(date_start).format("MMMM YYYY");
  else if (
    moment(date_start).format("YYYY") === moment(date_end).format("YYYY")
  )
    return (
      moment(date_start).format("MMMM") +
      " " +
      moment(date_end).format("MMMM YYYY")
    );
  else
    return (
      moment(date_start).format("MMMM YYYY") +
      " " +
      moment(date_end).format("MMMM YYYY")
    );
};

export const getFileDateTitleMonthStringWithShortYear = (
  date_start: Date,
  date_end: Date
): string => {
  if (
    moment(date_start).format("YYYY.MM.DD") ===
    moment(date_end).format("YYYY.MM.DD")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMM 'YY")
    );
  else if (
    moment(date_start).format("YYYY.MM") === moment(date_end).format("YYYY.MM")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMM 'YY")
    );
  else if (
    moment(date_start).format("YYYY") === moment(date_end).format("YYYY")
  )
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMM") +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMM 'YY")
    );
  else
    return (
      dateOrdinal(moment(date_start).format("D")) +
      moment(date_start).format(" MMM 'YY") +
      "-" +
      dateOrdinal(moment(date_end).format("D")) +
      moment(date_end).format(" MMM 'YY")
    );
};

function dateOrdinal(d) {
  return (
    d +
    (31 === d || 21 === d || 1 === d || "31" === d || "21" === d || "1" === d
      ? "st"
      : 22 === d || 2 === d || "22" === d || "2" === d
      ? "nd"
      : 23 === d || 3 === d || "23" === d || "3" === d
      ? "rd"
      : "th")
  );
}

export function mapFiltersFromURLSearch(query) {
  const searchParams = new URLSearchParams(query);
  return {
    years:
      searchParams.get("years") === "" || searchParams.get("years") === null
        ? []
        : searchParams.get("years").split(","),
    months:
      searchParams.get("months") === "" || searchParams.get("months") === null
        ? []
        : searchParams.get("months").split(","),
    continents:
      searchParams.get("continents") === "" ||
      searchParams.get("continents") === null
        ? []
        : searchParams.get("continents").split(","),
    countries:
      searchParams.get("countries") === "" ||
      searchParams.get("countries") === null
        ? []
        : searchParams.get("countries").split(","),
    subtypes:
      searchParams.get("subtypes") === "" ||
      searchParams.get("subtypes") === null
        ? []
        : searchParams.get("subtypes").split(","),
  };
}

export function mapURLToProperty(value, property, query) {
  var searchParams = new URLSearchParams(query);
  if (value !== undefined) {
    searchParams.set(property, value);
  } else {
    searchParams.delete(property);
  }
  return searchParams.toString();
}

export function mapPropertyFromURL(query, property) {
  var searchParams = new URLSearchParams(query);
  var value = searchParams.get(property);
  if (value === "" || value === null) return undefined;
  return value;
}

export function mapPhotoFromURL(query) {
  var searchParams = new URLSearchParams(query);
  var index = searchParams.get("img");
  if (index === "" || index === null) return undefined;
  return Number(index) - 1;
}

export function mapURLPhoto(imgIndex, query) {
  var searchParams = new URLSearchParams(query);
  if (imgIndex !== undefined) {
    searchParams.set("img", imgIndex + 1);
  } else {
    searchParams.delete("img");
  }
  return searchParams.toString();
}

export function areAllMapFiltersSelected(filters: Filters): boolean {
  return (
    filters.types.length === 2 &&
    filters.months.length === 12 &&
    filters.years.length === 7
  );
}

export function areNoMapFiltersSelected(filters: Filters): boolean {
  return (
    filters.types.length === 0 &&
    filters.months.length === 0 &&
    filters.years.length === 0
  );
}
