import React, { useEffect, useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// import { initGA } from "helpers/traking";
import { sleep, usePrevious } from "helpers";
import { fetchSmallArticles } from "helpers/api";

import { Meta } from "./Head";
import { Header } from "./Header";
import { Search } from "./Search";
import { ScreenType } from "types/enums";
import { Footer } from "./Footer";
import {
  updateArticles,
  updateMobileSearch,
  updateQueryText,
  updateScreen,
  updateScreenDim,
} from "store/appSlice";
import { useDebounce } from "hooks";

interface AppMain {
  // eslint-disable-next-line @typescript-eslint/ban-types
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const AppMain = ({ Component, pageProps }: AppMain): JSX.Element => {
  const dispatch = useDispatch();
  const { pathname, query } = useRouter();

  function updateDeviceType(screenType: ScreenType) {
    dispatch(updateScreen(screenType));
  }

  function updateDeviceDim(screenWidth: number, screenHeight: number) {
    dispatch(updateScreenDim({ screenWidth, screenHeight }));
  }

  function escFunction(event) {
    if (event.keyCode === 27) dispatch(updateQueryText(""));
  }
  const [screenSize, setScreenSize] = useState(0);
  const debouncedScreenSize = useDebounce<number>(screenSize, 0);

  function onScreenResize() {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    checkWidth();
  }, [debouncedScreenSize]);

  const checkWidth = () => {
    updateDeviceDim(window.innerWidth, window.innerHeight);

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

  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    rerender();

    // closing search
    dispatch(updateQueryText(""));
    dispatch(updateMobileSearch(false));
  }, [pathname, query.id, dispatch]);

  const prevQuery = usePrevious(query);
  useEffect(() => {
    if (prevQuery && query.id !== prevQuery.id)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  async function rerender() {
    setShowContent(false);
    await sleep(0);
    setShowContent(true);
  }

  useEffect(() => {
    getAlbums();
    checkWidth();

    window.addEventListener("resize", onScreenResize);
    document.addEventListener("keydown", escFunction, false);

    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);

    return () => {
      window.removeEventListener("resize", onScreenResize);
      //window.removeEventListener("resize", updateDim);
      window.removeEventListener("keydown", escFunction, false);
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div>
      <Meta />
      {/* <CanvasPopComp /> */}
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
