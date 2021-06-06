import React from "react";
import { GeenaLinks } from "../About/GeenaLinks";

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
        childhood/teenage. She'd been by my side for many years (since 2010) and
        had assisted to many of my greatest memories, adventures and life
        changing events. In other words, she's seen me at my best and at my
        worst. I must say, my 20s wouldn't have been the same without her.
      </div>

      <div className="text-container" style={{ display: "block" }}>
        She is a real star, since a lot of people know her from all over the
        world. She was popular at my college, at my dance school, dog shows
        (she’s Champion in 4 countries, International Show Champion, Club Winner
        etc.) and my travel companion in many of my adventures in Romania. She's
        also the{" "}
        <span className="text-container-bold">
          {" "}
          mother of 15 adorable Golden Retrievers
        </span>
        , having two litters in her life.
      </div>

      <div className="text-container" style={{ display: "block" }}>
        Since my lifestyle has changed so drastically with my many travels and
        future plans, unfortunately now she doesn't live with me anymore, but
        she is at a dear friend together with her family, spending time together
        with her daughter, son, granddaughter and husband!
      </div>

      <GeenaLinks />

      <h4>
        <span className="text-container-bold">
          And of course, many more photos of her!
        </span>
      </h4>
    </div>
  );
};
