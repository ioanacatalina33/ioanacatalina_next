import React from "react";
import Image from "next/image";
import { ScreenType } from "types/enums";
import { useSelector } from "hooks/utils";

import {
  AvatarIcon,
  FlexElement1,
  FlexElement2,
  FollowMeFlex,
} from "./FollowMe.style";
import { SocialMediaButtons } from "../SocialMediaButtons/SocialMediaButtons";
import { Flex } from "../Flex/Flex";
import { SpacingOffsets } from "helpers/cssGenerators";
import { imageLoader } from "helpers/imageLoader";

interface FollowMeInterface extends SpacingOffsets {
  subscribe?: boolean;
  invertColors?: boolean;
  showSocialMedia?: boolean;
}

export const FollowMe = ({
  invertColors,
  showSocialMedia = true,
  marginOffset,
  paddingOffset,
}: FollowMeInterface) => {
  const screenType = useSelector((state) => state.app.screenType);

  return (
    <Flex
      marginOffset={marginOffset}
      paddingOffset={paddingOffset}
      fullWidth
      style={{
        backgroundColor: invertColors
          ? "rgb(var(--secondary-color))"
          : undefined,
      }}
    >
      <FollowMeFlex
        style={{
          flexDirection: screenType === ScreenType.Mobile ? "column" : "row",
        }}
      >
        <FlexElement1>
          <AvatarIcon src="/img/followme.jpg" alt="Travel girl" />
          {/* <Image
            src="/img/followme.jpg"
            alt="Travel girl"
            loader={imageLoader}
            // sizes="100vw"
            width={0}
            height={0}
            style={{
              borderRadius: "50%",
              width: "100%",
              maxWidth: "300px",
            }}
          /> */}
        </FlexElement1>
        <FlexElement2
          className="text-container"
          style={{ color: invertColors ? "#fafafa" : undefined }}
        >
          I&apos;m Ioana, a passionate photographer and software engineer,
          finding joy in every step of my journey. <br />
          My work is dedicated to capturing the breathtaking beauty of our
          <span style={{ color: "rgb(var(--primary-color))" }}>
            {" "}
            natural world
          </span>{" "}
          , while inspiring a deeper connection with nature and promoting a
          greater commitment to its preservation.
          <br />
          {showSocialMedia && <SocialMediaButtons darkColor={!invertColors} />}
        </FlexElement2>
      </FollowMeFlex>
    </Flex>
  );
};
