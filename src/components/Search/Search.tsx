import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FadeIn from "react-fade-in/lib/FadeIn";

import { PhotoContainerSearch } from "components/UI/PhotoContainers";
import { useSelector } from "hooks/utils";
import { updateMobileSearch, updateQueryText } from "store";

export const Search = () => {
  const allArticles = useSelector((state) => state.app.allArticles);
  const isLoading = useSelector((state) => state.app.isLoading);
  const queryForSearch = useSelector((state) => state.app.queryText);
  const [searchKeyTimeout, setSearchKeyTimeout] = useState<number>(0);

  const [articlesFiltered, setArticlesFiltered] = useState([]);
  const dispatch = useDispatch();

  async function searchInArticles(searchText) {
    if (searchText === "") setArticlesFiltered([]);
    var queryText = searchText.toLowerCase().split(" ");
    var selectedArticles = allArticles.filter((article) => {
      return (
        queryText.filter((query) => isQueryInArticle(article, query)).length ===
        queryText.length
      );
    });
    setArticlesFiltered(selectedArticles);
  }

  function isQueryInArticle(article, query) {
    return (
      article.name.toLowerCase().indexOf(query) > -1 ||
      article.locations.filter(
        (location) => location.name.toLowerCase().indexOf(query) > -1
      ).length > 0 ||
      article.subtype.toLowerCase().indexOf(query) > -1 ||
      article.type.toLowerCase().indexOf(query) > -1 ||
      article.country.toLowerCase().indexOf(query) > -1 ||
      article.metadata.toLowerCase().indexOf(query) > -1
    );
  }

  function onAlbumClicked() {
    dispatch(updateQueryText(""));
    dispatch(updateMobileSearch(false));
  }

  useEffect(() => {
    setArticlesFiltered([]);
    if (searchKeyTimeout) clearTimeout(searchKeyTimeout);

    setSearchKeyTimeout(
      // @ts-ignore
      setTimeout(() => {
        searchInArticles(queryForSearch);
      }, 300)
    );
    return () => clearTimeout(searchKeyTimeout);
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
          <div className="photo-wall-search row">
            {articlesFiltered.map((article, index) => (
              <PhotoContainerSearch
                onAlbumClicked={onAlbumClicked}
                key={index}
                article={article}
              />
            ))}
          </div>{" "}
        </FadeIn>
      )}
    </div>
  );
};
