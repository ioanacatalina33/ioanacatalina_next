import { ViewPort } from "components/Pages/MapPage/MapComponent";
import { Album } from "types";
import { Post1, Post2, Post3 } from "./Articles";

export interface FullBlogPostDetails {
  post: BlogPost;
  images: string[];
  albums: Album[];
}

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
  viewport?: ViewPort;
}

export const getBlogPostByUrl = (url: string): BlogPost => {
  const post = blogPosts.find((p) => p.url === url);

  return post;
};

export function getRandomPosts(postId: string) {
  const posts = blogPosts.slice(0, 4);
  return posts.filter((p) => p.id !== postId).slice(0, 3);
}

export const blogPosts_: BlogPost[] = [];

export const blogPosts: BlogPost[] = [
  {
    id: "Post1",
    url: "my-one-in-a-lifetime-golder-retriever",
    title: "Geena, my one in a lifetime golden retriever",
    subtitle: "My golden friend",
    text: "It is a long established fact that a reader will a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    date: new Date(2021, 6, 12),
    content: <Post1 />,
    keywords: ["geena", "golden", "retriever"],
  },
  {
    id: "Post2",
    url: "the-journey-of-a-dream",
    title: "The journey of a dream",
    subtitle: "How I started my journey and never looked back",
    text: "It is a long established fact that a reader will a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    date: new Date(2021, 5, 14),
    content: <Post2 />,
    keywords: [],
  },
  {
    id: "Post3",
    url: "winter-tour-across-romanians-carpathians-mountains-in-winter",
    title: "Winter tour across the Romanian's Carpathians Mountains",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of",
    subtitle: "How winter of 2020 brought me back to the Carpathians",
    date: new Date(2021, 0, 15),
    content: <Post3 />,
    keywords: [],

    dateStart: new Date(2021, 0, 22),
    dateEnd: new Date(2021, 2, 25),
    showAlbums: true,
    showMap: true,
    viewport: {
      longitude: 25,
      latitude: 45.854256,
      zoom: 6,
    },
  },
];
