import React from "react";

import { ScreenType } from "types/enums";
import { useSelector } from "hooks/utils";

import { SubscribeContent } from "../SubscribeContent";
import { Colors } from "helpers";
import { Button } from "react-bootstrap";
import { ShopLink } from "../Advertising";
import {
  AvatarIcon,
  FlexElement1,
  FlexElement2,
  FollowMeFlex,
} from "./FollowMe.style";

interface FollowMeInterface {
  subscribe?: boolean;
  invertColors?: boolean;
}

export const FollowMe = ({ subscribe, invertColors }: FollowMeInterface) => {
  const screenType = useSelector((state) => state.app.screenType);

  return (
    <div
      style={{
        backgroundColor: invertColors ? Colors.secondary.main : undefined,
      }}
    >
      <FollowMeFlex
        style={{
          flexDirection: screenType === ScreenType.Mobile ? "column" : "row",
        }}
      >
        <FlexElement1>
          <AvatarIcon src="/img/followme.jpg" alt="Travel girl" />
        </FlexElement1>
        <FlexElement2
          className="text-container"
          style={{ color: invertColors ? "#fafafa" : undefined }}
        >
          I&apos;m a <b>traveler/ photographer/ dancer</b> in love with the
          journey. For more photos of my adventures, follow me on
          {/* <span className="text-left links-element">
          <a className="links-element-text link-photo-facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/catalina.i.e.3">
            <img alt="" src="/img/sm_facebook_on.png" className="mystory-socialmedia" />
          </a>
          <a className="links-element-text link-facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/catalina.i.e.3">
            Facebook
          </a>
        </span>
        <br /> */}
          <span className="text-left links-element">
            <a
              className="links-element-text link-photo-instagram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ioana.catalina.e"
            >
              <img
                alt=""
                src="/img/sm_instagram_on.png"
                className="mystory-socialmedia"
              />
            </a>
            <a
              className="links-element-text link-instagram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ioana.catalina.e"
              style={{ color: invertColors ? "#ffffff" : undefined }}
            >
              Instagram
            </a>
          </span>
          <br />
          <br />
          If you enjoy and want to support my work, you can
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/ioanacatalina"
          >
            <Button
              style={{
                textAlign: "center",
                padding: "0.3rem 0.8rem 0.3rem 0.8rem",
                margin: "0rem 0rem 0rem 0.8rem",
                fontSize: "1.1rem",
                fontFamily: "Segoe UI, Roboto, Sans serif, Oxygen",
              }}
              variant="warning"
            >
              <b>Buy me a coffee</b>
            </Button>
          </a>
          {/* <span className="text-left links-element">
            <a
              className="links-element-text link-nationalg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.buymeacoffee.com/ioanacatalina"
              style={{ color: invertColors ? "#ffffff" : "" }}
            >
              buy me a coffee
            </a>
          </span>{" "} */}
          {subscribe && <SubscribeContent />}
        </FlexElement2>
      </FollowMeFlex>
    </div>
  );
};
