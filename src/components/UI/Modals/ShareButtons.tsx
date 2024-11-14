import React, { useEffect, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { ReactIcon } from "../Icon/Icon.style";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface ShareButtonsProps {
  facebook?: boolean;
  twitter?: boolean;
  whatsupp?: boolean;
  email?: boolean;
  all?: boolean;
}

export function ShareButtons({
  email,
  facebook,
  whatsupp,
  twitter,
  all,
}: ShareButtonsProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <div>
        {(facebook || all) && (
          <FacebookShareButton url={url}>
            <ReactIcon darkColor={true}>
              <FaFacebook size={27} />
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
              <FaTwitter size={30} />
            </ReactIcon>
          </TwitterShareButton>
        )}
        {(whatsupp || all) && (
          <WhatsappShareButton url={url}>
            {/* <WhatsappIcon
              size={38}
              className="social-media-modal-buttons"
              round={true}
            /> */}
            <ReactIcon darkColor={true}>
              <FaWhatsapp size={30} />
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
              <EmailIcon size={30} />
            </ReactIcon>
          </EmailShareButton>
        )}
      </div>
    </>
  );
}
