import { useEffect } from "react";

const useCanvasPopScript = (props) => {
  useEffect(() => {
    //let cpJs = d.getElementsByTagName('script')
    var t = new Date();
    const js = document.createElement("script");
    js.id = "canvaspop-jssdk";
    js.setAttribute("data-cp-url", "https://store.canvaspop.com");
    js.src =
      "https://store.canvaspop.com/static/js/cpopstore.js?bust=" + t.getTime();
    js.async = true;
    document.body.appendChild(js);

    return () => {
      document.body.removeChild(js);
    };
  });
};

export default useCanvasPopScript;
