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
            <FacebookIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </FacebookShareButton>
        )}
        {(twitter || all) && (
          <TwitterShareButton url={url}>
            <TwitterIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </TwitterShareButton>
        )}
        {(whatsupp || all) && (
          <WhatsappShareButton url={url}>
            <WhatsappIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </WhatsappShareButton>
        )}
        {(email || all) && (
          <EmailShareButton url={url}>
            <EmailIcon
              size={50}
              className="social-media-modal-buttons"
              round={true}
            />
          </EmailShareButton>
        )}
      </div>
    </>
  );
}
