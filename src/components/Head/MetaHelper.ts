import {
  articleCover,
  getFileDateTitleMonthString,
  getFileDateTitleMonthStringWithoutDay,
  getLocationsWithComa,
} from "helpers";
import { getDanceEvent, getDanceEventMeta } from "staticModel";
import { AlbumDetails, BlogPostCard } from "types";

const albumTravelDefaultKeywords =
  "Travel, wanderlust, best, photos, photograph, pics, nomad, life, photographer, holidays, vacations, trips, amazing, beautiful, places, locations, famous, destinations, spot, views, adventures";
const albumTravelDefaultDescription = "";

const albumDanceDefaultKeywords =
  "brazilian, zouk, lambazouk, events, festivals, dance, photos, latin, workshops, teachers, europe, brazil, photographs, photography, best, amazing, DJs, Kakah, dancers, lambada, traditional, modern, mzouk, soulzouk, neozouk, flowzouk, organizers";
const albumDanceDefaultDescription =
  "Photos of Brazilian Zouk and Lambazouk Festivals in Europe and all over the world.";

const albumHighlightsDefaultKeywords =
  "travel, wanderlust, best, photos, photograph, pics, photography, portfolio, photographer, passion, hobby, artist, landscape, travel";
const albumHighlightsDefaultDescription =
  "Photographer artist, best photos that I took along the years. Portfolio";

export interface MetaData {
  title: string;
  keywords: string;
  description: string;
  ogimage: string;
  ogdescription?: string;
  ogtitle?: string;
  h1?: string;
  ogtype?: string;
  author?: string;
}

export function getMetaDefault(): MetaData {
  return {
    title: "Ioana Catalina E. Photography",
    keywords:
      "best, photography, photos, pics, amazing, awesome, beautiful, instagram, insta, moments, photographer, portofolio, portfolio, trips, vacations, holidays, spots, photogenic",
    description:
      "World through my lenses: Capturing moments that inspire a love for our planet.",
    ogimage: "/img/Home/meta_home.jpg",
    ogdescription:
      "World through my lenses: Capturing moments that inspire a love for our planet.",
    h1: "World through my lenses: Capturing moments that inspire a love for our planet",
  };
}

export function getMetaForTravel(): MetaData {
  return {
    title: "Travel | Ioana Catalina E. Photography",
    keywords:
      "Travel, wanderlust, best, photos, photograph, pics, nomad, life, photographer, holidays, vacations, trips, amazing, beautiful, places, locations, famous, destinations, spot, views, adventures, awesome, city, break, nature, landscape, cityscape, popular, travelers, Europe, United States, and Africa: Spain, France, Italy, Switzerland, Germany, Croatia, Portugal, Norway, California, Lost Angeles, San Francisco, Las Vegas, Romania, Netherlands, Sweden, Austria, Poland, Czech Republic, ",
    description:
      "A journey of a thousand miles begins with a single step. Album photos of my travels around the world.",

    ogimage: "/img/Home/travel.jpg",
    ogdescription:
      "A journey of a thousand miles begins with a single step. Album photos of my travels around the world.",
    h1: "Travel, city, nature, landscape, hiking photography all over the world",
  };
}

export function getMetaForDance(): MetaData {
  return {
    title: "Brazilian Zouk/Lambazouk Festivals | Ioana Catalina E. Photography",
    keywords:
      "brazilian, zouk, lambazouk, events, festivals, dance, photos, latin, workshops, teachers, europe, brazil, photographs, photography, best, amazing, DJs, Kakah, dancers, lambada, traditional, modern, mzouk, soulzouk, neozouk, flowzouk, organizers, warsaw, chillzouk, hoi, ung, dominika, Mroz, poland, zouktime, pavla, danusia, debska, krakow, pzc, congress, carlos, da silva, fernanda, tantra, into, Roger, Doggenaar, Amsterdam, Netherlands, Holland, WZF, Zuzanna, Sadowska, Zoukemotion, Monica, Dumitrescu, Zoukvienna, Guido, Aschenbrenner, Zoukdreams, Johannes, Danenmu, Zoukfever, Ronaldo, Magalhaes, Zouksoara, Andreas, Monica, Stuhlmuller, Timisoara, Bucharest, Romania, Zoukstyles, Holger, Weber, Bonn, Germany, Zoulovers, Rene, Hague, Salou, Barcelona, Spain, Gilson, Damasco, Olaya, Dende, Papagayo, Erfurt, Diana, Keucher, Stefan, Bauroth",
    description:
      "Photos of Brazilian Zouk and Lambazouk Festivals in Europe and all over the world. I am a dance photographer catching amazing moments of the best events with great DJs, teachers, dancers of this latin dance that comes from Lambada, Brazil. Types : Traditional, Lamba, Modern, Mzouk, Soulzouk, Neozouk and Flowzouk. Organizers such as: Warsaw Zouk Festival in Poland, Zouktime, Brno, Czech Republic, Zoukdreams, Tantra into Zouk, Amsterdam, Netherlands.",

    ogimage: "/img/Home/dance.jpg",
    ogdescription:
      "Brazilian Zouk and Lambazouk festivals and events I've been photographing over the years.",
    h1: "Brazilian Zouk Dance events all over the world",
  };
}

export function getMetaForHighlights(): MetaData {
  return {
    title: "Highlights & Portfolio | Ioana Catalina E. Photography",
    keywords:
      "portfolio, artist, best, famous, amazing, photographs, portofolio, city, landscape, nature, hiking, hikes, mountains, sea, ocean, sunstes,sunrises, europe, portraits, moments, time, events, animals",
    description:
      "My best photos, a portfolio from the last years. Famous popular cities and places, stunning sunsets and sunrises over the seas and oceans, hiking, trekking adventures in the mountains, beautiful locations in the middle of nature, wonderlus and dreamy life of a traveler or nomad, portraits of people and animals, dancing, special events, weddings, couples, parties.",

    ogimage: "/img/Home/meta_highlights.jpg",
    ogdescription:
      "View my portfolio of all the greatest photos I took over the years of cities, landscapes, dance events, people, hikes, adventures and priceless moments.",
    h1: "My best photography. nature, city, landscapes, dance, people.",
  };
}

export function getMetaForBlog(): MetaData {
  return {
    title: "Blog | Ioana Catalina E. Photography",
    keywords:
      "blog, posts, my, travel, life, about, thoughts, explore, mind, journey, road trip, trips",
    description: "My first personal blog ",
    ogimage: "/img/Home/meta_blog.jpg",
    ogdescription: "My adventures in words",
    h1: "Blog posts about my journeys",
  };
}

export function getMetaForMap(): MetaData {
  return {
    title: "Map | Ioana Catalina E. Photography",
    keywords:
      "photography, escape, photos, best, places, locations, wanderlust, nomad, life, world, traveler, girl, photographer, freedom, explore, experience, wander, photogenic, views, viewpoint, map, destination, famous, amazing, pics, instagram, instagramable, exotic, by country, city, hikes, adventures",
    description:
      "A map of all my trips around the world. Holidays and trips by location and country. A database with albums of hikes, treks in nature, mountains, city breaks. The wanderlust dynamic life of a dreamy world traveler girl photographer. Amazing photos of famous locations, adventures, sunsets and sunrises.",

    ogimage: "/img/Home/map.jpg",
    ogdescription:
      "A map of all my trips around the world. Holidays and trips by location and country. A database with albums of hikes, treks in nature, mountains, city breaks.",
    h1: "Map of all my trips and destinations.Traveling around the world",
  };
}

export function getMetaForHome(): MetaData {
  return {
    title: "Ioana Catalina E. Photography",
    keywords:
      "photography, photos, environment, travel, wanderlust, nomad, life, world, traveler, girl, photographer, explore, experience, wander, photogenic, brazilian, zouk, dance, festival, events, workshops, brazil, latin, lambazouk, lambada, views, viewpoint, map, destination, famous, amazing, pics, hikes, sustainability, planet, protect",
    description:
      "World through my lenses: Capturing moments that inspire a love for our planet.",

    ogimage: "/img/Home/meta_home.jpg",
    ogdescription:
      "World through my lenses: Capturing moments that inspire a love for our planet.",
    h1: "World through my lenses: Capturing moments that inspire a Love for our Planet",
  };
}

export function getMetaForContact(): MetaData {
  return {
    title: "Contact | Ioana Catalina E. Photography",
    keywords:
      "photography, contact, photos, best, places, locations, wanderlust, nomad, life, world, traveler, girl, photographer, freedom, explore, experience, wander, photogenic, brazilian, zouk, dance, festival, events, workshops, brazil, latin, lambazouk, lambada, collaborations, work, with, me, email, social, media, link, contacts, influencer, freedom, wanderer, globe",
    description:
      "A travel photographer exploring the world and dancing. My contact and portfolio on social media.",

    ogimage: "/img/Home/meta_mystory.jpg",
    ogdescription:
      "Travel photographer in love with the world. Contact me for any details.",
    h1: "How to contact me on email and social media",
  };
}

export function getMetaForCollaborations(): MetaData {
  return {
    title: "Collaborations | Ioana Catalina E. Photography",
    keywords:
      "photography, contact, photos, collaborate, collaborations, business, work, with, me, management, instagram, facebook, spread, product, global, email, social, media, link, contacts, influencer, freedom, wanderer, globe, job, work, best, places, locations, wanderlust, nomad, life, world, traveler, girl, photographer, freedom, explore, experience, wander, photogenic, brazilian, zouk, dance, festival, events, workshops, brazil, latin, lambazouk, lambada,partnership",
    description:
      "Collaborate or work with me. Passionate traveler girl photographer in love with dancing and exploring the world.",

    ogimage: "/img/Home/collaborations.jpg",
    ogdescription:
      "Travel photographer in love with the world. Contact me for any collaborations or details.",
    h1: "Collaborate, work with me. Professional travel photographer",
  };
}

export function getMetaForWorkWithMe(): MetaData {
  return {
    title: "Work with me | Ioana Catalina E. Photography",
    keywords:
      "photography, contact, photos, collaborate, collaborations, business, work, with, me, management, instagram, facebook, spread, product, global, email, social, media, link, contacts, influencer, freedom, wanderer, globe, job, work, best, places, locations, wanderlust, nomad, life, world, traveler, girl, photographer, freedom, explore, experience, wander, photogenic, brazilian, zouk, dance, festival, events, workshops, brazil, latin, lambazouk, lambada,partnership",
    description:
      "Inspiring a deeper connection with nature and promoting a stronger commitment to its preservation.",

    ogimage: "/img/Home/meta_workwithme.jpg",
    ogdescription:
      "Inspiring a deeper connection with nature and promoting a stronger commitment to its preservation.",
    h1: "Collaborate, work with me. Professional travel photographer",
  };
}

export function getMetaForMyStory(): MetaData {
  return {
    title: "My story | Ioana Catalina E. Photography",
    keywords:
      "photography, story, about me, photos, business, social, media, link, daydreaming,  contacts, influencer, freedom, wanderer, globe, best, places, locations, wanderlust, nomad, life, world, traveler, girl, photographer, freedom, explore, experience, wander, photogenic, brazilian, zouk, dance, events, workshops, brazil, latin, lambazouk, lambada,partnership",
    description:
      "About myself and my many passion. I'm a daydreaming traveler photographer in love with dancing and exploring the world.",

    ogimage: "/img/Home/meta_home.jpg",
    ogdescription:
      "About myself and my many passion. I'm a daydreaming travel and dancing events photographer in love with exploring the world.",
    h1: "All about me. My story and biography. My hobbies and passions.",
  };
}

export function getMetaForMyAdventures(): MetaData {
  return {
    title: "My adventures | Ioana Catalina E. Photography",
    keywords:
      "photography, album, photos, pics, about me, adventures, photos, business, social, media, daydreaming, influencer, freedom, wanderer, globe, best, places, locations, wanderlust, nomad, dog shows, life, world, traveler, girl, photographer, freedom, explore, experience, zouk, dance, dancer, latin",
    description:
      "Album with the best photos and memories of my life from my adventures and traveling. I'm a daydreaming traveler photographer in love with dancing and exploring the world.",
    ogimage: "/img/photos/aboutme_adventures/pic4.jpg",

    ogdescription:
      "An album with all my greatest photos of priceless moments of my life from my many adventures and travels.",
    h1: "Photos of my travels and adventures",
  };
}

export function getMetaForGeena(): MetaData {
  return {
    title: "My Golden Retriever, Geena | Ioana Catalina E. Photography",
    keywords:
      "photography, story, golden, retriever, hiking, pet, dog, animal, lover, nature, amazing photos, wanderer, globe, best, places, traveler, girl, photographer, owners, breeders, dog shows, breeding, pedigree, soulcharisma, wizzdom, of, champion, european, romania, camrose time to return, camrose cabus christopher, litter, puppies, westley, swanavly, silver joy",
    description:
      "Photos of my beloved golden Retriever girl, Geena - Wizzdom of Soulcharisma, Geena. She is a pure bred show dog champion, travel and hiking companion and a best friend. Her parents are Swanavly Silver Joy and Camrose Time To Return, son of Camrose Cabus Christopher.",
    ogimage: "/img/Highlights/geena/259_.jpg",
    ogdescription:
      "Photos of my beloved Golden Retriever girl, Geena - Wizzdom of Soulcharisma, Geena.",
    h1: "About my beloved Golden Retriever, Geena",
  };
}

export function getMetaForBlogPost(blog: BlogPostCard): MetaData {
  return {
    title: blog.fields.title,
    keywords: "photography, blog, post, " + blog.fields.keywords.join(","),
    // +  (blog ? blog.keywords.join(",") : ""),
    description: blog.fields.summary.slice(0, 200),
    ogimage: blog.fields.headerPhoto.fields.file.url,
    ogdescription: blog.fields.summary.slice(0, 200),
    ogtype: "article",
  };
}

export function getMetaForTravelAlbum(article: AlbumDetails): MetaData {
  return {
    title: article.name,

    keywords:
      getFullLocation(article) +
      ", " +
      getFileDateTitleMonthString(article.date_start, article.date_end) +
      (article.keywords !== undefined && article.keywords !== ""
        ? "," + article.keywords
        : "") +
      "," +
      albumTravelDefaultKeywords,
    description:
      article.description !== undefined && article.description !== ""
        ? article.description.slice(0, 200)
        : "My best photos from photogenic locations and spots in " +
          getFullLocation(article) +
          " " +
          getFileDateTitleMonthStringWithoutDay(
            article.date_start,
            article.date_end,
          ) +
          (article.metadata ? `. ${article.metadata}. ` : ". ") +
          albumTravelDefaultDescription +
          "Famous popular places for passionate photographers travelers in " +
          article.country,

    ogimage: articleCover(article.identifier),
    ogtype: "article",
  };
}

export function getMetaForDanceAlbum(article: AlbumDetails): MetaData {
  const organizer = getDanceEvent(article.subtype);
  return {
    title:
      getFileDateTitleMonthString(article.date_start, article.date_end) +
      ", " +
      article.name,
    keywords:
      (organizer !== null
        ? organizer.name + ", " + getDanceEventMeta(organizer)
        : article.name) +
      ", " +
      getFullLocation(article) +
      ", " +
      getFileDateTitleMonthString(article.date_start, article.date_end) +
      (article.keywords !== undefined && article.keywords !== ""
        ? ", " + article.keywords
        : "") +
      albumDanceDefaultKeywords,
    description:
      (organizer !== null
        ? organizer.name +
          ". Event organized by " +
          getDanceEventMeta(organizer)
        : article.name) +
      " in " +
      getFullLocation(article) +
      " on " +
      getFileDateTitleMonthStringWithoutDay(
        article.date_start,
        article.date_end,
      ) +
      (article.metadata ? `. ${article.metadata}. ` : ". ") +
      albumDanceDefaultDescription,

    ogimage: articleCover(article.identifier),
    ogtype: "article",
  };
}

export function getMetaForHighlightsAlbum(article: AlbumDetails): MetaData {
  let highlightsInfo;
  switch (article.name) {
    case "myadventures":
      highlightsInfo = getMetaForMyAdventures();
      break;
    case "Geena":
      highlightsInfo = getMetaForGeena();
      break;
    default:
      highlightsInfo = {
        title: "Highlights - " + article.name,
        keywords: article.name + ", " + albumHighlightsDefaultKeywords,
        description: article.name + ". " + albumHighlightsDefaultDescription,
      };
      break;
  }

  return {
    title: article.name,
    keywords: highlightsInfo.keywords,
    description: highlightsInfo.description,
    ogimage: "/img/Highlights/" + article.name + "/cover.jpg",
  };
}

export const getFullLocation = (article: AlbumDetails) => {
  return (
    getLocationsWithComa(article.locations) +
    ", " +
    article.country +
    ", " +
    article.continent
  );
};
