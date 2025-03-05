import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

import { FaLinkedin } from "react-icons/fa";

import { IoLogoFlickr } from "react-icons/io5";
import { Lia500Px } from "react-icons/lia";
import { SiAdobe } from "react-icons/si";

import { CgShutterstock } from "react-icons/cg";

import { ReactIcon } from "../Icon/Icon.style";

import { Flex } from "../Flex/Flex";

interface SocialMediaButtonsProps {
  darkColor?: boolean;
  full?: boolean;
}

export function SocialMediaButtons({
  darkColor,
  full,
}: SocialMediaButtonsProps) {
  return (
    <Flex marginOffset={{ left: -0.3, right: -0.3 }}>
      <ReactIcon
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/ioana.catalina.e"
        darkColor={darkColor}
        aria-label="Instagram"
      >
        <FaInstagram size={30} />
      </ReactIcon>
      <ReactIcon
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/IoanaCatalinaBrazilianZouk"
        darkColor={darkColor}
        aria-label="Facebook page"
      >
        <FaFacebook size={27} />
      </ReactIcon>
      <ReactIcon
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@IoanaCatalinaE"
        darkColor={darkColor}
        aria-label="Youtube"
      >
        <RiYoutubeLine size={35} />
      </ReactIcon>

      {full && (
        <>
          {" "}
          <ReactIcon
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ioanacatalina/"
            darkColor={darkColor}
            aria-label="Linkedin"
          >
            <FaLinkedin size={30} />
          </ReactIcon>
          <ReactIcon
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flickr.com/photos/ioana_e"
            darkColor={darkColor}
            aria-label="Flickr"
          >
            <IoLogoFlickr size={30} />
          </ReactIcon>
          <ReactIcon
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.shutterstock.com/g/IoanaCatalinaE"
            darkColor={darkColor}
            aria-label="Shutterstock"
          >
            <CgShutterstock size={30} />
          </ReactIcon>
          <ReactIcon
            target="_blank"
            rel="noopener noreferrer"
            href="https://stock.adobe.com/es/contributor/206273411/icephotography"
            darkColor={darkColor}
            aria-label="Adobe Stock"
          >
            <SiAdobe size={25} />
          </ReactIcon>
          <ReactIcon
            target="_blank"
            rel="noopener noreferrer"
            href="https://500px.com/ioanacatalinae"
            darkColor={darkColor}
            aria-label="500px"
          >
            <Lia500Px size={33} />
          </ReactIcon>{" "}
        </>
      )}
    </Flex>
  );
}
