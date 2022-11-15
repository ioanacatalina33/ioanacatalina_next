import React from "react";
import { DanceEvent } from "staticModel";

interface FestivalLinksContainerProps {
  eventOrganizer: DanceEvent;
  includeFestivals?: boolean;
  includeBrackets?: boolean;
  includeFestivalsLinks?: boolean;
  imageHeight?: string;
}

export const FestivalLinksContainer = ({
  eventOrganizer,
  includeFestivals,
  includeBrackets,
  includeFestivalsLinks,
  imageHeight,
}: FestivalLinksContainerProps) => {
  return includeFestivals &&
    eventOrganizer !== null &&
    eventOrganizer.name !== null &&
    eventOrganizer.name !== "" ? (
    <span>
      {includeBrackets ? " (" : " "}
      {eventOrganizer.name}
      {includeFestivalsLinks &&
      eventOrganizer.links.facebook !== undefined &&
      eventOrganizer.links.facebook !== "" ? (
        <a
          className="links-element-text link-photo-facebook"
          target="_blank"
          rel="noopener noreferrer"
          href={eventOrganizer.links.facebook}
        >
          <img
            alt=""
            src="/img/sm_facebook_on.png"
            className="festival-links-socialmedia"
            style={{
              height: imageHeight !== undefined ? imageHeight : "",
            }}
          />
        </a>
      ) : (
        ""
      )}
      {includeFestivalsLinks &&
      eventOrganizer.links.website !== undefined &&
      eventOrganizer.links.website !== "" ? (
        <a
          className="links-element-text link-photo-facebook"
          target="_blank"
          rel="noopener noreferrer"
          href={eventOrganizer.links.website}
        >
          <img
            alt=""
            src="/img/sm_www.png"
            className="festival-links-socialmedia"
            style={{
              height: imageHeight ? imageHeight : "",
            }}
          />
        </a>
      ) : (
        ""
      )}
      {includeBrackets ? ")" : " "}
    </span>
  ) : (
    <></>
  );
};
