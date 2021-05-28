export enum AlbumType {
  TRAVEL = "Travel",
  DANCE = "Dance",
  BIGTRIP = "BigTrip",
  HIGHLIGHTS = "Highlights",
}

enum StaticPage {
  HOME = "Home",
  MAP = "Map",
  ABOUT = "MyStory",
  COLLABORATORS = "Coolab",
  CONTACT = "Contact",
  GEENA = "Geena",
}

type PageType = AlbumType | StaticPage;
