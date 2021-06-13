import React, { useEffect, useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import ReactGA from "react-ga";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  updateQueryText,
  updateScreen,
  updateScreenDim,
  updateArticles,
  updateMobileSearch,
} from "store";
import { initGA } from "helpers/traking";
import { sleep } from "helpers";
import { fetchSmallArticles } from "helpers/api";

import { CanvasPopComp } from "./Canvaspop/CanvasPopComp";
import { Meta } from "./Head";
import { Header } from "./Header";
import { Search } from "./Search";
import { ScreenType } from "types/enums";
import { Footer } from "./Footer";

interface AppMain {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const AppMain = ({ Component, pageProps }: AppMain): JSX.Element => {
  const dispatch = useDispatch();
  const { pathname, query } = useRouter();

  function updateDeviceType(device: ScreenType) {
    dispatch(updateScreen(device));
  }

  function updateDeviceDim(width: number, height: number) {
    dispatch(updateScreenDim(width, height));
  }

  function escFunction(event) {
    if (event.keyCode === 27) dispatch(dispatch(updateQueryText("")));
  }

  const checkWidth = () => {
    const match = window.matchMedia(`(min-width: 992px)`).matches;
    if (match) {
      updateDeviceType(ScreenType.Desktop);
    } else {
      const match = window.matchMedia(`(min-width: 600px)`).matches;
      if (match) {
        updateDeviceType(ScreenType.Tablet);
      } else {
        updateDeviceType(ScreenType.Mobile);
      }
    }
  };

  async function getAlbums() {
    const albums = await fetchSmallArticles();
    dispatch(updateArticles(albums));
  }

  const updateDim = () => {
    updateDeviceDim(window.innerWidth, window.innerHeight);
  };

  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    rerender();
    ReactGA.pageview(window.location.pathname + (query.id ? query.id : ""));

    // closing search
    dispatch(updateQueryText(""));
    dispatch(updateMobileSearch(false));
  }, [pathname, query.id]);

  async function rerender() {
    setShowContent(false);
    await sleep(0);
    setShowContent(true);
  }

  useEffect(() => {
    initGA();
    getAlbums();
    checkWidth();
    updateDim();

    window.addEventListener("resize", checkWidth);
    window.addEventListener("resize", updateDim);
    document.addEventListener("keydown", escFunction, false);

    return () => {
      window.removeEventListener("resize", checkWidth);
      window.removeEventListener("resize", updateDim);
      window.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div>
      <Meta />
      <CanvasPopComp />
      {showContent && (
        <>
          <Header />
          <Search />
          <Component {...pageProps} />
          {pathname !== "/map" && <Footer />}
        </>
      )}
    </div>
  );
};
