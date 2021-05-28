import { AlbumType } from "helpers/enums";

export interface Location {
  _id: string;
  name: string;
  coord_lat: string;
  coord_long: string;
  articles: Album[];
}

export interface Album {
  name_url: string;
  name: string;
  name_location: string;
  locations: Location[];
  country: string;
  continent: string;
  date_start: Date;
  date_end: Date;
  type: AlbumType;
  subtype: String;
  url: String;
  identifier: string;
}

export type AlbumDetails = Album & {
  description: string;
  keywords: string;
  metadata: string;
};

export type Highlight = {
  type: AlbumType.HIGHLIGHTS;
  name: string;
  href: string;
  description: string;
  identifier: string;
};

export type FullAlbumDetails = {
  album: AlbumDetails;
  recommended: Album[];
  next: Album[];
  prev: Album[];
  images: string[];
};

export type FullHighlightDetails = {
  highlight: Highlight;
  recommended: Highlight[];
  next: Highlight[];
  prev: Highlight[];
  images: string[];
};
