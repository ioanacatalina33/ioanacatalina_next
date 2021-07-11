import { Post1, Post2, Post3 } from "./Articles";

export interface BlogPost {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  text: string;
  date: Date;
  content: JSX.Element;
  keywords: string[];

  dateStart?: Date;
  dateEnd?: Date;
  showAlbums?: boolean;
  showMap?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "Post1",
    url: "my-one-in-a-lifetime-golder-retriever",
    title: "Geena, my one in a lifetime golden retriever",
    subtitle: "My golden friend",
    text: "It is a long established fact that a reader will a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    date: new Date(2021, 1, 15),
    content: Post1,
    keywords: ["geena", "golden", "retriever"],
  },
  {
    id: "Post2",
    url: "the-journey-of-a-dream",
    title: "The journey of a dream",
    subtitle: "How I started my journey and never looked back",
    text: "It is a long established fact that a reader will a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    date: new Date(2021, 6, 4),
    content: Post2,
    keywords: [],
  },
  {
    id: "Post3",
    url: "winter-tour-across-romanians-carpathians-mountains-in-winter",
    title: "Winter tour across the Romanian's Carpathians Mountains",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of",
    subtitle: "How winter of 2020 brought me back to the Carpathians",
    date: new Date(2021, 7, 11),
    content: Post3,
    keywords: [],
  },
];
