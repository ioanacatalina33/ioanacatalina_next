import React from "react";

import { FullScreenLayer } from "components/UI/FullScreenLayer";
import { SubscribeButton } from "components/UI/SubscribeButton";
import { FollowMe } from "components/UI/FollowMe";
import { ScreenType, StaticPage } from "helpers/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { useScreenType } from "hooks/utils";
import { getFullSizeImageByPage } from "staticModel";

import { HomeContainers } from "./HomeContainers";

export interface HomeProps {
  nrLocations: number;
  nrAlbums: number;
  nrImages: number;
}

export const Home = ({ nrAlbums, nrLocations, nrImages }: HomeProps) => {
  const { isIE } = useBrowsers();

  const imgFullSize = getFullSizeImageByPage(StaticPage.HOME);

  const { screenType } = useScreenType();

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <FullScreenLayer
        imgUrl={imgFullSize.url}
        text={imgFullSize.text}
        textClass={imgFullSize.class}
      />

      <div
        className="home-container-wrapper"
        style={{
          maxWidth: "1000px",
          alignItems: "center",
          display: isIE ? "block" : "flex",
        }}
      >
        <div>
          <div
            style={{
              padding: "3rem 1rem 0rem 1rem",
              fontSize: "1.5rem",
            }}
          >
            <b style={{ fontSize: "2rem" }}>{nrLocations}</b> locations{" "}
            {screenType !== ScreenType.Mobile ? "\u00A0" : <br />}
            <b style={{ fontSize: "2rem" }}>{nrAlbums}</b> albums{" "}
            {screenType !== ScreenType.Mobile ? "\u00A0" : <br />}
            <b style={{ fontSize: "2rem" }}>{nrImages}</b> photos
          </div>

          <div
            style={{
              padding: "1rem 0rem 0rem 0rem",
              margin: "0rem",
              display: "flex",
              justifyContent: "center",
              maxWidth: "1000px",
              alignItems: "center",
            }}
          >
            <img
              alt=""
              src="/img/logo_camera_color.png"
              style={{ height: "3.5rem", padding: "0rem 1.4rem 0rem 1rem" }}
            />

            <div className="home-text-container">
              A database of all my trips and adventures. Welcome on board!
            </div>

            <img
              alt=""
              src="/img/logo_golden_color.png"
              style={{ height: "5rem", padding: "0rem 1rem 0rem 1.4rem" }}
            />
          </div>
          <SubscribeButton parentPage="Home" />
          <HomeContainers />
        </div>
      </div>
      <FollowMe subscribe={true} />
    </div>
  );
};
