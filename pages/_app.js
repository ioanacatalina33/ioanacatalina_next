import React from "react";
import { Provider } from "react-redux";
import AppMain from "../src/components/AppMain";
import { useStore } from "../src/store/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AppMain Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
