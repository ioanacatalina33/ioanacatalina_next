import { mapFiltersFromURL } from "helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Filters, FiltersType, updateFilters } from "store";

export function useFiltersQuery(filterType: FiltersType) {
  const { pathname, query, push } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateFilters(mapFiltersFromURL(window.location.search), filterType)
    );
  }, []);

  const addFiltersToURL = (filters: Partial<Filters>) => {
    let queryForURL = { ...query, ...filters };
    pushFilters(queryForURL);
  };

  function pushFilters(queryForURL) {
    push(
      {
        pathname: pathname,
        query: queryForURL,
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  return { addFiltersToURL };
}
