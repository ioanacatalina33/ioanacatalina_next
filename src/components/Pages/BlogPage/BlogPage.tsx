import { useFullScreenlayer, useScreenType } from "hooks";
import React from "react";
import { BlogPost, BlogPostCard, ScreenType, StaticPage } from "types";
import { PostCard } from "./PostCard";

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
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
        {posts.length === 0 && <h1>Blog</h1>}
      </div>
    </div>
  );
}
