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
  width?: number; // percentage
  textPosition: string;
}

export const getFullSizeImageByPage = (
  type: PageType,
  travelPageCount: number,
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
      return getFullSizeImageDance();
    case AlbumType.Highlights:
      return getFullSizeImageHighlights();
  }
};

const getFullSizeImageAboutMe = (): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/aboutme_header_01.jpg",
      text: "My story",
      class: {
        textPosition: "img-loaded-text-center",
      },
      alt: "About me",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageHome = (): FullSizeImage => {
  const images = [
    // {
    //   url: "/img/fullscreen/home_header.jpg",
    //   text: "A database of my adventures",
    //   class: "img-loaded-text-center",
    //   alt: "Malaga Spain Home Image",
    // },
    {
      url: "/img/fullscreen/home_header3.jpg",
      text: "World through my lenses: Capturing moments that inspire a Love for our Planet",
      class: {
        textPosition: "img-loaded-text-center",
        opacity: 0.28,
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
      text: "Contact",
      class: { textPosition: "img-loaded-text-center" },
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
    url: "/img/fullscreen/home_header2.jpg",
    text: "To be in nature is to find clarity.<br/>To work with it is to find peace.",
    class: { textPosition: "img-loaded-text-center", width: 60, opacity: 0.3 },
    alt: "Work with mes",
  };
};

const getFullSizeImageBlog = (): FullSizeImage => {
  const images = [
    {
      url: "/img/fullscreen/blog_header_01.jpg",
      text: "Blog posts",
      class: { textPosition: "img-loaded-text-center" },
      alt: "Blog posts",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageTravel = (travelPageCount: number): FullSizeImage => {
  const images = [
    {
      //url: "/img/fullscreen/travel_header_08.jpg",
      url: "/img/fullscreen/travel_header_07.jpg",
      text: "A journey of a thousand miles begins with a single step.",
      class: { textPosition: "img-loaded-text-top-left", opacity: 0.45 },
      alt: "A journey of a thousand miles begins with a single step",
    },
    {
      url: "/img/fullscreen/travel_header_01.jpg",
      text: "In a world where you can be anything, be kind.",
      class: { textPosition: "img-loaded-text-top-right", opacity: 0.5 },
      alt: "In a world where you can be anything, be kind",
    },
    {
      //url: "/img/fullscreen/travel_header_05.jpg",
      url: "/img/fullscreen/travel_header_04.jpg",
      text: "Never lose the sense of wonder.",
      class: { textPosition: "img-loaded-text-top-right", opacity: 0.45 },
      alt: "Never lose the sense of wonder",
    },
    // {
    //   url: "/img/fullscreen/travel_header_02.jpg",
    //   text: "Never stop exploring",
    //   class: "img-loaded-text-center opacity45",
    //   alt: "Travel around the world",
    // },
    // {
    //   url: "/img/fullscreen/travel_header_03.jpg",
    //   text: "Travel is like knowledge. The more you see the more you know you haven't seen.",
    //   class: "img-loaded-text-top-right opacity40",
    //   alt: "Travel around the world",
    // },
    // {
    //   url: "/img/fullscreen/travel_header_04.jpg",
    //   text: "It feels good to be lost in the right direction.",
    //   class: "img-loaded-text-top-right opacity45",
    //   alt: "Travel around the world",
    // },
    // {
    //   url: "/img/fullscreen/travel_header_06.jpg",
    //   text: "Wherever you are, be all there.",
    //   class: "img-loaded-text-top-center opacity45",
    //   alt: "Travel around the world",
    // },
    // {
    //   url: "/img/fullscreen/travel_header_07.jpg",
    //   text: "There's no such place as faraway.",
    //   class: "img-loaded-text-top-right opacity40",
    //   alt: "Travel around the world",
    // },
  ];
  return images[travelPageCount % 3];
};

const getFullSizeImageDance = (): FullSizeImage => {
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
    // {
    //   url: "/img/fullscreen/dance_header_04.jpg",
    //   text: "Life is better when you dance.",
    //   class: { textPosition: "img-loaded-text-top-left", opacity: 0.45 },
    //   alt: "Dancing Brazilian Zouk",
    // },
    {
      url: "/img/fullscreen/dance_header_05.jpg",
      text: "Dancing is the closest thing to magic.",
      class: { textPosition: "img-loaded-text-top-left", opacity: 0.6 },
      alt: "Dancing Brazilian Zouk Freddy and Andressa",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

type PhotosCollage = (index: number) => string[];
//My story photos
export const getPhotosForCollage: PhotosCollage = (index: number) => {
  const images = [
    [
      //1 - adventures
      "/img/photos/aboutme_adventures/pic1.jpg",
      "/img/photos/aboutme_adventures/pic2.jpg",
      "/img/photos/aboutme_adventures/pic3.jpg",
      "/img/photos/aboutme_adventures/pic4.jpg",
      "/img/photos/aboutme_adventures/pic5.jpg",
    ],
    [
      //2 - photography
      "/img/photos/aboutme_photo/pic1.jpg",
      "/img/photos/aboutme_photo/pic2.jpg",
      "/img/photos/aboutme_photo/pic3.jpg",
      "/img/photos/aboutme_photo/pic4.jpg",
      "/img/photos/aboutme_photo/pic5.jpg",
    ],
    [
      //3-dog shows
      "/img/photos/aboutme_dogs/pic1.jpg",
      "/img/photos/aboutme_dogs/pic2.jpg",
      "/img/photos/aboutme_dogs/pic3.jpg",
      "/img/photos/aboutme_dogs/pic4.jpg",
      "/img/photos/aboutme_dogs/pic5.jpg",
    ],
    [
      //4 -dancing
      "/img/photos/aboutme_dancing/pic1.jpg",
      "/img/photos/aboutme_dancing/pic2.jpg",
      "/img/photos/aboutme_dancing/pic3.jpg",
      "/img/photos/aboutme_dancing/pic4.jpg",
      "/img/photos/aboutme_dancing/pic5.jpg",
    ],
    [
      //5 -travel
      "/img/photos/aboutme_travel/pic1.jpg",
      "/img/photos/aboutme_travel/pic2.jpg",
      "/img/photos/aboutme_travel/pic3.jpg",
      "/img/photos/aboutme_travel/pic4.jpg",
      "/img/photos/aboutme_travel/pic5.jpg",
    ],
    [
      //6 -geena
      "/img/photos/aboutme_geena/pic1.jpg",
      "/img/photos/aboutme_geena/pic2.jpg",
      "/img/photos/aboutme_geena/pic3.jpg",
      "/img/photos/aboutme_geena/pic4.jpg",
      "/img/photos/aboutme_geena/pic5.jpg",
    ],
  ];
  return images[index];
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
