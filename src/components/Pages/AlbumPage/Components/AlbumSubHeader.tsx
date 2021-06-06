import React, { useState } from "react";

import { getDanceEvent } from "staticModel";
import { AlbumDetails, AlbumType } from "types";
import { getFileDateTitleMonthString } from "helpers";
import { FestivalLinksContainer } from "components/UI/FestivalLinksContainer";
import { ModalShareDialog } from "components/UI/Modals";

interface AlbumSubHeaderProps {
  album: AlbumDetails;
}

export const AlbumSubHeader = ({ album }: AlbumSubHeaderProps) => {
  const [modalShow, setModalShow] = useState(false);

  let eventOrganizer = getDanceEvent(album.subtype);

  return (
    <div className="album-subheader">
      <div className="album-subheader-line">
        <div className="album-subheader-element1">
          {album.date_start !== undefined
            ? getFileDateTitleMonthString(album.date_start, album.date_end)
            : ""}
        </div>

        <div className="album-subheader-element3">
          <button
            onClick={() => setModalShow(true)}
            className="filter-element"
            style={{ margin: "1 rem 0rem 0rem 0rem" }}
          >
            <i className="fa fa-share-alt"></i>
          </button>
        </div>

        <ModalShareDialog show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div>
        {album.type === AlbumType.Travel ? (
          <h2 style={{ textAlign: "left" }}>{album.name}</h2>
        ) : album.type === AlbumType.Dance && eventOrganizer !== undefined ? (
          <h2 style={{ textAlign: "left" }}>
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
              eventOrganizer={eventOrganizer}
            />
          </h2>
        ) : album.type === AlbumType.Highlights ? (
          <h2 style={{ textAlign: "left" }}>{album.description}</h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
