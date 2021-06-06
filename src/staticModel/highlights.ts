import { AlbumType } from "types";
import { FullHighlightDetails, Highlight } from "types/modelTypes";

export const HighlightsAlbums: Highlight[] = [
  {
    type: AlbumType.Highlights,
    name: "Nature",
    href: "nature",
    description: "",
    identifier: "/Highlights/nature/",
  },
  {
    type: AlbumType.Highlights,
    name: "City",
    href: "city",
    description: "",
    identifier: "/Highlights/city/",
  },
  {
    type: AlbumType.Highlights,
    name: "Events",
    href: "events",
    description: "",
    identifier: "/Highlights/events/",
  },
  {
    type: AlbumType.Highlights,
    name: "People",
    href: "people",
    description: "",
    identifier: "/Highlights/people/",
  },
  {
    type: AlbumType.Highlights,
    name: "Moments",
    href: "moments",
    description: "",
    identifier: "/Highlights/moments/",
  },
  {
    type: AlbumType.Highlights,
    name: "Animals",
    href: "animals",
    description: "",
    identifier: "/Highlights/animals/",
  },
  {
    type: AlbumType.Highlights,
    name: "My adventures",
    href: "myadventures",
    description: "Just a couple of moments from my life caught on camera..",
    identifier: "/Highlights/myadventures/",
  },
  {
    type: AlbumType.Highlights,
    name: "Geena",
    href: "geena",
    description: "",
    identifier: "/Highlights/geena/",
  },
];

export const getHighlightAlbumDetails = (
  albumName: string
): FullHighlightDetails => {
  const highlight = HighlightsAlbums.filter(
    (article) => article.href === albumName
  )[0];
  const recommended = getHighlightsRecommended(albumName);

  return { highlight, recommended, next: [], prev: [], images: [] };
};

export const getHighlightsAlbums = (albumName?: string): Highlight[] => {
  if (albumName !== undefined) {
    return HighlightsAlbums.filter((article) => article.href === albumName);
  }
  return HighlightsAlbums.slice(0, HighlightsAlbums.length - 2);
};

export const getHighlightsRecommended = (albumName: string): Highlight[] => {
  return HighlightsAlbums.filter(
    (article) => article.href !== albumName && article.name !== "Geena"
  ).slice(0, 6);
};
