import React from "react";

import { getDanceEvent } from "staticModel";
import { getFileDateTitleMonthString } from "helpers";
import { FestivalLinksContainer } from "components/UI/FestivalLinksContainer";
import { ShareButtons } from "components/UI/Modals/ShareButtons";
import { useScreenType } from "hooks";
import { Flex } from "../Flex/Flex";

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
  const { isMobile } = useScreenType();

  return (
    <Flex
      column
      fullWidth
      className_="text-container"
      style={{ maxWidth: "var(--content-width)" }}
    >
      <Flex
        align={(j) => j.center}
        fullWidth
        className_="text-defaults"
        marginOffset={{ bottom: 0 }}
      >
        <div style={{ flex: 1, paddingRight: "2rem", textAlign: "left" }}>
          {dateStart !== undefined
            ? getFileDateTitleMonthString(dateStart, dateEnd)
            : ""}
        </div>

        <Flex align={(a) => a.center}>
          <ShareButtons facebook twitter whatsupp pinterest />
        </Flex>
      </Flex>

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
      ) : title ? (
        <h2 style={{ textAlign: "left" }}>{title}</h2>
      ) : (
        <></>
      )}

      {/* {danceEvent && <ShopLink />} */}
    </Flex>
  );
};
