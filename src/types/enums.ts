export enum Routes {
  Home = "/",
  Map = "/map",
  About = "/about",
  Contact = "/contact",
  Collaborations = "/collaborations",
  Highlights = "/highlights",
  Travel = "/travel",
  Dance = "/dance",
  Blog = "/blog",
  AlbumTravel = "/travel/[id]",
  AlbumDance = "/dance/[id]",
  AlbumHighlights = "/highlights/[id]",
  BlogArticle = "/blog/[id]",

  TravelAll = "/travel/all",
  DanceAll = "/dance/all",
}

export enum AlbumType {
  Travel = "Travel",
  Dance = "Dance",
  BigTrip = "BigTrip",
  Highlights = "Highlights",
}

export enum StaticPage {
  HOME = "Home",
  MAP = "Map",
  ABOUT = "MyStory",
  COLLABORATORS = "Coolab",
  WORK_WITH_ME = "WorkWithMe",
  CONTACT = "Contact",
  GEENA = "Geena",
  BLOG = "Blog",
}

export type PageType = AlbumType | StaticPage;

export enum ScreenType {
  LargeDesktop = "LargeDesktop",
  Desktop = "Desktop",
  Tablet = "Tablet",
  Mobile = "Mobile",
}

export enum AlbumSubType {
  City = "City",
  Nature = "Nature",
}

export enum LinksPageType {
  MyStory = "MyStory",
  Collaborations = "Collaborations",
  Contact = "Contact",
}

export enum PhotosDisplayType {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
}
