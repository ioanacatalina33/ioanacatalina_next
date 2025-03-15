import { filterBlogPosts, sleep } from "helpers";
import { useEffect, useState } from "react";
import { FiltersType } from "store";
import { BlogPostCard } from "types/modelTypes";
import { useFilters } from "./utils";

export const useFilteredBlogPosts = (blogPosts: BlogPostCard[]) => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const { filters } = useFilters(FiltersType.Blog);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filter();
  }, [filters]);

  async function filter() {
    setLoading(true);
    setFilteredPosts([]);
    await sleep(100);
    const filteredArtciles = filterBlogPosts(blogPosts, filters.topics);
    setFilteredPosts(filteredArtciles);
    setLoading(false);
  }

  return { filteredPosts, loading };
};
