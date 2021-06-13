import { PageType, AlbumType, StaticPage } from "types/enums";

export interface FullSizeImage {
  url: string;
  text: string;
  class: string;
  alt: string;
}

export const getFullSizeImageByPage = (type: PageType) => {
  switch (type) {
    case StaticPage.HOME:
      return getFullSizeImageHome();
    case StaticPage.ABOUT:
      return getFullSizeImageAboutMe();
    case StaticPage.CONTACT:
      return getFullSizeImageContact();
    case StaticPage.COLLABORATORS:
      return getFullSizeImageCollaborations();

    case AlbumType.Travel:
      return getFullSizeImageTravel();
    case AlbumType.Dance:
      return getFullSizeImageDance();
    case AlbumType.Highlights:
      return getFullSizeImageHighlights();
  }
};

const getFullSizeImageAboutMe = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/aboutme_header_01.jpg",
      text: "My story",
      class: "img-loaded-text-center",
      alt: "About me",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageHome = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/home_header.jpg",
      text: "A database of my adventures",
      class: "img-loaded-text-center",
      alt: "Malaga Spain Home Image",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageContact = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/contact_header_01.jpg",
      text: "Contact",
      class: "img-loaded-text-center",
      alt: "Contact me Ioana Catalina E. photography",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageHighlights = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/pic_highlights.jpg",
      text: "Highlights",
      class: "img-loaded-text-center",
      alt: "Highlights Portfolio",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageCollaborations = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/collaborations_header_01.jpg",
      text: "Collaborations",
      class: "img-loaded-text-center",
      alt: "Collaborators services photo shootings",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageTripsWithMe = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/couples_sessions_header_01.jpg",
      text: "See your unique moments through my lens!",
      class: "img-loaded-text-center opacity45",
      alt: "Trips with me",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageTravel = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/travel_header_01.jpg",
      text: "In a world where you can be anything, be kind.",
      class: "img-loaded-text-top-right opacity40",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_02.jpg",
      text: "Never stop exploring",
      class: "img-loaded-text-center opacity45",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_03.jpg",
      text: "Travel is like knowledge. The more you see the more you know you haven't seen.",
      class: "img-loaded-text-top-right opacity40",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_04.jpg",
      text: "It feels good to be lost in the right direction.",
      class: "img-loaded-text-top-right opacity45",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_05.jpg",
      text: "Never lose the sense of wonder.",
      class: "img-loaded-text-top-right opacity45",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_06.jpg",
      text: "Wherever you are, be all there.",
      class: "img-loaded-text-top-center opacity45",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_07.jpg",
      text: "There's no such place as faraway.",
      class: "img-loaded-text-top-right opacity40",
      alt: "Travel around the world",
    },
    {
      url: "/img/fullscreen/travel_header_08.jpg",
      text: "A journey of a thousands miles begins with a single step.",
      class: "img-loaded-text-top-left opacity40",
      alt: "Travel around the world",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getFullSizeImageDance = (): FullSizeImage => {
  var images = [
    {
      url: "/img/fullscreen/dance_header_01.jpg",
      text: "Dancing is like dreaming with your feet.",
      class: "img-loaded-text-top-left opacity40",
      alt: "Dancing Brazilian Zouk Ryel Jessica",
    },
    {
      url: "/img/fullscreen/dance_header_02.jpg",
      text: "Don't walk, dance.",
      class: "img-loaded-text-top-center opacity40",
      alt: "Dancing Brazilian Zouk Ryel",
    },
    {
      url: "/img/fullscreen/dance_header_03.jpg",
      text: "Dance is freedom and connection.",
      class: "img-loaded-text-top-right opacity60",
      alt: "Dancing Brazilian Zouk Anderson and Brenda",
    },
    {
      url: "/img/fullscreen/dance_header_04.jpg",
      text: "Life is better when you dance.",
      class: "img-loaded-text-top-left opacity45",
      alt: "Dancing Brazilian Zouk",
    },
    {
      url: "/img/fullscreen/dance_header_05.jpg",
      text: "Dancing is the closest thing to magic.",
      class: "img-loaded-text-top-left opacity60",
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
