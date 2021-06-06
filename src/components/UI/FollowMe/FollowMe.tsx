import React from "react";
import styled from "styled-components";

import { ScreenType } from "types/enums";
import { useSelector } from "hooks/utils";

import { SubscribeContent } from "../SubscribeContent";

interface FollowMeInterface {
  subscribe?: boolean;
}

export const FollowMe = ({ subscribe }: FollowMeInterface) => {
  const screenType = useSelector((state) => state.app.screenType);

  return (
    <div>
      <FollowMeFlex screenType={screenType}>
        <FlexElement1>
          <AvatarIcon src="/img/followme.jpg" />
        </FlexElement1>
        <FlexElement2 className="text-container">
          I'm a passionate <b>travel photographer</b> in love with the journey.
          <br /> For more photos of my adventures, follow me on
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
            >
              Instagram
            </a>
          </span>
          {subscribe && <SubscribeContent />}
        </FlexElement2>
      </FollowMeFlex>
    </div>
  );
};

const FlexElement1 = styled.div`
  flex: 1 0 0;
`;

const FlexElement2 = styled.div`
  flex: 1 0 50%;
`;

const AvatarIcon = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
`;

interface FollowMeFlexProp {
  screenType: ScreenType;
}

const FollowMeFlex = styled.div<FollowMeFlexProp>`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  padding: 2rem 1rem;
  margin: 2rem auto;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ screenType }) =>
    screenType === ScreenType.Mobile ? "column" : "row"};
`;
