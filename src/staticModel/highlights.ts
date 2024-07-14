import { AlbumDetails, AlbumType, FullAlbumDetails } from "types";

export const HighlightsAlbums: AlbumDetails[] = [
  {
    type: AlbumType.Highlights,
    name: "Landscape",
    name_url: "landscape",
    description: "",
    identifier: "/Highlights/landscape/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "Wildlife",
    name_url: "wildlife",
    description: "",
    identifier: "/Highlights/wildlife/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "Travel",
    name_url: "travel",
    description: "",
    identifier: "/Highlights/travel/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "City",
    name_url: "city",
    description: "",
    identifier: "/Highlights/city/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "People",
    name_url: "people",
    description: "",
    identifier: "/Highlights/people/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "Moments",
    name_url: "moments",
    description: "",
    identifier: "/Highlights/moments/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "Events",
    name_url: "events",
    description: "",
    identifier: "/Highlights/events/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "Dogs",
    name_url: "dogs",
    description: "",
    identifier: "/Highlights/dogs/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "My adventures",
    name_url: "myadventures",
    description: "Just a couple of moments from my life caught on camera..",
    identifier: "/Highlights/myadventures/",
    locations: [],
  },
  {
    type: AlbumType.Highlights,
    name: "Geena",
    name_url: "geena",
    description: "",
    identifier: "/Highlights/geena/",
    locations: [],
  },
];

export const getHighlightAlbumDetails = (
  albumName: string,
): FullAlbumDetails => {
  const album = HighlightsAlbums.filter(
    (article) => article.name_url === albumName,
  )[0];
  const recommended = getHighlightsRecommended(albumName);

  return { album, recommended, next: [], prev: [], images: [] };
};

export const getHighlightsAlbums = (albumName?: string) => {
  if (albumName !== undefined) {
    return HighlightsAlbums.filter((article) => article.name_url === albumName);
  }
  return HighlightsAlbums.slice(0, HighlightsAlbums.length - 1);
};

export const getHighlightsRecommended = (albumName: string) => {
  return HighlightsAlbums.filter(
    (article) => article.name_url !== albumName && article.name !== "Geena",
  ).slice(0, 6);
};
