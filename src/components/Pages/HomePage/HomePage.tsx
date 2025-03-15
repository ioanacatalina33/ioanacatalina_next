import React from "react";

import { FollowMe } from "components/UI/FollowMe";
import { StaticPage } from "types/enums";

import { HomeContainers } from "./HomeContainers";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { Flex } from "components/UI/Flex/Flex";

export interface HomeProps {
  nrCountries: number;
  nrLocations: number;
  nrAlbums: number;
  nrImages: number;
}

export const HomePage = ({
  nrCountries,
  nrAlbums,
  nrLocations,
  nrImages,
}: HomeProps) => {
  const FullSizeLayer = useFullScreenlayer(StaticPage.HOME);

  return (
    <Flex className_="App">
      {FullSizeLayer}

      <FollowMe showSocialMedia={false} marginOffset={{ top: 2, bottom: 1 }} />

      <Flex
        align={(a) => a.center}
        style={{
          maxWidth: "var(--content-width)",
        }}
      >
        <main>
          <Flex
            justify={(j) => j.center}
            align={(a) => a.center}
            marginOffset={{ top: 1, bottom: 1 }}
          >
            <img
              alt=""
              src="/img/logo_camera_color.png"
              style={{ height: "3.5rem", padding: "0rem 1.4rem 0rem 1rem" }}
            />

            <div className="home-text-container">
              This website also serves as a ‘database’ of my adventures,
              featuring <span style={{ fontWeight: 600 }}>{nrAlbums}</span>
              {"  "}
              albums and{" "}
              <span style={{ fontSize: "2 drem", fontWeight: 600 }}>
                {nrImages}
              </span>
              {"  "}
              photos. Welcome on board!
            </div>

            <img
              alt=""
              src="/img/logo_golden_color.png"
              style={{ height: "5rem", padding: "0rem 1rem 0rem 1.4rem" }}
            />
          </Flex>

          {/* <SubscribeButton parentPage="Home" /> */}
          <HomeContainers />
        </main>
      </Flex>
    </Flex>
  );
};
