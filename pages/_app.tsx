import AppMain from "components/AppMain";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";

import { Provider } from "react-redux";
import { useStore } from "store/store";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AppMain Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
