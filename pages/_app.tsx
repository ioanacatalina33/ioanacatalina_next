import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "mapbox-gl/dist/mapbox-gl.css";
import "../src/css/canvaspop.css";
import "../src/css/index.css";
import "../src/css/menu.css";
import "../src/css/screensize.css";
import "../src/css/search.css";
import "../src/css/map.css";

import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { useStore } from "store/store";

import { AppMain } from "components";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AppMain Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
