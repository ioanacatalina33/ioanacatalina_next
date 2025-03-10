import { useEffect, useRef } from "react";
import { Document } from "@contentful/rich-text-types";

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

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);

  return ref.current;
}

export const calculateReadingTime = (content: Document): number => {
  const plainText = extractText(content);
  const wordCount = plainText.split(/\s+/).length;

  // Average reading speed (200 words per minute)
  const wordsPerMinute = 200;

  return Math.ceil(wordCount / wordsPerMinute);
};

export const extractText = (document: Document): string => {
  let text = "";
  document.content.forEach((node: any) => {
    if (node.nodeType === "text") {
      text += node.value + " ";
    } else if (node.content) {
      text += extractText(node);
    }
  });
  return text;
};
