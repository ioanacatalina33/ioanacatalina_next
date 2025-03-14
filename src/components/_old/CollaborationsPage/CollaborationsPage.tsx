import React from "react";
import { ButtonToolbar } from "react-bootstrap";

import {
  danceEvents,
  getPhotosForAdventureProducts,
  getPhotosForCollaborationsBaby,
  getPhotosForCollaborationsDance,
  getPhotosForCollaborationsEvents,
  getPhotosForCollaborationsIndoors,
  getPhotosForCollaborationsPets,
  getPhotosForCollaborationsPortraits,
  getPhotosForCollaborationsProducts,
  getPhotosForCollaborationsTrash,
} from "staticModel";
import { LinksPageType, StaticPage } from "types/enums";
import { ImageCollage } from "components/UI/ImageCollage";
import { LinksContainer } from "components/UI/LinksContainer";
import { ZoukOrganizers } from "components/UI/ZoukOrganizers";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";

export const CollaborationsPage = () => {
  const FullSizeLayer = useFullScreenlayer(StaticPage.COLLABORATORS);
  const eventsOrganizers = danceEvents;

  function getHeader(title: string) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eeeeee",
          height: "7rem",
          marginTop: "6rem",
          marginBottom: "1rem",
        }}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>
      </div>
    );
  }

  return (
    <div className="App">
      {FullSizeLayer}

      <div
        className="filters-background"
        style={{ margin: "4rem 0rem 6rem 0rem" }}
      >
        <ButtonToolbar className="filter-toolbar-collaborations-width filter-toolbar-padding justify-content-center">
          {eventsOrganizers.map((organizer, index) => {
            return organizer.logo !== "" && organizer.logo !== undefined ? (
              <img
                className="logos-element-collaborations" //col-4 col-md-3 col-lg-2 col-xxl-1 justify-content-around
                key={index}
                src={organizer.logo}
                alt={""}
              ></img>
            ) : (
              ""
            );
          })}
        </ButtonToolbar>{" "}
      </div>

      <h2>Dance festivals</h2>

      <div className="text-container">
        During the years I&apos;ve had the chance to collaborate with a lot of
        people in a vast range of circumstances. Below I tried to categorize my
        photos and services that I&apos;ve offered.
      </div>

      <div
        className="text-container"
        style={{ padding: "3rem 2rem 0rem 2rem" }}
      ></div>
      <ImageCollage
        photos={getPhotosForCollaborationsDance()}
        alt="Brazilian Zouk Dance Events Festivals"
      />
      <ZoukOrganizers />

      {getHeader("Portraits")}
      <ImageCollage
        photos={getPhotosForCollaborationsPortraits()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Portraits photo shooting"
      />

      {getHeader("Events")}
      <ImageCollage
        photos={getPhotosForCollaborationsEvents()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Events photo shooting"
      />

      {getHeader("Newborns")}
      <ImageCollage
        photos={getPhotosForCollaborationsBaby()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Newborns photo shooting"
      />

      {getHeader("Trash the dress")}
      <ImageCollage
        photos={getPhotosForCollaborationsTrash()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Trash the dress photo shooting"
      />

      {getHeader("Pets")}
      <ImageCollage
        photos={getPhotosForCollaborationsPets()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Pets photo shooting"
      />

      {getHeader("Clinics / Indoors")}
      <ImageCollage
        photos={getPhotosForCollaborationsIndoors()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Clinics hospitals photo shooting indoors"
      />

      {getHeader("Products")}
      <ImageCollage
        photos={getPhotosForCollaborationsProducts()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Product photo shooting"
      />

      {getHeader("Adventure / outdoors")}
      <ImageCollage
        photos={getPhotosForAdventureProducts()}
        marginTopBottom={"1rem"}
        photoPadding={"1rem"}
        fullWidth={1200}
        collaborations
        alt="Adventure outdoors photo shooting"
      />

      <div
        className="text-container"
        style={{ padding: "3rem 2rem 3rem 2rem", textAlign: "center" }}
      >
        For more info, don&apos;t hesitate to contact me!
      </div>
      <LinksContainer containerType={LinksPageType.Collaborations} />
      <div style={{ margin: "4rem 0rem" }} />
    </div>
  );
};
