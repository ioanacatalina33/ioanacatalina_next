import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSmallArticles } from "../helpers/apiRequests";
import { updateArticles } from "../store/actions";

export default function AppMain({ Component, pageProps }) {
  const [articles, setArticles] = useState();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchSmallArticles()
  //     .then((res) => {
  //       setArticles(res);
  //       //this.props.updateIsLoading(false);
  //       dispatch(updateArticles(res));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Component {...pageProps} />
      <div>
        {articles &&
          articles.map((article) => (
            <span key={article.id}>
              {article.name}
              <br />
            </span>
          ))}
      </div>
    </>
  );
}
