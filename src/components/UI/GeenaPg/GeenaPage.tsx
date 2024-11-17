import React from "react";
import { GeenaLinks } from "../../Pages/AboutPage/GeenaLinks";

export const GeenaPage = () => {
  return (
    <div>
      <h2>
        <img
          alt=""
          src="/img/logo_golden_color.png"
          style={{
            height: "5rem",
            padding: "0rem 1rem 0rem 1rem",
            visibility: "hidden",
          }}
        />
        My Golden Friend
        <img
          alt=""
          src="/img/logo_golden_color.png"
          style={{ height: "5rem", padding: "0rem 1rem 0rem 1rem" }}
        />{" "}
      </h2>

      <div className="text-container" style={{ display: "block" }}>
        Geena is my amazing{" "}
        <span className="text-container-bold">Golden Retriever </span> life
        companion, that I had dreamed of and waited to have for 7 years of my
        childhood/teenage years. She&apos;d been by my side for many years
        (since 2010) and had assisted to many of my greatest memories,
        adventures and life changing events. In other words, she&apos;s seen me
        at my best and at my worst. I must say, my 20s wouldn&apos;t have been
        the same without her.
      </div>

      <div className="text-container" style={{ display: "block" }}>
        She was a real star, since a lot of people from my life met her from all
        over the world. She was known at my college, at my dance school, dog
        shows (she’s Champion in 4 countries, International Show Champion, Club
        Winner etc.) and my travel companion in many of my adventures in
        Romania. She was also the{" "}
        <span className="text-container-bold">
          {" "}
          mother of 15 adorable Golden Retrievers
        </span>
        , having two litters in her life.
      </div>

      <GeenaLinks />
    </div>
  );
};
