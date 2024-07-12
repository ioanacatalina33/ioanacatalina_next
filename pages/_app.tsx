import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "mapbox-gl/dist/mapbox-gl.css";
import "../src/css/canvaspop.css";
import "../src/css/index.css";
import "../src/css/menu.css";
import "../src/css/screensize.css";
import "../src/css/search.css";
import "../src/css/map.css";
// import "../public/fonts/martelsans/MartelSans-SemiBold.ttf";
// import "../public/fonts/martelsans/MartelSans-Black.ttf";
// import "../public/fonts/charter/ttf/Charter-Regular.ttf";

import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { Provider } from "react-redux";

import { AppMain } from "components";

import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { store } from "store";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppMain Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
