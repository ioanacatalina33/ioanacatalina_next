import { useRouter } from "next/router";
import { useEffect } from "react";

export function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    var timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
