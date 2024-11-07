import { AlbumType } from "types/enums";

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
