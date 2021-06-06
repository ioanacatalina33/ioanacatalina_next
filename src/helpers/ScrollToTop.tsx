import { useRouter } from "next/router";
import { useEffect } from "react";
import { scroller } from "react-scroll";

export function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    var timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      // scroller.scrollTo("css_class_scroll", {
      //   duration: 1,
      //   delay: 0,
      // });
    });
    return () => clearTimeout(timeout);
  }, [pathname]);

  return <div className="css_class_scroll" />;
}
