import { useFullScreenlayer, useScreenType } from "hooks";
import React from "react";
import { BlogPostCard, ScreenType, StaticPage } from "types";
import BlogWall from "./BlogWall";
import { useFilteredBlogPosts } from "hooks/useFilteredBlogPosts";
import { FiltersBlog } from "components/UI/Filters/FiltersBlog";

interface BlogPageProps {
  posts: BlogPostCard[];
}

export function BlogPage({ posts }: BlogPageProps) {
  const FullSizeLayer = useFullScreenlayer(StaticPage.BLOG);

  const { filteredPosts, loading } = useFilteredBlogPosts(posts);

  const { screenType } = useScreenType();
  return (
    <div className="App">
      {FullSizeLayer}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding:
            screenType === ScreenType.Mobile
              ? "2rem 1rem 2rem 1rem"
              : "3rem 1rem 5rem 4rem",
          minHeight: "100vh",
        }}
      >
        <FiltersBlog />
        {!loading && <BlogWall posts={filteredPosts} />}
      </main>
    </div>
  );
}
