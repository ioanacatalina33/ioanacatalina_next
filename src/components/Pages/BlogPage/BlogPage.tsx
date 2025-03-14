import { useFullScreenlayer, useScreenType } from "hooks";
import React from "react";
import { BlogPostCard, ScreenType, StaticPage } from "types";
import { PostCard } from "../../UI/PhotoContainers/PostCard";

interface BlogPageProps {
  posts: BlogPostCard[];
}

export function BlogPage({ posts }: BlogPageProps) {
  const FullSizeLayer = useFullScreenlayer(StaticPage.BLOG);

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
        {posts.map((post, i) => (
          <div key={post.sys.id + " " + { i }}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
