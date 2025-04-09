import { PATH_LOGO } from "helpers/const";

export interface Organizer {
  name: string;
  facebook: string;
  email: string;
}

export interface EventLinks {
  facebook: string;
  website: string;
}

export interface DanceEvent {
  name: string;
  subtype: string;
  logo: string;
  organizers: Organizer[];
  links: EventLinks;
}

export const danceEvents: DanceEvent[] = [
  {
    subtype: "Chillzouk",
    name: "Chillzouk Holidays",
    logo: PATH_LOGO + "ChillZouk.png",
    organizers: [
      {
        name: "Hoi Ung",
        facebook: "https://www.facebook.com/domi.mroz2",
        email: "",
      },
      {
        name: "Dominika Mróz",
        facebook: "https://www.facebook.com/hoisenhung",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/chillzouk",
      website: "https://chillzouk.com",
    },
  },
  {
    subtype: "Danusia",
    name: "Zouk Delight",
    logo: PATH_LOGO + "DanusiaDebska.png",
    organizers: [
      {
        name: "Danusia Debska",
        facebook: "https://www.facebook.com/danusia.debska",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "",
    },
  },
  {
    subtype: "PZC",
    name: "Prague Zouk Congress",
    logo: PATH_LOGO + "PZC.png",
    organizers: [
      {
        name: "Carlos da Silva",
        facebook: "https://www.facebook.com/carlosdasilvazouk",
        email: "info@praguezoukcongress.com",
      },
      {
        name: "Fernanda da Silva",
        facebook: "https://www.facebook.com/nandazouk",
        email: "info@praguezoukcongress.com",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/praguezoukcongress",
      website: "https://www.praguezoukcongress.com",
    },
  },
  {
    subtype: "Tantra",
    name: "Tantra Into Zouk",
    logo: PATH_LOGO + "TantraIntoZouk.png",
    organizers: [
      {
        name: "Roger van Doggenaar",
        facebook: "https://www.facebook.com/020.roger",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/tantraintozouk",
      website: "",
    },
  },
  {
    subtype: "WZF",
    name: "Warsaw Zouk Festival",
    logo: PATH_LOGO + "WarsawZoukFestival.png",
    organizers: [
      {
        name: "Zuzanna Sadowska",
        facebook: "https://www.facebook.com/zuzanna.sadowska.16",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/WarsawZoukFestival",
      website: "https://zoukfestival.pl",
    },
  },
  {
    subtype: "ZoukEmotion",
    name: "Zouk Emotion",
    logo: PATH_LOGO + "ZoukEmotion.png",
    organizers: [
      {
        name: "Monica Dumitrescu",
        facebook: "https://www.facebook.com/monica.dumitrescu.90",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/zoukemotionbucharest",
      website: "",
    },
  },
  {
    subtype: "ZoukVienna",
    name: "Zouk Vienna",
    logo: PATH_LOGO + "ZoukVienna.png",
    organizers: [
      {
        name: "Guido Aschenbrenner",
        facebook: "https://www.facebook.com/guido.zouk.vienna",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/Zouk.Vienna",
      website: "http://www.zouk-vienna.at",
    },
  },
  {
    subtype: "Zoukdreams",
    name: "Zoukdreams",
    logo: PATH_LOGO + "Zoukdreams.png",
    organizers: [
      {
        name: "Johannes Danenmu",
        facebook: "https://www.facebook.com/zoukerro",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/zoukdreams",
      website: "http://www.zoukdreams.nl",
    },
  },
  {
    subtype: "Zoukfever",
    name: "Zoukfever",
    logo: PATH_LOGO + "Zoukfever.png",
    organizers: [
      {
        name: "Ronaldo Magalhães De Aguiar",
        facebook: "https://www.facebook.com/ronaldodance",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/Zouk-Fever-Budapest-317864515087343",
      website: "",
    },
  },
  {
    subtype: "Zoukisoara",
    name: "Zoukisoara",
    logo: PATH_LOGO + "Zoukisoara.png",
    organizers: [
      {
        name: "Andreas Stuhlmüller",
        facebook: "https://www.facebook.com/andyyblue",
        email: "",
      },
      {
        name: "Monica Stuhlmuller",
        facebook: "https://www.facebook.com/apocripha.dance",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/ZOUKisoaraEvents",
      website: "https://zoukisoara.ro",
    },
  },
  {
    subtype: "Zoukstyles",
    name: "Zoukstyles",
    logo: PATH_LOGO + "ZoukStyles.png",
    organizers: [
      {
        name: "Holger Weber",
        facebook: "https://www.facebook.com/holger.weber.3388",
        email: "",
      },
    ],
    links: {
      facebook:
        "https://www.facebook.com/Zoukstyles-by-Zoukernatural-856884577986736",
      website: "https://zoukernatural.de",
    },
  },
  {
    subtype: "Zouktime",
    name: "Zouktime",
    logo: PATH_LOGO + "Zouktime.png",
    organizers: [
      {
        name: "Pavla Lužná",
        facebook: "https://www.facebook.com/pluzna",
        email: "",
      },
      {
        name: "Luděk Lužný",
        facebook: "https://www.facebook.com/ludek.luzny",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/zouktimeevents",
      website: "https://www.danceholiday.cz",
    },
  },
  {
    subtype: "ZoukLovers",
    name: "ZoukLovers",
    logo: PATH_LOGO + "Zouklovers.png",
    organizers: [
      {
        name: "Rene",
        facebook: "https://www.facebook.com/profile.php?id=100009131136936",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "https://www.danceholiday.cz",
    },
  },
  {
    subtype: "Gilson",
    name: "Brazilian Dance Holiday",
    logo: "",
    organizers: [
      {
        name: "Gilson Damasco",
        facebook: "https://www.facebook.com/gilson.damasco.3",
        email: "",
      },
      {
        name: "Josy Borges",
        facebook: "https://www.facebook.com/josy.borges",
        email: "",
      },
      {
        name: "Olaya Dende",
        facebook: "https://www.facebook.com/olaya.dende",
        email: "",
      },
      {
        name: "Rishi",
        facebook: "https://www.facebook.com/rishi.urbanlambada",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "http://www.braziliandanceholiday.com",
    },
  },
  {
    subtype: "ZoukErfurt",
    name: "Erfurt New Year's",
    logo: PATH_LOGO + "ZoukErfurt.png",
    organizers: [
      {
        name: "Stefan Bauroth",
        facebook: "https://www.facebook.com/diana.keucher",
        email: "",
      },
      {
        name: "Diana Keucher",
        facebook: "https://www.facebook.com/stefan.bauroth.3",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "",
    },
  },
  {
    subtype: "MartinS",
    name: "Workshops in Jiříkovice",
    logo: "",
    organizers: [
      {
        name: "Martin Smoldas",
        facebook: "https://www.facebook.com/NoXHunter",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "",
    },
  },
  {
    subtype: "Ronaldo",
    name: "Zoukfever",
    logo: "",
    organizers: [
      {
        name: "Ronaldo Magalhães De Aguiar",
        facebook: "https://www.facebook.com/ronaldodance",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/Zouk-Fever-Budapest-317864515087343",
      website: "",
    },
  },
  {
    subtype: "Activat",
    name: "Activa't Barcelona",
    logo: PATH_LOGO + "Activat.png",
    organizers: [
      {
        name: "Xavi Martinez",
        facebook: "https://www.facebook.com/xavi.zouk",
        email: "",
      },
      {
        name: "Laura Español",
        facebook: "https://www.facebook.com/laurabcnzouk",
        email: "",
      },
      {
        name: "Nuria Español",
        facebook: "https://www.facebook.com/nuriaxezoukbcn",
        email: "",
      },
      {
        name: "Eduard Garcia Gomez",
        facebook: "https://www.facebook.com/eduard.garciagomez",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/Laura-Xavi-Barcelona-379800575471230",
      website: "",
    },
  },
  {
    subtype: "Merge",
    name: "Merge Dance Studio",
    logo: PATH_LOGO + "Merge.png",
    organizers: [
      {
        name: "April Mengqi Yu",
        facebook: "https://www.facebook.com/aprilmengqi.yu",
        email: "",
      },
      {
        name: "Andyfred Olivier Lecorps",
        facebook: "https://www.facebook.com/andyfred.lecorps",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/andyaprilmerge",
      website: "https://www.mergedanceculture.com",
    },
  },
  {
    subtype: "PhuongTrangZouk",
    name: "Phuong & Trang Zouk",
    logo: "",
    organizers: [
      {
        name: "Hoai Phuong",
        facebook: "https://www.facebook.com/HoaiPhuongVu",
        email: "",
      },
      {
        name: "Pham Huyen Trang",
        facebook: "https://www.facebook.com/pham.h.trang.33",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/PhuongTrangBraZouk",
      website: "",
    },
  },
  {
    subtype: "Cheryl",
    name: "Singapore Brazilian Zouk Festival",
    logo: PATH_LOGO + "Cheryl.png",
    organizers: [
      {
        name: "Cheryl Qiao Rou",
        facebook: "https://www.facebook.com/cherylwudance",
        email: "",
      },
      {
        name: "William Teixeira Diboa",
        facebook: "https://www.facebook.com/william.teixeira.9083",
        email: "",
      },
      {
        name: "Paloma Alves",
        facebook: "https://www.facebook.com/paloma.alvesii",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/Zouksensationsingapore/",
      website: "",
    },
  },
  {
    subtype: "PZM",
    name: "Prague Zouk Marathon",
    logo: PATH_LOGO + "PZM.png",
    organizers: [
      {
        name: "Zdeněk Jahoda Brož",
        facebook: "https://www.facebook.com/zdenek.j.broz",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/groups/PragueZoukMarathon",
      website: "",
    },
  },
  // NEW
  {
    subtype: "KamillionArTs",
    name: "Kamillion ArTs",
    logo: PATH_LOGO + "KamillionArts.png",
    organizers: [
      {
        name: "Kamacho",
        facebook: "https://www.facebook.com/Kamachozouk",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100031641231292",
      website: "",
    },
  },
  {
    subtype: "Ramalhos",
    name: "Ramalho's Zouk Festival",
    logo: PATH_LOGO + "RZF.png",
    organizers: [
      {
        name: "Renato Ramalho",
        facebook: "https://www.facebook.com/renato.ramalho.12",
        email: "",
      },
      {
        name: "Rachel Ramalho",
        facebook: "https://www.facebook.com/rachel.ramalho.3",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/ramalhoszoukfestival",
      website: "",
    },
  },
  {
    subtype: "Renata",
    name: "Núcleo de Dança Renata Peçanha",
    logo: PATH_LOGO + "NucleoDeDancaRenataPecanha.png",
    organizers: [
      {
        name: "Renata Peçanha",
        facebook: "https://www.facebook.com/renata.pecanhaii",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/nucleorenatapecanha",
      website: "https://renatapecanha.wixsite.com/nucleodedanca",
    },
  },
  {
    subtype: "ZoukMX",
    name: "ZoukMX",
    logo: PATH_LOGO + "ZoukMX.png",
    organizers: [
      {
        name: "Joe Sandoval",
        facebook: "https://www.facebook.com/sandoval.joe",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/zoukmx",
      website: "",
    },
  },
  {
    subtype: "ZoukDiverse",
    name: "Zouk Diverse",
    logo: PATH_LOGO + "ZoukDiverse.png",
    organizers: [
      {
        name: "Daniel Pytel",
        facebook: "https://www.facebook.com/daniel.pytel",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/ZoukDiverse",
      website: "",
    },
  },
  {
    subtype: "Ocho",
    name: "Zouk Energy Boston",
    logo: "",
    organizers: [
      {
        name: "Ocho Jan",
        facebook: "https://www.facebook.com/ochojan",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/boszouk",
      website: "",
    },
  },
  {
    subtype: "FutureZouk",
    name: "Future Zouk Festival",
    logo: PATH_LOGO + "FutureZouk.png",
    organizers: [
      {
        name: "Jacob S. Heiss",
        facebook: "https://www.facebook.com/jacob.s.heiss",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/FutureZouk",
      website: "",
    },
  },
  {
    subtype: "Brandon",
    name: "Zouk Awakening",
    logo: "",
    organizers: [
      {
        name: "Brandon Gonzalez",
        facebook: "https://www.facebook.com/Elskeletu",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "",
    },
  },
  {
    subtype: "Conexao",
    name: "Zouk Conexão Atlanta",
    logo: PATH_LOGO + "ZoukConexao.png",
    organizers: [
      {
        name: "Jose L Hernandez",
        facebook: "https://www.facebook.com/salsa.arte.1",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/Salsazoukbachatak",
      website: "",
    },
  },
  {
    subtype: "Sunset",
    name: "Sunset Zouk Marathon",
    logo: PATH_LOGO + "SunsetZoukMarathon.png",
    organizers: [
      {
        name: "Bruno Miranda",
        facebook: "https://www.facebook.com/purebm",
        email: "",
      },
      {
        name: "Fae Hermann",
        facebook: "https://www.facebook.com/olga.d.hermann",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/sunsetzoukmarathon",
      website: "https://zoukcentralflorida.com",
    },
  },
  {
    subtype: "ZoukFamily",
    name: "Zouk Family",
    logo: PATH_LOGO + "ZoukFamily.png",
    organizers: [
      {
        name: "Sasha Eslami",
        facebook: "https://www.facebook.com/sashaeksa",
        email: "",
      },
      {
        name: "Blanca Dasi",
        facebook: "https://www.facebook.com/blan.qui.161",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/zoukfamilyprofile",
      website: "",
    },
  },
  {
    subtype: "AllThatZouk",
    name: "All That Zouk",
    logo: "",
    organizers: [
      {
        name: "Jorge Peres",
        facebook: "https://www.facebook.com/profile.php?id=100008640880252",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "",
    },
  },
  {
    subtype: "ZoukNeedsYou",
    name: "Zouk Needs You",
    logo: "",
    organizers: [
      {
        name: "Val Clemente",
        facebook: "https://www.facebook.com/val.clemente.1",
        email: "",
      },
      {
        name: "Vanessa Bonilha",
        facebook: "https://www.facebook.com/vanessa.bonilha",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100063616060588",
      website: "",
    },
  },
  {
    subtype: "NeoFlowImmersion",
    name: "Neo & Flow Immersion",
    logo: "",
    organizers: [
      {
        name: "Bruno Barreto",
        facebook: "https://www.facebook.com/arkkanjo",
        email: "",
      },
      {
        name: "Malu Maia",
        facebook: "https://www.facebook.com/malu.maia.902",
        email: "",
      },
      {
        name: "Anna Russa",
        facebook: "https://www.facebook.com/zvezdaomega",
        email: "",
      },
      {
        name: "Mafie Zouker",
        facebook: "https://www.facebook.com/profile.php?id=100063058877955",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/neoandflow",
      website: "",
    },
  },
  {
    subtype: "IZC",
    name: "IZC - International Zouk Congress",
    logo: PATH_LOGO + "IZC.png",
    organizers: [
      {
        name: "David",
        facebook: "https://www.facebook.com/daviddeywyllazoukI",
        email: "",
      },
      {
        name: "Deywylla",
        facebook: "https://www.facebook.com/daviddeywyllazoukI",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100063616060588",
      website: "",
    },
  },
  {
    subtype: "BrasilSambaCongress",
    name: "Brasil Samba Congress",
    logo: "",
    organizers: [
      {
        name: "Rodrigo Marques",
        facebook: "https://www.facebook.com/rodrigo.marques.7798",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "https://www.instagram.com/brasilsambacongress/",
    },
  },
  {
    subtype: "CZC",
    name: "Canada Zouk Congress",
    logo: PATH_LOGO + "czc.png",
    organizers: [
      {
        name: "Darius Zi",
        facebook: "https://www.facebook.com/dariustoronto",
        email: "",
      },
      {
        name: "Laura Riva",
        facebook: "https://www.facebook.com/ZoukMeInToronto",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/canadazouk",
      website: "https://canadazouk.com/",
    },
  },
  {
    subtype: "YoZouk",
    name: "YoZouk Congress",
    logo: PATH_LOGO + "YoZouk.png",
    organizers: [
      {
        name: "Joe Sandoval",
        facebook: "https://www.facebook.com/sandoval.joe",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/yozouknewyork",
      website: "https://www.nyzouk.com",
    },
  },
  {
    subtype: "ForroVsZouk",
    name: "Forro Vs Zouk",
    logo: PATH_LOGO + "ForroVsZouk.png",
    organizers: [
      {
        name: "Fabricio Durães",
        facebook: "https://www.facebook.com/fabrricio.barbosa",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "https://www.instagram.com/forrovszouk/",
    },
  },
  {
    subtype: "Forzouk",
    name: "Forzouk",
    logo: PATH_LOGO + "Forzouk.png",
    organizers: [
      {
        name: "Karina Batista (DJ Kakah)",
        facebook: "https://www.facebook.com/kakahbatsta",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "https://www.instagram.com/forzouk/",
    },
  },
  {
    subtype: "JaimeAroxa",
    name: "Workshops by Jaime Aroxa",
    logo: PATH_LOGO + "JaimeAroxa.png",
    organizers: [
      {
        name: "JaimeAroxa",
        facebook: "https://www.facebook.com/jaimearoxa",
        email: "",
      },
    ],
    links: {
      facebook: "",
      website: "",
    },
  },
  {
    subtype: "LetsFlow",
    name: "Let's Flow",
    logo: PATH_LOGO + "letsflow.png",
    organizers: [
      {
        name: "Bruno Barreto",
        facebook: "https://www.facebook.com/arkkanjo",
        email: "",
      },
      {
        name: "Malu Maia",
        facebook: "https://www.facebook.com/malu.maia.902",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/letsflowfestival",
      website: "",
    },
  },
  {
    subtype: "NeoZoukFestival",
    name: "NeoZouk Festival",
    logo: PATH_LOGO + "NeoZoukFestival.png",
    organizers: [
      {
        name: "Anna Russa",
        facebook: "https://www.facebook.com/zvezdaomega",
        email: "",
      },
      {
        name: "Mafie Zouker",
        facebook: "https://www.facebook.com/profile.php?id=100063058877955",
        email: "",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61551892541913",
      website: "",
    },
  },
];

export const collaborativeDanceEvents = danceEvents.filter(
  (event) => event.subtype !== "PZM" && event.subtype !== "ForroVsZouk",
);

export const getDanceEvent = (subtype: string): DanceEvent | undefined => {
  return danceEvents.find((event) => {
    return event.subtype === subtype;
  });
};

export const getDanceEventMeta = (event: DanceEvent) => {
  const organizerString = event.organizers.map((organizer) => organizer.name);
  return organizerString.join();
};
