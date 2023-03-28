import { Album } from "types";

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const getAlbumImageURL = (identifier: string, imageName: string) => {
  const string = ("/img" + identifier + imageName).replace(" ", "%20");
  return string;
};

export function contentScroll(screenHeight) {
  window.scrollTo({
    top: screenHeight,
    behavior: "smooth",
  });
}
