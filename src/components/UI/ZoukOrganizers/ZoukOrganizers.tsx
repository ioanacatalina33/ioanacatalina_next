import React from "react";
import { danceEvents } from "staticModel";
import { FestivalLinksContainer } from "../FestivalLinksContainer";

export const ZoukOrganizers = () => {
  const zoukOrganizers = danceEvents;
  return (
    <div style={{ margin: "4rem 0rem 4rem 0rem" }}>
      <div className="text-container">
        Brazilian Zouk events organizers I&apos;ve collaborated with (including
        their facebook profiles):
      </div>

      <div className="text-container">
        {zoukOrganizers.map((zouk) => {
          return (
            <div
              key={zouk.subtype}
              style={{ margin: "0.4rem 0rem 0.4rem 0rem" }}
            >
              {zouk.organizers.map((organizer, index) => {
                return (
                  <span key={index}>
                    <a
                      className="link-facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={organizer.facebook}
                    >
                      {organizer.name}
                    </a>

                    {/* {organizer.name} */}
                    {index !== zouk.organizers.length - 1 ? (
                      <span> &nbsp;&amp;&nbsp; </span>
                    ) : (
                      ""
                    )}
                  </span>
                );
              })}

              <FestivalLinksContainer
                imageHeight="1.5rem"
                includeBrackets={true}
                includeFestivals={true}
                includeFestivalsLinks={true}
                eventOrganizer={zouk}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
