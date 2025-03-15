import React, { useEffect, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from "react-share";
import { ReactIcon } from "../Icon/Icon.style";
import {
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa6";
import { Flex } from "../Flex/Flex";

interface ShareButtonsProps {
  facebook?: boolean;
  twitter?: boolean;
  whatsupp?: boolean;
  email?: boolean;
  pinterest?: boolean;
  linkeding?: boolean;
  all?: boolean;
  vertical?: boolean;
}

export function ShareButtons({
  email,
  facebook,
  whatsupp,
  twitter,
  pinterest,
  linkeding,
  all,
  vertical,
}: ShareButtonsProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <Flex justify={(j) => j.center} align={(a) => a.center} column={vertical}>
        {(facebook || all) && (
          <FacebookShareButton url={url}>
            <ReactIcon darkColor={true}>
              <FaFacebook size={35} />
            </ReactIcon>
          </FacebookShareButton>
          // <FacebookShareButton url={url}>
          //   <FacebookIcon
          //     size={38}
          //     className="social-media-modal-buttons"
          //     round={true}
          //   />
          // </FacebookShareButton>
        )}
        {(twitter || all) && (
          <TwitterShareButton url={url}>
            {/* <TwitterIcon
              size={38}
              className="social-media-modal-buttons"
              round={true}
            /> */}
            <ReactIcon darkColor={true}>
              <FaXTwitter size={32} />
            </ReactIcon>
          </TwitterShareButton>
        )}
        {(pinterest || all) && (
          <PinterestShareButton url={url} media={url}>
            <ReactIcon darkColor={true}>
              <FaPinterest size={35} />
            </ReactIcon>
          </PinterestShareButton>
        )}
        {(whatsupp || all) && (
          <WhatsappShareButton url={url}>
            {/* <WhatsappIcon
              size={38}
              className="social-media-modal-buttons"
              round={true}
            /> */}
            <ReactIcon darkColor={true}>
              <FaWhatsapp size={35} />
            </ReactIcon>
          </WhatsappShareButton>
        )}
        {(email || all) && (
          <EmailShareButton url={url}>
            {/* <EmailIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            /> */}
            <ReactIcon darkColor={true}>
              <EmailIcon size={35} />
            </ReactIcon>
          </EmailShareButton>
        )}
      </Flex>
    </>
  );
}
