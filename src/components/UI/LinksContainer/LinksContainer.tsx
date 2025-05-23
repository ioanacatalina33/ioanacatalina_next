/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import { LinksPageType, ScreenType } from "types/enums";
import { getLinkData, ILinkData, LinkType } from "staticModel";
import { useScreenType } from "hooks";
import { Flex } from "../Flex/Flex";

function getLinkComponent({
  name,
  url,
  classImgA,
  classLinkA,
  iconOn,
}: ILinkData) {
  return (
    <Flex className_="links-element" align={(a) => a.center}>
      <a
        className={"links-element-text " + classImgA}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/ioana.catalina.e"
        style={{ paddingRight: "0.4rem", paddingBottom: "0.1rem" }}
        aria-hidden="true"
      >
        {/* <img alt="" src={src} className="mystory-socialmedia" /> */}
        {iconOn}
      </a>
      <a
        className={"links-element-text " + classLinkA}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {name}
      </a>
    </Flex>
  );
}

interface LinksContainerProps {
  containerType: LinksPageType;
}

export const LinksContainer = ({ containerType }: LinksContainerProps) => {
  const { screenType } = useScreenType();

  const linkColStyle = {
    margin: "0rem 0rem",
    padding:
      screenType === ScreenType.Mobile
        ? "0rem 1rem 0rem 1rem"
        : "0rem 2rem 0rem 2rem",
  };

  const wrapperStyle = {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    width: "fit-content",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        width: "auto",
      }}
    >
      {containerType === LinksPageType.MyStory ? (
        //@ts-ignore
        <div style={wrapperStyle}>
          <div style={linkColStyle}>
            {getLinkComponent(getLinkData(LinkType.FbPage))}
            {getLinkComponent(getLinkData(LinkType.FbPageZouk))}
            {getLinkComponent(getLinkData(LinkType.Instagram))}
            {getLinkComponent(getLinkData(LinkType.Youtube))}
            {getLinkComponent(getLinkData(LinkType.Flickr))}
          </div>

          <div style={linkColStyle}>
            {getLinkComponent(getLinkData(LinkType.PX500))}
            {getLinkComponent(getLinkData(LinkType.Shutterstock))}
            {getLinkComponent(getLinkData(LinkType.AdobeStock))}
            {getLinkComponent(getLinkData(LinkType.IStock))}
            {getLinkComponent(getLinkData(LinkType.Dreamstime))}
          </div>
        </div>
      ) : containerType === LinksPageType.Contact ? (
        //@ts-ignore
        <div style={wrapperStyle}>
          <div style={linkColStyle}>
            {getLinkComponent(getLinkData(LinkType.Gmail))}
            {/* {getLinkComponent(getLinkData(LinkType.Yahoo))} */}
            {getLinkComponent(getLinkData(LinkType.FbPage))}
            {getLinkComponent(getLinkData(LinkType.FbPageZouk))}
            {getLinkComponent(getLinkData(LinkType.Instagram))}
            {getLinkComponent(getLinkData(LinkType.Linkedin))}
            {getLinkComponent(getLinkData(LinkType.Youtube))}
          </div>

          <div style={linkColStyle}>
            {getLinkComponent(getLinkData(LinkType.PX500))}
            {getLinkComponent(getLinkData(LinkType.Flickr))}
            {getLinkComponent(getLinkData(LinkType.Shutterstock))}
            {getLinkComponent(getLinkData(LinkType.AdobeStock))}
            {getLinkComponent(getLinkData(LinkType.IStock))}
            {getLinkComponent(getLinkData(LinkType.Dreamstime))}
          </div>
        </div>
      ) : containerType === LinksPageType.Collaborations ? (
        //@ts-ignore
        <div style={wrapperStyle}>
          <div style={linkColStyle}>
            {getLinkComponent(getLinkData(LinkType.Gmail))}
            {/* {getLinkComponent(getLinkData(LinkType.Yahoo))} */}
            {getLinkComponent(getLinkData(LinkType.Instagram))}
          </div>

          <div style={linkColStyle}>
            {getLinkComponent(getLinkData(LinkType.FbPage))}
            {/* {getLinkComponent(getLinkData(LinkType.FbPagePhotography))} */}
            {getLinkComponent(getLinkData(LinkType.FbPageZouk))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
