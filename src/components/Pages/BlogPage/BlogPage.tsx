import { useFullScreenlayer, useScreenType } from "hooks";
import React from "react";
import { blogPosts } from "staticModel/Blog";
import { ScreenType, StaticPage } from "types";
import { PostCard } from "./PostCard";

export function BlogPage() {
  const FullSizeLayer = useFullScreenlayer(StaticPage.BLOG);
  const posts = blogPosts;

  const { screenType } = useScreenType();

  return (
    <div className="App">
      {FullSizeLayer}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding:
            screenType === ScreenType.Mobile
              ? "2rem 1rem 2rem 1rem"
              : "3rem 1rem 5rem 4rem",
        }}
      >
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
}
