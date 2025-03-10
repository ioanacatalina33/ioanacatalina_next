import { PageType, AlbumType, StaticPage } from "types/enums";

export interface FullSizeImage {
  url: string;
  text: string;
  author?: string;
  class: FullSizeImageClass;
  alt: string;
}

export interface FullSizeImageClass {
  opacity?: number;
  mobileOpacity?: number;
  width?: number; // percentage
  textPosition: string;
}

export const getFullSizeImageByPage = (
  type: PageType,
  travelPageCount: number,
  dancePageCount: number,
): FullSizeImage => {
  switch (type) {
    case StaticPage.HOME:
      return getFullSizeImageHome();
    case StaticPage.ABOUT:
      return getFullSizeImageAboutMe();
    case StaticPage.CONTACT:
      return getFullSizeImageContact();
    case StaticPage.COLLABORATORS:
      return getFullSizeImageCollaborations();
    case StaticPage.WORK_WITH_ME:
      return getFullSizeImageWorkWithMe();
    case StaticPage.BLOG:
      return getFullSizeImageBlog();
    case AlbumType.Travel:
      return getFullSizeImageTravel(travelPageCount);
    case AlbumType.Dance:
      return getFullSizeImageDance(dancePageCount);
    case AlbumType.Highlights:
      return getFullSizeImageHighlights();
  }
};

const getFullSizeImageAboutMe = (): FullSizeImage => {
  const images: FullSizeImage[] = [
    {
      url: "/img/fullscreen/aboutme_header_01.jpg",
      text: "My story",
      class: {
        textPosition: "img-loaded-text-center",
        mobileOpacity: 0.7,
        opacity: 0.6,
      },
      alt: "About me",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageHome = (): FullSizeImage => {
  const images: FullSizeImage[] = [
    {
      url: "/img/fullscreen/home_header3.jpg",
      text: "World through my lenses: Capturing moments that inspire a Love for our Planet",
      class: {
        textPosition: "img-loaded-text-center",
        opacity: 0.38,
        mobileOpacity: 0.45,
        width: 70,
      },
      alt: "World through my lenses: Capturing Moments That Inspire a love for our planet",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageContact = (): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/contact_header_01.jpg",
      text: "Get in touch",
      class: {
        textPosition: "img-loaded-text-center",
        opacity: 0.25,
        mobileOpacity: 0.22,
      },
      alt: "Contact me Ioana Catalina E. photography",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageHighlights = (): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/pic_highlights.jpg",
      text: '"The most beautiful thing in the world is, of course, the world itself."',
      author: "Wallace Stevens",
      class: { textPosition: "img-loaded-text-center" },
      alt: "Highlights Portfolio",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageCollaborations = (): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/collaborations_header_01.jpg",
      text: "Collaborations",
      class: { textPosition: "img-loaded-text-center" },
      alt: "Collaborators services photo shootings",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageWorkWithMe = (): FullSizeImage => {
  return {
    url: "/img/fullscreen/travel_header_08.jpg",
    text: "When we work with nature, we are in tune with the rhythms of life.",

    class: {
      textPosition: "img-loaded-text-top-center",
      width: 88,
      opacity: 0.45,
    },
    alt: "Travel around the world",
  };
};

const getFullSizeImageBlog = (): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/blog_header_01.jpg",
      text: "Blog",
      class: { textPosition: "img-loaded-text-center" },
      alt: "Blog posts",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageTravel = (travelPageCount: number): FullSizeImage => {
  const images: FullSizeImage[] = [
    {
      url: "/img/fullscreen/travel_header_02.jpg",
      text: "“The earth has music for those who listen.”",
      author: "George Santayana",
      class: {
        textPosition: "img-loaded-text-center",
        opacity: 0.4,
        mobileOpacity: 0.4,
        width: 60,
      },
      alt: "The earth has music for those who listen",
    },
    {
      //url: "/img/fullscreen/travel_header_05.jpg",
      url: "/img/fullscreen/travel_header_04.jpg",
      text: "Never lose your sense of wonder.",
      class: { textPosition: "img-loaded-text-center", opacity: 0.55 },
      alt: "Never lose your sense of wonder",
    },
    {
      //url: "/img/fullscreen/travel_header_08.jpg",
      url: "/img/fullscreen/travel_header_07.jpg",
      text: "A journey of a thousand miles begins with a single step.",
      class: { textPosition: "img-loaded-text-top-left", opacity: 0.45 },
      alt: "A journey of a thousand miles begins with a single step",
    },
    {
      url: "/img/fullscreen/travel_header_03.jpg",
      author: "Jimmy Dean",
      text: '"You can’t change the direction of the wind, but you can adjust your sails."',
      class: {
        textPosition: "img-loaded-text-center",
        opacity: 0.45,
        width: 90,
      },
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_05.jpg",
      author: "Mother Teresa",
      text: '"We can do no great things, only small things with great love."',
      class: {
        textPosition: "img-loaded-text-bottom-center",
        opacity: 0.4,
        width: 80,
        mobileOpacity: 0.38,
      },
      alt: "We can do no great things, only small things with great love.",
    },
    {
      url: "/img/fullscreen/travel_header_06.jpg",
      text: "In the stillness of nature, we find the answers we’ve been searching for.",
      class: { textPosition: "img-loaded-text-bottom-center", opacity: 0.4 },
      alt: "In the stillness of nature, we find the answers we’ve been searching for",
    },
    {
      url: "/img/fullscreen/travel_header_08.jpg",
      text: '"In every leaf and stream, there is a story of life that connects us all."',
      author: "John Muir",
      class: {
        textPosition: "img-loaded-text-top-center",
        width: 88,
        opacity: 0.45,
      },
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_01.jpg",
      text: '"In a world where you can be anything, be kind."',
      author: "Clare Pooley",
      class: {
        textPosition: "img-loaded-text-top-right",
        opacity: 0.5,
        mobileOpacity: 0.6,
      },
      alt: "In a world where you can be anything, be kind",
    },
  ];
  return images[travelPageCount % 8];
  //return images[1];
};

const getFullSizeImageDance = (dancePageCount: number): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/dance_header_01.jpg",
      text: "Dancing is like dreaming with your feet.",
      class: { textPosition: "img-loaded-text-top-left", opacity: 0.4 },
      alt: "Dancing Brazilian Zouk Ryel Jessica",
    },
    {
      url: "/img/fullscreen/dance_header_02.jpg",
      text: "Don't walk, dance.",
      class: { textPosition: "img-loaded-text-top-center", opacity: 0.4 },
      alt: "Dancing Brazilian Zouk Ryel",
    },
    {
      url: "/img/fullscreen/dance_header_03.jpg",
      text: "Dance is freedom and connection.",
      class: { textPosition: "img-loaded-text-top-right", opacity: 0.6 },
      alt: "Dancing Brazilian Zouk Anderson and Brenda",
    },
    {
      url: "/img/fullscreen/dance_header_05.jpg",
      text: "Dancing is the closest thing to magic.",
      class: { textPosition: "img-loaded-text-top-left", opacity: 0.6 },
      alt: "Dancing Brazilian Zouk Freddy and Andressa",
    },
  ];
  //return images[Math.floor(Math.random() * images.length)];
  return images[dancePageCount % 4];
};

export enum PhotosCollageType {
  MyAdventures,
  Photography,
  DogShows,
  Dancing,
  RomaniaTravel,
  SouthAmerica,
  Nature,
  Geena,
}

type PhotosCollage = (type: PhotosCollageType) => string[];
//My story photos
export const getPhotosForCollage: PhotosCollage = (type: PhotosCollageType) => {
  switch (type) {
    case PhotosCollageType.MyAdventures:
      return [
        //1 - adventures
        "/img/photos/aboutme_adventures/pic1.jpg",
        "/img/photos/aboutme_adventures/pic2.jpg",
        "/img/photos/aboutme_adventures/pic3.jpg",
        "/img/photos/aboutme_adventures/pic4.jpg",
        "/img/photos/aboutme_adventures/pic5.jpg",
      ];
    case PhotosCollageType.Photography:
      return [
        //2 - photography
        "/img/photos/aboutme_photo/pic1.jpg",
        "/img/photos/aboutme_photo/pic2.jpg",
        "/img/photos/aboutme_photo/pic3.jpg",
        "/img/photos/aboutme_photo/pic4.jpg",
        "/img/photos/aboutme_photo/pic5.jpg",
      ];
    case PhotosCollageType.DogShows:
      return [
        //3-dog shows
        "/img/photos/aboutme_dogs/pic1.jpg",
        "/img/photos/aboutme_dogs/pic2.jpg",
        "/img/photos/aboutme_dogs/pic3.jpg",
        "/img/photos/aboutme_dogs/pic4.jpg",
        "/img/photos/aboutme_dogs/pic5.jpg",
      ];
    case PhotosCollageType.Dancing:
      return [
        //4 -dancing
        "/img/photos/aboutme_dancing/pic1.jpg",
        "/img/photos/aboutme_dancing/pic2.jpg",
        "/img/photos/aboutme_dancing/pic3.jpg",
        "/img/photos/aboutme_dancing/pic4.jpg",
        "/img/photos/aboutme_dancing/pic5.jpg",
      ];
    case PhotosCollageType.RomaniaTravel:
      return [
        //5 -travel
        "/img/photos/aboutme_romania_travel/pic1.jpg",
        "/img/photos/aboutme_romania_travel/pic2.jpg",
        "/img/photos/aboutme_romania_travel/pic3.jpg",
        "/img/photos/aboutme_romania_travel/pic4.jpg",
        "/img/photos/aboutme_romania_travel/pic5.jpg",
      ];
    case PhotosCollageType.Geena:
      return [
        //6 -geena
        "/img/photos/aboutme_geena/pic1.jpg",
        "/img/photos/aboutme_geena/pic2.jpg",
        "/img/photos/aboutme_geena/pic3.jpg",
        "/img/photos/aboutme_geena/pic4.jpg",
        "/img/photos/aboutme_geena/pic5.jpg",
      ];
    case PhotosCollageType.SouthAmerica:
      return [
        //5 -travel
        "/img/photos/aboutme_south_america/pic1.jpg",
        "/img/photos/aboutme_south_america/pic2.jpg",
        "/img/photos/aboutme_south_america/pic3.jpg",
        "/img/photos/aboutme_south_america/pic4.jpg",
        "/img/photos/aboutme_south_america/pic5.jpg",
      ];
    case PhotosCollageType.Nature:
      return [
        //5 -travel
        "/img/photos/aboutme_nature/pic1.jpg",
        "/img/photos/aboutme_nature/pic2.jpg",
        "/img/photos/aboutme_nature/pic3.jpg",
        "/img/photos/aboutme_nature/pic4.jpg",
        "/img/photos/aboutme_nature/pic5.jpg",
      ];
    default:
      return [];
  }
};

export const getPhotosForCollaborationsDance: () => string[] = () => {
  return [
    "/img/photos/collaborations_dance/001.jpg",
    "/img/photos/collaborations_dance/002.jpg",
    "/img/photos/collaborations_dance/003.jpg",
    "/img/photos/collaborations_dance/004.jpg",
  ];
};

export const getPhotosForCollaborationsBaby: () => string[] = () => {
  return [
    "/img/photos/collaborations_baby/001.jpg",
    "/img/photos/collaborations_baby/002.jpg",
    "/img/photos/collaborations_baby/003.jpg",
    "/img/photos/collaborations_baby/004.jpg",
  ];
};

export const getPhotosForCollaborationsEvents: () => string[] = () => {
  return [
    "/img/photos/collaborations_events/001.jpg",
    "/img/photos/collaborations_events/002.jpg",
    "/img/photos/collaborations_events/003.jpg",
    "/img/photos/collaborations_events/004.jpg",
  ];
};

export const getPhotosForCollaborationsIndoors: () => string[] = () => {
  return [
    "/img/photos/collaborations_indoors/001.jpg",
    "/img/photos/collaborations_indoors/002.jpg",
    "/img/photos/collaborations_indoors/003.jpg",
    "/img/photos/collaborations_indoors/004.jpg",
  ];
};

export const getPhotosForCollaborationsPets: () => string[] = () => {
  return [
    "/img/photos/collaborations_pets/001.jpg",
    "/img/photos/collaborations_pets/002.jpg",
    "/img/photos/collaborations_pets/003.jpg",
    "/img/photos/collaborations_pets/004.jpg",
  ];
};

export const getPhotosForCollaborationsPortraits: () => string[] = () => {
  return [
    "/img/photos/collaborations_portraits/001.jpg",
    "/img/photos/collaborations_portraits/002.jpg",
    "/img/photos/collaborations_portraits/003.jpg",
    "/img/photos/collaborations_portraits/004.jpg",
  ];
};

export const getPhotosForCollaborationsProducts: () => string[] = () => {
  return [
    "/img/photos/collaborations_products/001.jpg",
    "/img/photos/collaborations_products/002.jpg",
    "/img/photos/collaborations_products/003.jpg",
    "/img/photos/collaborations_products/004.jpg",
  ];
};

export const getPhotosForCollaborationsTrash: () => string[] = () => {
  return [
    "/img/photos/collaborations_trash/001.jpg",
    "/img/photos/collaborations_trash/002.jpg",
    "/img/photos/collaborations_trash/003.jpg",
    "/img/photos/collaborations_trash/004.jpg",
  ];
};

export const getPhotosForAdventureProducts: () => string[] = () => {
  return [
    "/img/photos/collaborations_adventure/001.jpg",
    "/img/photos/collaborations_adventure/002.jpg",
    "/img/photos/collaborations_adventure/003.jpg",
    "/img/photos/collaborations_adventure/004.jpg",
  ];
};
