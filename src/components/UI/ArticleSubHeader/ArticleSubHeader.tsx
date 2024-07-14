import React from "react";

import { getDanceEvent } from "staticModel";
import { getFileDateTitleMonthString } from "helpers";
import { FestivalLinksContainer } from "components/UI/FestivalLinksContainer";
import { ShareButtons } from "components/UI/Modals/ShareButtons";
import { useScreenType } from "hooks";
import { ScreenType } from "types";
import { ShopLink } from "../Advertising";

interface ArticleSubHeaderProps {
  title?: string;
  dateStart?: Date;
  dateEnd?: Date;
  danceEvent?: string;
}

export const ArticleSubHeader = ({
  title,
  dateStart,
  dateEnd,
  danceEvent,
}: ArticleSubHeaderProps) => {
  const eventOrganizer = getDanceEvent(danceEvent);
  const { screenType } = useScreenType();

  return (
    <div
      style={{
        paddingTop: screenType === ScreenType.Mobile ? "rem" : "3rem",
        paddingBottom: screenType === ScreenType.Mobile ? "rem" : "3rem",
      }}
    >
      <div className="album-subheader-line">
        <div className="album-subheader-element1">
          {dateStart !== undefined
            ? getFileDateTitleMonthString(dateStart, dateEnd)
            : ""}
        </div>

        <div className="album-subheader-element3">
          <div style={{ display: "flex", alignItems: "start" }}>
            <div style={{ textAlign: "right", paddingRight: "0.5rem" }}>
              Share this:
            </div>

            <ShareButtons facebook twitter whatsupp />
          </div>
        </div>
      </div>
      <div>
        {danceEvent && eventOrganizer !== undefined ? (
          <h3 style={{ textAlign: "left" }}>
            Organized by{" "}
            {eventOrganizer.organizers.map((organizer, index) => {
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
                  {index !== eventOrganizer.organizers.length - 1 ? (
                    <span> &amp; </span>
                  ) : (
                    ""
                  )}
                </span>
              );
            })}
            <br />
            <FestivalLinksContainer
              imageHeight="1.5rem"
              includeBrackets={true}
              includeFestivals={true}
              includeFestivalsLinks={true}
              eventOrganizer={eventOrganizer}
            />
          </h3>
        ) : (
          <h2 style={{ textAlign: "left" }}>{title}</h2>
        )}
      </div>
      {/* {danceEvent && <ShopLink />} */}
    </div>
  );
};
