export enum LinkType {
  Gmail = "Gmail",
  Yahoo = "Yahoo",

  Instagram = "Instagram",
  FbPage = "FbPage",
  FbPagePhotography = "FbPagePhotography",
  FbPageZouk = "FbPageZouk",

  NationalGeogrpahic = "NationalGeogrpahic",
  PX500 = "500PX",
  Flickr = "Flickr",

  Shutterstock = "Shutterstock",
  IStock = "IStock",
  AdobeStock = "AdobeStock",
  Dreamstime = "Dreamstime",
}

export interface ILinkData {
  name: string;
  url: string;
  src: string;
  classImgA: string;
  classLinkA: string;
}

export function getLinkData(type: LinkType): ILinkData {
  switch (type) {
    case LinkType.Gmail:
      return {
        name: "Gmail",
        url: "mailto:ioana.echim@gmail.com",
        src: "/img/sm_email_on.png",
        classImgA: "link-photo-others",
        classLinkA: "link-underlined",
      };
    case LinkType.Yahoo:
      return {
        name: "Yahoo",
        url: "mailto:ioana_catalina_33@yahoo.com",
        src: "/img/sm_email_on.png",
        classImgA: "link-photo-others",
        classLinkA: "link-underlined",
      };
    case LinkType.Instagram:
      return {
        name: "Instagram",
        url: "https://www.instagram.com/ioana.catalina.e",
        src: "/img/sm_instagram_on.png",
        classImgA: "link-photo-instagram",
        classLinkA: "link-instagram",
      };

    case LinkType.FbPage:
      return {
        name: "Facebook Profile",
        url: "https://www.facebook.com/catalina.i.e.3",
        src: "/img/sm_facebook_on.png",
        classImgA: "link-photo-facebook",
        classLinkA: "link-facebook",
      };

    case LinkType.FbPagePhotography:
      return {
        name: "Photography page",
        url: "https://www.facebook.com/IoanaCatalinaPhotography",
        src: "/img/sm_facebook_on.png",
        classImgA: "link-photo-facebook",
        classLinkA: "link-facebook",
      };

    case LinkType.FbPageZouk:
      return {
        name: "Photography Page",
        url: "https://www.facebook.com/IoanaCatalinaBrazilianZouk",
        src: "/img/sm_facebook_on.png",
        classImgA: "link-photo-facebook",
        classLinkA: "link-facebook",
      };

    case LinkType.NationalGeogrpahic:
      return {
        name: "National Geographic",
        url: "https://yourshot.nationalgeographic.com/profile/1275781/",
        src: "/img/sm_nationalgeographic_on.png",
        classImgA: "link-photo-nationalg",
        classLinkA: "link-nationalg",
      };
    case LinkType.PX500:
      return {
        name: "500Px",
        url: "https://500px.com/IoanaCatalinaE",
        src: "/img/sm_500px_on.png",
        classImgA: "link-photo-others",
        classLinkA: "link-underlined",
      };
    case LinkType.Flickr:
      return {
        name: "Flickr",
        url: "https://www.flickr.com/photos/ioana_e",
        src: "/img/sm_flickr_on.png",
        classImgA: "link-photo-flikr",
        classLinkA: "link-flikr",
      };
    case LinkType.Shutterstock:
      return {
        name: "Shutterstock",
        url: "https://www.shutterstock.com/g/ioanacatalinae",
        src: "/img/sm_shutterstock_on.png",
        classImgA: "link-photo-shutterstock",
        classLinkA: "link-shutterstock",
      };
    case LinkType.IStock:
      return {
        name: "IStock",
        url: "https://www.istockphoto.com/es/portfolio/ioanacatalinae",
        src: "/img/sm_istock_on.png",
        classImgA: "link-photo-others",
        classLinkA: "link-underlined",
      };
    case LinkType.AdobeStock:
      return {
        name: "AdobeStock",
        url: "https://stock.adobe.com/es/contributor/206273411/icephotography",
        src: "/img/sm_adobe_on.png",
        classImgA: "link-photo-adobe",
        classLinkA: "link-adobe",
      };
    case LinkType.Dreamstime:
      return {
        name: "Dreamstime",
        url: "https://www.dreamstime.com/tophat33_info",
        src: "/img/sm_dreamstime_on.png",
        classImgA: "link-photo-dreamstime",
        classLinkA: "link-dreamstime",
      };
  }
}
