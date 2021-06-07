import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FadeIn from "react-fade-in/lib/FadeIn";

import { PhotoContainerSearch } from "components/UI/PhotoContainers";
import { useSelector } from "hooks/utils";
import { useTextDebounce } from "hooks/useTextDebounce";
import { updateMobileSearch, updateQueryText } from "store";
import { Album } from "types/modelTypes";

export const Search = () => {
  const allArticles = useSelector((state) => state.app.allArticles);
  const isLoading = useSelector((state) => state.app.isLoading);
  const queryForSearch = useSelector((state) => state.app.queryText);

  const [articlesFiltered, setArticlesFiltered] = useState([]);
  const dispatch = useDispatch();

  async function searchInArticles(searchText: string) {
    if (searchText === "") setArticlesFiltered([]);
    else {
      console.log("searching for " + searchText);
      const queryText = searchText.toLowerCase().split(" ");
      const selectedArticles = allArticles.filter((article) => {
        return (
          queryText.filter((query) => isQueryInArticle(article, query))
            .length === queryText.length
        );
      });
      setArticlesFiltered(selectedArticles.slice(0, 20));
    }
  }

  function isQueryInArticle(article: Album, query: string) {
    return (
      article.name.toLowerCase().indexOf(query) > -1 ||
      article.locations.filter(
        (location) => location.name.toLowerCase().indexOf(query) > -1
      ).length > 0 ||
      article.subtype.toLowerCase().indexOf(query) > -1 ||
      article.type.toLowerCase().indexOf(query) > -1 ||
      article.country.toLowerCase().indexOf(query) > -1
    );
  }

  function onAlbumClicked() {
    dispatch(updateQueryText(""));
    dispatch(updateMobileSearch(false));
  }

  const { debouncedValue } = useTextDebounce(queryForSearch, 500);

  useEffect(() => {
    searchInArticles(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    setArticlesFiltered([]);
  }, [queryForSearch]);

  return (
    <div
      id="search-wrapper"
      className={
        queryForSearch !== undefined && queryForSearch !== ""
          ? "slideIn"
          : "slideOut"
      }
    >
      {isLoading ? (
        <div className="loading-plane">
          <div className="animated-background"></div>
        </div>
      ) : (
        <FadeIn>
          <div className="photo-wall-search">
            <div className="photo-wall-search-wrapper row">
              {articlesFiltered.map((article, index) => (
                <PhotoContainerSearch
                  onAlbumClicked={onAlbumClicked}
                  key={index}
                  article={article}
                  isSingle={articlesFiltered.length === 1}
                />
              ))}
            </div>
          </div>{" "}
        </FadeIn>
      )}
    </div>
  );
};
