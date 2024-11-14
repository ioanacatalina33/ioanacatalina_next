import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "mapbox-gl/dist/mapbox-gl.css";
import "../src/styles/css/canvaspop.css";
import "../src/styles/css/index.css";
import "../src/styles/css/menu.css";
import "../src/styles/css/screensize.css";
import "../src/styles/css/search.css";
import "../src/styles/css/map.css";

import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import type { AppProps /*, AppContext */ } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

import { AppMain } from "components";

import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { store } from "store";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    // For page view tracking on route change
    const handleRouteChange = (url) => {
      (window as any).gtag("config", "G-MY9E2EY73G", {
        page_path: url,
      });
    };
    // Listen for route changes in Next.js
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MY9E2EY73G`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MY9E2EY73G');
        `}
      </Script>
      <Provider store={store}>
        <GlobalStyles />
        <AppMain Component={Component} pageProps={pageProps} />
      </Provider>
    </>
  );
}
