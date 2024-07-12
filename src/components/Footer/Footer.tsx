import React from "react";

import { useSelector } from "hooks/utils";

import { ScreenType } from "types/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { Colors } from "helpers/const";
import Link from "next/link";

export const Footer = () => {
  const screenType = useSelector((state) => state.app.screenType);

  const linksLeft = (
    <div
      className="col text-left my-auto"
      style={{ padding: "0rem 1rem 0rem 1rem" }}
    >
      <Link scroll={false} href="/map" className="bottom-element-text">
        MAP
        {/* <a className="bottom-element-text">MAP</a> */}
      </Link>
      <Link scroll={false} href="/travel/all" className="bottom-element-text">
        {" "}
        Travel
        {/* <a className="bottom-element-text">Travel</a> */}
      </Link>
      <Link scroll={false} href="/dance/all" className="bottom-element-text">
        Dance
        {/* <a className="bottom-element-text">Dance</a> */}
      </Link>
      <Link scroll={false} href="/blog" className="bottom-element-text">
        Blog
        {/* <a className="bottom-element-text">Blog</a> */}
      </Link>
    </div>
  );

  const linksRight = (
    <div
      className="col text-left my-auto"
      style={{ padding: "0rem 1rem 0rem 1rem" }}
    >
      <Link scroll={false} href="/about" className="bottom-element-text">
        My story
        {/* <a className="bottom-element-text">My story</a> */}
      </Link>
      <Link scroll={false} href="/highlights" className="bottom-element-text">
        Highlights
        {/* <a className="bottom-element-text">Highlights</a> */}
      </Link>
      <Link
        scroll={false}
        href="/collaborations"
        className="bottom-element-text"
      >
        Collaboration
        {/* <a className="bottom-element-text">Collaboration</a> */}
      </Link>

      <Link scroll={false} href="/contact" className="bottom-element-text">
        Contact
        {/* <a className="bottom-element-text">Contact</a> */}
      </Link>
    </div>
  );

  const linkFacebook = (
    <a
      className="bottom-element-sm"
      target="_blank"
      style={{ margin: "0.2rem" }}
      rel="noopener noreferrer"
      href="https://www.facebook.com/IoanaCatalinaPhotography"
    >
      <img
        src="/img/sm_facebook_on.png"
        height="25"
        alt="Facebook"
        // onMouseOver={(e) =>
        //   (e.currentTarget.src = "/img/sm_facebook_off.png")
        // }
        // onMouseOut={(e) =>
        //   (e.currentTarget.src = "/img/sm_facebook_off.png")
        // }
      />
    </a>
  );

  const linkInstagram = (
    <a
      className="bottom-element-sm"
      target="_blank"
      style={{ margin: "0.2rem" }}
      rel="noopener noreferrer"
      href="https://www.instagram.com/ioana.catalina.e/"
    >
      <img
        src="/img/sm_instagram_on.png"
        height="25"
        alt="Instagram"
        // onMouseOver={(e) =>
        //   (e.currentTarget.src = "/img/sm_instagram_on.png")
        // }
        // onMouseOut={(e) =>
        //   (e.currentTarget.src = "/img/sm_instagram_off.png")
        // }
      />
    </a>
  );

  const linkFliker = (
    <a
      className="bottom-element-sm"
      target="_blank"
      style={{ margin: "0.2rem" }}
      rel="noopener noreferrer"
      href="https://www.flickr.com/photos/ioana_e"
    >
      <img
        src="/img/sm_flickr_on.png"
        height="25"
        alt="Flickr"
        // onMouseOver={(e) =>
        //   (e.currentTarget.src = "/img/sm_flickr_on.png")
        // }
        // onMouseOut={(e) =>
        //   (e.currentTarget.src = "/img/sm_flickr_off.png")
        // }
      />
    </a>
  );

  const link500Px = (
    <a
      className="bottom-element-sm"
      target="_blank"
      style={{ margin: "0.2rem" }}
      rel="noopener noreferrer"
      href="https://500px.com/ioanacatalinae"
    >
      <img
        src="/img/sm_500px_on.png"
        height="25"
        alt="500px"
        // onMouseOver={(e) =>
        //   (e.currentTarget.src = "/img/sm_500px_on.png")
        // }
        // onMouseOut={(e) =>
        //   (e.currentTarget.src = "/img/sm_500px_off.png")
        // }
      />
    </a>
  );

  const linkShutterstock = (
    <a
      className="bottom-element-sm"
      target="_blank"
      style={{ margin: "0.2rem" }}
      rel="noopener noreferrer"
      href="https://www.shutterstock.com/g/IoanaCatalinaE"
    >
      <img
        src="/img/sm_shutterstock_on.png"
        height="25"
        alt="Shutterstock"
        // onMouseOver={(e) =>
        //   (e.currentTarget.src = "/img/sm_shutterstock_on.png")
        // }
        // onMouseOut={(e) =>
        //   (e.currentTarget.src = "/img/sm_shutterstock_off.png")
        // }
      />
    </a>
  );

  const linkAdobeStock = (
    <a
      className="bottom-element-sm"
      target="_blank"
      style={{ margin: "0.2rem" }}
      rel="noopener noreferrer"
      href="https://stock.adobe.com/es/contributor/206273411/icephotography"
    >
      <img
        src="/img/sm_adobe_on.png"
        height="25"
        alt="Adobe Stock"
        // onMouseOver={(e) =>
        //   (e.currentTarget.src =
        //     "/img/sm_adobe_on.png")
        // }
        // onMouseOut={(e) =>
        //   (e.currentTarget.src =
        //     "/img/sm_adobe_off.png")
        // }
      />
    </a>
  );

  const socialMedia = (
    <div style={{ padding: "1rem 0rem 1rem 0rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
        }}
      >
        {screenType !== ScreenType.Mobile ? (
          <>
            <div style={{ margin: "0.2rem" }}>
              {linkFacebook}
              {linkInstagram}
            </div>
            <div style={{ margin: "0.2rem" }}>
              {linkFliker}
              {link500Px}
            </div>
            <div style={{ margin: "0.2rem" }}>
              {linkShutterstock}
              {linkAdobeStock}
            </div>{" "}
          </>
        ) : (
          <>
            <div
              style={{ margin: "0.2rem", display: "flex", flexWrap: "wrap" }}
            >
              {linkFacebook}
              {linkInstagram}
              {linkFliker}
              {link500Px}
              {linkShutterstock}
              {linkAdobeStock}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const iconsLeft = (
    <>
      <div style={{ maxWidth: "5rem", margin: "1.5rem" }}>
        <img
          style={{ height: "auto", width: "100%" }}
          src="/img/logo_airplane.png"
          alt="Plane"
        />
      </div>
      <div style={{ maxWidth: "4rem", margin: "1.5rem" }}>
        <img
          style={{ height: "auto", width: "100%" }}
          src="/img/logo_camera.png"
          alt="Photo Camera"
        />
      </div>
    </>
  );

  const iconsRight = (
    <>
      <div style={{ maxWidth: "5rem", margin: "1.5rem" }}>
        <a href="/highlights/geena">
          <img
            style={{ width: "100%", maxWidth: "5.5rem" }}
            src="/img/logo_golden.png"
            alt="Golden Retriever"
            onMouseOver={(e) =>
              (e.currentTarget.src = "/img/logo_golden_color.png")
            }
            onMouseOut={(e) => (e.currentTarget.src = "/img/logo_golden.png")}
          />
        </a>
      </div>
      <div style={{ maxWidth: "7rem", margin: "1.5rem" }}>
        <img
          style={{ height: "auto", width: "100%" }}
          src="/img/logo_mountain.png"
          alt="Mountain"
        />
      </div>
    </>
  );

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: Colors.secondary.main,
        alignItems: "center",
        paddingTop: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: screenType === ScreenType.Desktop ? "row" : "column",
        }}
      >
        {screenType !== ScreenType.Mobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {iconsLeft}
          </div>
        )}
        <div
          style={{
            padding:
              screenType === ScreenType.Desktop
                ? "0rem 3rem 0rem 3rem"
                : "0rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {linksLeft}
          {linksRight}
          {screenType !== ScreenType.Mobile && (
            <>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {socialMedia}
            </>
          )}
        </div>
        {screenType !== ScreenType.Mobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {iconsRight}
          </div>
        )}
        {screenType === ScreenType.Mobile && socialMedia}
      </div>
      <div
        className="col-12 text-left"
        style={{ color: "#999999", paddingLeft: "1rem" }}
      >
        © Ioana Catalina E.{" "}
      </div>
    </div>
  );
};
