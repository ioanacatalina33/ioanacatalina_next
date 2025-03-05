import { FaFacebook } from "react-icons/fa6";
import { TbCircleLetterIFilled } from "react-icons/tb";
import { SiDreamstime } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Lia500Px } from "react-icons/lia";
import { IoLogoFlickr } from "react-icons/io5";

import { SiAdobe } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { AiFillYahoo } from "react-icons/ai";

import { CgShutterstock } from "react-icons/cg";
import { TbBrandNationalGeographic } from "react-icons/tb";

import { ReactElement } from "react";

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

  Linkedin = "Linkedin",
  Youtube = "Youtube",
}

export interface ILinkData {
  name: string;
  url: string;
  classImgA: string;
  classLinkA: string;
  iconOff: ReactElement;
  iconOn: ReactElement;
}

export function getLinkData(type: LinkType): ILinkData {
  switch (type) {
    case LinkType.Gmail:
      return {
        name: "Gmail",
        url: "mailto:ioana.echim@gmail.com",
        classImgA: "link-photo-others",
        classLinkA: "link-underlined",
        iconOff: (
          <CgMail size={25} color={"#333333"} aria-label={"Google Email"} />
        ),
        iconOn: (
          <CgMail size={25} color={"#333333"} aria-label={"Google Email"} />
        ),
      };
    case LinkType.Yahoo:
      return {
        name: "Yahoo",
        url: "mailto:ioana_catalina_33@yahoo.com",
        classImgA: "link-photo-shutterstock",
        classLinkA: "link-shutterstock",
        iconOff: (
          <AiFillYahoo size={25} color={"#333333"} aria-label={"Yahoo Email"} />
        ),
        iconOn: (
          <AiFillYahoo size={25} color={"#de0000"} aria-label={"Yahoo Email"} />
        ),
      };
    case LinkType.Instagram:
      return {
        name: "Instagram",
        url: "https://www.instagram.com/ioana.catalina.e",
        classImgA: "link-photo-instagram",
        classLinkA: "link-instagram",
        iconOff: (
          <RiInstagramFill
            size={25}
            color={"#333333"}
            aria-label={"Instagram"}
          />
        ),
        iconOn: (
          <RiInstagramFill
            size={25}
            color={"#d32297"}
            aria-label={"Instagram"}
          />
        ),
      };

    case LinkType.FbPage:
      return {
        name: "Facebook Profile",
        url: "https://www.facebook.com/catalina.i.e.3",
        classImgA: "link-photo-facebook",
        classLinkA: "link-facebook",
        iconOff: (
          <FaFacebook size={23} color={"#333333"} aria-label={"Facebook"} />
        ),
        iconOn: (
          <FaFacebook size={23} color={"#3b5998"} aria-label={"Facebook"} />
        ),
      };

    case LinkType.FbPageZouk:
      return {
        name: "Photography Page",
        url: "https://www.facebook.com/IoanaCatalinaBrazilianZouk",
        classImgA: "link-photo-facebook",
        classLinkA: "link-facebook",
        iconOff: (
          <FaFacebook
            size={23}
            color={"#333333"}
            aria-label={"Photography page"}
          />
        ),
        iconOn: (
          <FaFacebook
            size={23}
            color={"#3b5998"}
            aria-label={"Photography page"}
          />
        ),
      };

    case LinkType.NationalGeogrpahic:
      return {
        name: "National Geographic",
        url: "https://yourshot.nationalgeographic.com/profile/1275781/",
        classImgA: "link-photo-nationalg",
        classLinkA: "link-nationalg",
        iconOff: (
          <TbBrandNationalGeographic
            size={25}
            color={"#333333"}
            aria-label={"National Geographic"}
          />
        ),
        iconOn: (
          <TbBrandNationalGeographic
            size={25}
            color={"#f3e300"}
            aria-label={"National Geographic"}
          />
        ),
      };
    case LinkType.PX500:
      return {
        name: "500Px",
        url: "https://500px.com/IoanaCatalinaE",
        classImgA: "link-photo-underlined",
        classLinkA: "link-underlined",
        iconOff: (
          <Lia500Px size={25} color={"#333333"} aria-label={"500px profile"} />
        ),
        iconOn: (
          <Lia500Px size={25} color={"#888888"} aria-label={"500px profile"} />
        ),
      };
    case LinkType.Flickr:
      return {
        name: "Flickr",
        url: "https://www.flickr.com/photos/ioana_e",
        classImgA: "link-photo-flikr",
        classLinkA: "link-flikr",
        iconOff: (
          <IoLogoFlickr
            size={25}
            color={"#333333"}
            aria-label={"Flickr profile"}
          />
        ),
        iconOn: (
          <IoLogoFlickr
            size={25}
            color={"#d32265"}
            aria-label={"Flicker profile"}
          />
        ),
      };
    case LinkType.Shutterstock:
      return {
        name: "Shutterstock",
        url: "https://www.shutterstock.com/g/ioanacatalinae",
        classImgA: "link-photo-shutterstock",
        classLinkA: "link-shutterstock",
        iconOff: (
          <CgShutterstock
            size={25}
            color={"#333333"}
            aria-label={"Shutterstock"}
          />
        ),
        iconOn: (
          <CgShutterstock
            size={25}
            color={"#dc0909"}
            aria-label={"Shutterstock"}
          />
        ),
      };
    case LinkType.IStock:
      return {
        name: "IStock",
        url: "https://www.istockphoto.com/es/portfolio/ioanacatalinae",
        classImgA: "link-photo-underlined",
        classLinkA: "link-underlined",
        iconOff: (
          <TbCircleLetterIFilled
            size={25}
            color={"#333333"}
            aria-label={"IStock"}
          />
        ),
        iconOn: (
          <TbCircleLetterIFilled
            size={25}
            color={"#888888"}
            aria-label={"IStock"}
          />
        ),
      };
    case LinkType.AdobeStock:
      return {
        name: "AdobeStock",
        url: "https://stock.adobe.com/es/contributor/206273411/icephotography",
        classImgA: "link-photo-adobe",
        classLinkA: "link-adobe",
        iconOff: (
          <SiAdobe size={22} color={"#333333"} aria-label={"Adobe Stock"} />
        ),
        iconOn: (
          <SiAdobe size={22} color={"#ff4674"} aria-label={"Adobe Stock"} />
        ),
      };
    case LinkType.Dreamstime:
      return {
        name: "Dreamstime",
        url: "https://www.dreamstime.com/tophat33_info",
        classImgA: "link-photo-dreamstime",
        classLinkA: "link-dreamstime",
        iconOff: (
          <SiDreamstime size={23} color={"#333333"} aria-label={"Dreamstime"} />
        ),
        iconOn: (
          <SiDreamstime size={23} color={"#248100"} aria-label={"Dreamstime"} />
        ),
      };
    case LinkType.Linkedin:
      return {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ioanacatalina/",
        classImgA: "link-photo-facebook",
        classLinkA: "link-facebook",
        iconOff: (
          <FaLinkedin size={25} color={"#333333"} aria-label={"Linkedin"} />
        ),
        iconOn: (
          <FaLinkedin size={25} color={"#3b5998"} aria-label={"Linkedin"} />
        ),
      };
    case LinkType.Youtube:
      return {
        name: "Youtube",
        url: "https://www.youtube.com/@IoanaCatalinaE",
        classImgA: "link-photo-shutterstock",
        classLinkA: "link-shutterstock",
        iconOff: (
          <FaYoutube size={25} color={"#333333"} aria-label={"Youtube"} />
        ),
        iconOn: (
          <FaYoutube size={25} color={"#de0000"} aria-label={"Youtube"} />
        ),
      };
  }
}
