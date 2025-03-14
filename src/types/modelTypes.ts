import { AlbumType } from "types/enums";
import { Document } from "@contentful/rich-text-types";

export interface Location {
  _id: string;
  name: string;
  coord_lat: string;
  coord_long: string;
  articles: Album[];
}

export interface Album {
  _id?: string;
  name_url: string;
  name: string;
  locations: Location[];
  name_location?: string;
  country?: string;
  continent?: string;
  date_start?: Date;
  date_end?: Date;
  type: AlbumType;
  subtype?: string;
  url?: string;
  identifier: string;
  description?: string;
  keywords?: string;
}

export interface AlbumDetails extends Album {
  description: string;
  keywords?: string;
  metadata?: string;
}

export type FullAlbumDetails = {
  album: AlbumDetails;
  recommended: Album[];
  next: Album[];
  prev: Album[];
  images: string[];
};

export interface BlogImage {
  sys: {
    id: string;
  };
  fields: BlogImageFields;
}

export interface BlogImageFields {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      image: {
        width: number;
        height: number;
      };
    };
  };
}

export interface BlogAuthor {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    avatar: BlogImage;
  };
}

export interface BlogPostCard {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    summary: string;
    date: string;
    headerPhoto: BlogImage;
    author: BlogAuthor;
    keywords: string[];
  };
}

export interface BlogPost extends BlogPostCard {
  fields: BlogPostCard["fields"] & {
    content: Document;
  };
}
