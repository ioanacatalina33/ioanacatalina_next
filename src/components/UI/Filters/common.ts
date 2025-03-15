import { Album, BlogPostCard, Location } from "types/modelTypes";

export interface FiltersProps {
  albums: Album[];
  nrFiltered: number;
}
export interface DanceFiltersProps {
  albums: Album[];
  showFilters: boolean;
}

export interface LogosFiltersProps {
  albums: Album[];
}
export interface MapFiltersProps {
  locations: Location[];
  nrFiltered: number;
}

export interface BlogFiltersProps {
  blogPosts: BlogPostCard[];
  availableTopics: string[];
}
