import React from "react";

import { SubscribeButton } from "components/UI/SubscribeButton";
import { FollowMe } from "components/UI/FollowMe";
import { ScreenType, StaticPage } from "types/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { useScreenType } from "hooks/utils";

import { HomeContainers } from "./HomeContainers";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";

export interface HomeProps {
  nrLocations: number;
  nrAlbums: number;
  nrImages: number;
}

export const HomePage = ({ nrAlbums, nrLocations, nrImages }: HomeProps) => {
  const { isIE } = useBrowsers();

  const FullSizeLayer = useFullScreenlayer(StaticPage.HOME);

  const { screenType } = useScreenType();

  return (
    <div className="App" style={{ textAlign: "center" }}>
      {FullSizeLayer}

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
            <span style={{ fontSize: "2.2rem", fontWeight: 900 }}>
              {nrLocations}
            </span>
            {"  "}
            locations {screenType !== ScreenType.Mobile ? "\u00A0" : <br />}
            <span style={{ fontSize: "2.2rem", fontWeight: 900 }}>
              {nrAlbums}
            </span>
            {"  "}
            albums {screenType !== ScreenType.Mobile ? "\u00A0" : <br />}
            <span style={{ fontSize: "2.2rem", fontWeight: 900 }}>
              {nrImages}
            </span>
            {"  "}
            photos
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
      <FollowMe subscribe />
    </div>
  );
};
