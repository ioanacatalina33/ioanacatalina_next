import { useEffect } from "react";

export const useBrowsers = () => {
  let isChrome = true;
  let isIE = false;
  let isFirefox = false;
  let isEdge = false;

  useEffect(() => {
    isFirefox = typeof InstallTrigger !== "undefined";
    isIE = /*@cc_on!@*/ false || !!document.documentMode;
    isEdge = !isIE && !!window.StyleMedia;
    isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  }, []);

  return { isChrome, isIE, isFirefox, isEdge };
};
