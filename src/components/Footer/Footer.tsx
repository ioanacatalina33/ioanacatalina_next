import React from "react";

import { useScreenType } from "hooks/utils";

import Link from "next/link";
import { SocialMediaButtons } from "components/UI/SocialMediaButtons/SocialMediaButtons";
import { Flex } from "components/UI/Flex/Flex";

export const Footer = () => {
  const { isDesktop, isMobile, isTablet } = useScreenType();

  const linksRight = (
    <div
      style={{
        padding: "0rem 1rem 0rem 2rem",
      }}
    >
      <Link scroll={false} href="/map" className="bottom-element-text">
        MAP
      </Link>
      <Link scroll={false} href="/travel/all" className="bottom-element-text">
        Travel
      </Link>
      <Link scroll={false} href="/dance" className="bottom-element-text">
        Dance
      </Link>
      <Link scroll={false} href="/contact" className="bottom-element-text">
        Contact
      </Link>
    </div>
  );

  const linksLeft = (
    <div
      style={{
        padding: "0rem 1rem 0rem 1rem",
      }}
    >
      <Link scroll={false} href="/about" className="bottom-element-text">
        My story
      </Link>
      <Link scroll={false} href="/highlights" className="bottom-element-text">
        Highlights
      </Link>
      <Link scroll={false} href="/blog" className="bottom-element-text">
        Blog
      </Link>

      <Link scroll={false} href="/work-with-me" className="bottom-element-text">
        Work with me
      </Link>
    </div>
  );

  const iconsLeft = (
    <>
      {/* {isDesktop && ( */}
      <div className="footer-img-container footer-img-tree">
        <a href="/travel/back-to-the-jungle-in-brazil-2024">
          <img
            style={{ height: "auto", width: "100%", opacity: "0" }}
            src="/img/logo_tree.png"
            alt="Tree"
          />
        </a>
      </div>
      {/* )} */}

      <div className="footer-img-container footer-img-camera">
        <a href="/work-with-me">
          <img
            style={{ height: "auto", width: "100%", opacity: "0" }}
            src="/img/logo_camera.png"
            alt="Photo Camera"
          />
        </a>
      </div>
    </>
  );

  const iconsRight = (
    <>
      <div className={"footer-img-container footer-img-golden"}>
        <a href="/highlights/geena">
          <img
            style={{
              width: "100%",
              height: "auto",
              opacity: "0",
            }}
            src="/img/logo_golden.png"
            alt="Golden Retriever"
          />
        </a>
      </div>

      {/* {isDesktop && ( */}
      <div className="footer-img-container footer-img-mountain">
        <a href="/highlights/landscape">
          <img
            style={{ height: "auto", width: "100%", opacity: "0" }}
            src="/img/logo_mountain.png"
            alt="Mountain"
          />
        </a>
      </div>
      {/* )} */}
    </>
  );

  const footerIcons = (
    <Flex>
      {iconsLeft}
      {iconsRight}
    </Flex>
  );

  return (
    <Flex
      column
      className="footer_font"
      style={{
        width: "100%",

        backgroundColor: "rgb(var(--secondary-color))",
        alignItems: "center",
        paddingTop: "2rem",
      }}
    >
      {isMobile && footerIcons}
      <Flex
        justify={(j) => j.center}
        align={(a) => a.center}
        style={{
          width: "94vw",
          maxWidth: "1400px",
        }}
      >
        {!isMobile && (
          <Flex
            align={(a) => a.center}
            justify={(j) => j.end}
            style={{ flex: 1 }}
            column={isTablet}
          >
            {iconsLeft}
          </Flex>
        )}

        <Flex
          align={(a) => a.center}
          justify={(j) => j.center}
          style={{
            padding: isDesktop ? "0rem 1rem 0rem 1rem" : "0rem",
            flex: isDesktop ? 0.8 : 2,
          }}
        >
          {linksLeft}
          {linksRight}
        </Flex>
        {!isMobile && (
          <Flex
            align={(a) => a.center}
            justify={(j) => j.start}
            style={{ flex: 1 }}
            column={isTablet}
          >
            {iconsRight}
          </Flex>
        )}
      </Flex>

      <Flex
        align={(a) => a.center}
        column
        paddingOffset={{ top: 0.5, bottom: 0.5 }}
        marginOffset={{ top: 1 }}
        // justify={(j) => j.between}
        style={{
          width: "94vw",
          maxWidth: "1400px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <SocialMediaButtons full />
      </Flex>
      <div
        style={{
          color: "#999999",
          paddingBottom: "0.2rem",
          width: "94vw",
          maxWidth: "1400px",
        }}
      >
        © Ioana Catalina E.
      </div>
    </Flex>
  );
};
