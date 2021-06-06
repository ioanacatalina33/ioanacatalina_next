import React, { useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  updateQueryText,
  updateScreen,
  updateScreenDim,
  updateArticles,
} from "store";
import { initGA, PageView } from "helpers/traking";
import { ScrollToTop } from "helpers";
import { fetchSmallArticles } from "helpers/api";

import { CanvasPopComp } from "./Canvaspop/CanvasPopComp";
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
  const { pathname } = useRouter();

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

  useEffect(() => {
    initGA();
    PageView();
    getAlbums();

    checkWidth();
    updateDim();

    window.addEventListener("resize", checkWidth);
    window.addEventListener("resize", updateDim);
    document.addEventListener("keydown", escFunction, false);

    return () => {
      window.removeEventListener("resize", checkWidth);
      window.removeEventListener("resize", updateDim);
      window.removeEventListener("resize", escFunction, false);
    };
  }, []);

  return (
    <>
      <div>
        <ScrollToTop />
        <CanvasPopComp />
        <Header />
        <Search />
        <Component {...pageProps} />
        {pathname !== "/map" && <Footer />}
      </div>
    </>
  );
};
