import { TYPE_DANCE, TYPE_HIGHLIGHTS, TYPE_TRAVEL } from "./constants";

export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const getFullSizeImageByType = (type) => {
  if (type === TYPE_TRAVEL) return getFullSizeImageTravel();
  if (type === TYPE_DANCE) return getFullSizeImageDance();
  if (type === TYPE_HIGHLIGHTS) return getFullSizeImageHighlights();
  if (type === "TravelBottom") return getFullSizeImageTravelBottom();
  if (type === "DanceBottom") return getFullSizeImageDanceBottom();
};

export const getFullSizeImageAboutMe = () => {
  var images = [
    {
      url: "/img/fullscreen/aboutme_header_01.jpg",
      text: "My story",
      class: "img-loaded-text-center",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageHome = () => {
  var images = [
    {
      url: "/img/fullscreen/home_header.jpg",
      text: "A database of my adventures",
      class: "img-loaded-text-center",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageContact = () => {
  var images = [
    {
      url: "/img/fullscreen/contact_header_01.jpg",
      text: "Contact",
      class: "img-loaded-text-center",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageHighlights = () => {
  var images = [
    {
      url: "/img/fullscreen/pic_highlights.jpg",
      text: "Highlights",
      class: "img-loaded-text-center",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageCollaborations = () => {
  var images = [
    {
      url: "/img/fullscreen/collaborations_header_01.jpg",
      text: "Collaborations",
      class: "img-loaded-text-center",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageTripsWithMe = () => {
  var images = [
    {
      url: "/img/fullscreen/couples_sessions_header_01.jpg",
      text: "See your unique moments through my lens!",
      class: "img-loaded-text-center opacity45",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageTravel = () => {
  var images = [
    {
      url: "/img/fullscreen/travel_header_01.jpg",
      text: "In a world where you can be anything, be kind.",
      class: "img-loaded-text-top-right opacity40",
    },
    {
      url: "/img/fullscreen/travel_header_02.jpg",
      text: "Never stop exploring",
      class: "img-loaded-text-center opacity45",
    },
    {
      url: "/img/fullscreen/travel_header_03.jpg",
      text: "Travel is like knowledge. The more you see the more you know you haven't seen.",
      class: "img-loaded-text-top-right opacity40",
    },
    {
      url: "/img/fullscreen/travel_header_04.jpg",
      text: "It feels good to be lost in the right direction.",
      class: "img-loaded-text-top-right opacity45",
    },
    {
      url: "/img/fullscreen/travel_header_05.jpg",
      text: "Never lose the sense of wonder.",
      class: "img-loaded-text-top-right opacity45",
    },
    {
      url: "/img/fullscreen/travel_header_06.jpg",
      text: "Wherever you are, be all there.",
      class: "img-loaded-text-top-center opacity45",
    },
    {
      url: "/img/fullscreen/travel_header_07.jpg",
      text: "There's no such place as faraway.",
      class: "img-loaded-text-top-right opacity40",
    },
    {
      url: "/img/fullscreen/travel_header_08.jpg",
      text: "A journey of a thousands miles begins with a single step.",
      class: "img-loaded-text-top-left opacity40",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageDance = () => {
  var images = [
    {
      url: "/img/fullscreen/dance_header_01.jpg",
      text: "Dancing is like dreaming with your feet.",
      class: "img-loaded-text-top-left opacity40",
    },
    {
      url: "/img/fullscreen/dance_header_02.jpg",
      text: "Don't walk, dance.",
      class: "img-loaded-text-top-center opacity40",
    },
    {
      url: "/img/fullscreen/dance_header_03.jpg",
      text: "Dance is freedom and connection.",
      class: "img-loaded-text-top-right opacity60",
    },
    {
      url: "/img/fullscreen/dance_header_04.jpg",
      text: "Life is better when you dance.",
      class: "img-loaded-text-top-left opacity45",
    },
    {
      url: "/img/fullscreen/dance_header_05.jpg",
      text: "Dancing is the closest thing to magic.",
      class: "img-loaded-text-top-left opacity60",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export const getFullSizeImageTravelBottom = () => {
  const images = [
    {
      url: "/img/fullscreen/bottom01.jpg",
      ratio: "49.55",
      class: "",
    },
  ];
  return images[0];
};

export const getFullSizeImageDanceBottom = () => {
  const images = [
    {
      url: "/img/fullscreen/bottom01.jpg",
      ratio: "49.55",
      class: "",
    },
  ];
  return images[0];
};

//My story photos
export const getPhotosForCollage = (index) => {
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

export const getPhotosForTravelWithMe = (index) => {
  const image = [
    ["/img/photos/travelwithme/pic1.jpg", "/img/photos/travelwithme/pic2.jpg"],
    ["/img/photos/travelwithme/pic3.jpg", "/img/photos/travelwithme/pic4.jpg"],
    ["/img/photos/travelwithme/pic5.jpg", "/img/photos/travelwithme/pic6.jpg"],
    ["/img/photos/travelwithme/pic7.jpg", "/img/photos/travelwithme/pic8.jpg"],
    ["/img/photos/travelwithme/pic9.jpg", "/img/photos/travelwithme/pic10.jpg"],
  ];
  return image[index];
};

export const getPhotosForCollaborationsDance = () => {
  return [
    "/img/photos/collaborations_dance/001.jpg",
    "/img/photos/collaborations_dance/002.jpg",
    "/img/photos/collaborations_dance/003.jpg",
    "/img/photos/collaborations_dance/004.jpg",
  ];
};

export const getPhotosForCollaborationsBaby = () => {
  return [
    "/img/photos/collaborations_baby/001.jpg",
    "/img/photos/collaborations_baby/002.jpg",
    "/img/photos/collaborations_baby/003.jpg",
    "/img/photos/collaborations_baby/004.jpg",
  ];
};

export const getPhotosForCollaborationsEvents = () => {
  return [
    "/img/photos/collaborations_events/001.jpg",
    "/img/photos/collaborations_events/002.jpg",
    "/img/photos/collaborations_events/003.jpg",
    "/img/photos/collaborations_events/004.jpg",
  ];
};

export const getPhotosForCollaborationsIndoors = () => {
  return [
    "/img/photos/collaborations_indoors/001.jpg",
    "/img/photos/collaborations_indoors/002.jpg",
    "/img/photos/collaborations_indoors/003.jpg",
    "/img/photos/collaborations_indoors/004.jpg",
  ];
};

export const getPhotosForCollaborationsPets = () => {
  return [
    "/img/photos/collaborations_pets/001.jpg",
    "/img/photos/collaborations_pets/002.jpg",
    "/img/photos/collaborations_pets/003.jpg",
    "/img/photos/collaborations_pets/004.jpg",
  ];
};

export const getPhotosForCollaborationsPortraits = () => {
  return [
    "/img/photos/collaborations_portraits/001.jpg",
    "/img/photos/collaborations_portraits/002.jpg",
    "/img/photos/collaborations_portraits/003.jpg",
    "/img/photos/collaborations_portraits/004.jpg",
  ];
};

export const getPhotosForCollaborationsProducts = () => {
  return [
    "/img/photos/collaborations_products/001.jpg",
    "/img/photos/collaborations_products/002.jpg",
    "/img/photos/collaborations_products/003.jpg",
    "/img/photos/collaborations_products/004.jpg",
  ];
};

export const getPhotosForCollaborationsTrash = () => {
  return [
    "/img/photos/collaborations_trash/001.jpg",
    "/img/photos/collaborations_trash/002.jpg",
    "/img/photos/collaborations_trash/003.jpg",
    "/img/photos/collaborations_trash/004.jpg",
  ];
};

export const getPhotosForAdventureProducts = () => {
  return [
    "/img/photos/collaborations_adventure/001.jpg",
    "/img/photos/collaborations_adventure/002.jpg",
    "/img/photos/collaborations_adventure/003.jpg",
    "/img/photos/collaborations_adventure/004.jpg",
  ];
};

export const getAlbumImageURL = (article, imageName) => {
  var string = ("/img" + article.identifier + imageName).replace(" ", "%20");
  return string;
};

export const HighlightsAlbums = [
  {
    type: "Highlights",
    name: "Nature",
    href: "nature",
    description: "",
    identifier: "/Highlights/nature/",
  },
  {
    type: "Highlights",
    name: "City",
    href: "city",
    description: "",
    identifier: "/Highlights/city/",
  },
  {
    type: "Highlights",
    name: "Events",
    href: "events",
    description: "",
    identifier: "/Highlights/events/",
  },
  {
    type: "Highlights",
    name: "People",
    href: "people",
    description: "",
    identifier: "/Highlights/people/",
  },
  {
    type: "Highlights",
    name: "Moments",
    href: "moments",
    description: "",
    identifier: "/Highlights/moments/",
  },
  {
    type: "Highlights",
    name: "Animals",
    href: "animals",
    description: "",
    identifier: "/Highlights/animals/",
  },
  {
    type: "Highlights",
    name: "My adventures",
    href: "myadventures",
    description: "Just a couple of moments from my life caught on camera..",
    identifier: "/Highlights/myadventures/",
  },
  {
    type: "Highlights",
    name: "Geena",
    href: "geena",
    description: "",
    identifier: "/Highlights/geena/",
  },
];

export const getHighlightAlbumDetails = (albumName) => {
  const highlight = HighlightsAlbums.filter(
    (article) => article.href === albumName
  )[0];
  const recommended = getHighlightsRecommended(albumName);

  return { highlight, recommended, next: [], prev: [] };
};

export const getHighlightsAlbums = (albumName) => {
  if (albumName !== undefined) {
    return HighlightsAlbums.filter((article) => article.href === albumName);
  }
  return HighlightsAlbums.slice(0, HighlightsAlbums.length - 2);
};

export const getHighlightsRecommended = (albumName) => {
  return HighlightsAlbums.filter(
    (article) => article.href !== albumName && article.name !== "Geena"
  ).slice(0, 6);
};

export function contentScroll(screenHeight) {
  window.scrollTo({
    top: screenHeight,
    behavior: "smooth",
  });
}
