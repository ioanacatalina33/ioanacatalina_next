import React from "react";

import { LinksPageType } from "types/enums";
import { getLinkData, ILinkData, LinkType } from "staticModel";

interface LinksContainerProps {
  containerType: LinksPageType;
}

export const LinksContainer = ({ containerType }: LinksContainerProps) => {
  function getLinkComponent({
    name,
    url,
    src,
    classImgA,
    classLinkA,
  }: ILinkData) {
    return (
      <div className="links-element" style={{ fontSize: "1.2rem" }}>
        <a
          className={"links-element-text " + classImgA}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ioana.catalina.e"
        >
          <img alt="" src={src} className="mystory-socialmedia" />
        </a>
        <a
          className={"links-element-text " + classLinkA}
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          {name}
        </a>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        textAlign: "left",
      }}
    >
      {containerType === LinksPageType.MyStory ? (
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0rem 2rem 0rem 2rem" }}>
            {getLinkComponent(getLinkData(LinkType.FbPage))}
            {getLinkComponent(getLinkData(LinkType.FbPagePhotography))}
            {getLinkComponent(getLinkData(LinkType.FbPageZouk))}
            {getLinkComponent(getLinkData(LinkType.Instagram))}
            {getLinkComponent(getLinkData(LinkType.Flickr))}
          </div>

          <div style={{ padding: "0rem 2rem 0rem 2rem" }}>
            {getLinkComponent(getLinkData(LinkType.PX500))}
            {getLinkComponent(getLinkData(LinkType.Shutterstock))}
            {getLinkComponent(getLinkData(LinkType.AdobeStock))}
            {getLinkComponent(getLinkData(LinkType.IStock))}
            {getLinkComponent(getLinkData(LinkType.Dreamstime))}
          </div>
        </div>
      ) : containerType === LinksPageType.Contact ? (
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0rem 2rem 0rem 2rem" }}>
            {getLinkComponent(getLinkData(LinkType.Gmail))}
            {getLinkComponent(getLinkData(LinkType.Yahoo))}
            {getLinkComponent(getLinkData(LinkType.FbPage))}
            {getLinkComponent(getLinkData(LinkType.FbPagePhotography))}
            {getLinkComponent(getLinkData(LinkType.FbPageZouk))}
            {getLinkComponent(getLinkData(LinkType.Instagram))}
          </div>

          <div style={{ padding: "0rem 2rem 0rem 2rem" }}>
            {getLinkComponent(getLinkData(LinkType.PX500))}
            {getLinkComponent(getLinkData(LinkType.Flickr))}
            {getLinkComponent(getLinkData(LinkType.Shutterstock))}
            {getLinkComponent(getLinkData(LinkType.AdobeStock))}
            {getLinkComponent(getLinkData(LinkType.IStock))}
            {getLinkComponent(getLinkData(LinkType.Dreamstime))}
          </div>
        </div>
      ) : containerType === LinksPageType.Collaborations ? (
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0rem 2rem 0rem 2rem" }}>
            {getLinkComponent(getLinkData(LinkType.Gmail))}
            {getLinkComponent(getLinkData(LinkType.Yahoo))}
            {getLinkComponent(getLinkData(LinkType.Instagram))}
          </div>

          <div style={{ padding: "0rem 2rem 0rem 2rem" }}>
            {getLinkComponent(getLinkData(LinkType.FbPage))}
            {getLinkComponent(getLinkData(LinkType.FbPagePhotography))}
            {getLinkComponent(getLinkData(LinkType.FbPageZouk))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
