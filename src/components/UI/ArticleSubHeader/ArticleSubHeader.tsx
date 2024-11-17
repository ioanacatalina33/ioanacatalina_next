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
      paddingOffset={{
        top: isMobile ? 2 : 3,
        bottom: 1,
        left: 1,
        right: 1,
      }}
      style={{ maxWidth: "var(--content-width)" }}
    >
      <Flex
        align={(j) => j.center}
        fullWidth
        className_="text-defaults"
        marginOffset={{ bottom: isMobile ? -1 : 0 }}
      >
        <div style={{ flex: 1, paddingRight: "2rem" }}>
          {dateStart !== undefined
            ? getFileDateTitleMonthString(dateStart, dateEnd)
            : ""}
        </div>

        <Flex align={(a) => a.center}>
          <div style={{ textAlign: "right", paddingRight: "0.5rem" }}>
            Share:
          </div>

          <ShareButtons facebook twitter whatsupp />
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
