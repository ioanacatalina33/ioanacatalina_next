import React from "react";

import { useSelector } from "hooks/utils";

import { ScreenType } from "types/enums";
import { useBrowsers } from "hooks/useBrowsers";
import { Colors } from "helpers/const";
import Link from "next/link";

export const Footer = () => {
  const screenType = useSelector((state) => state.app.screenType);
  const { isIE, isEdge } = useBrowsers();

  return screenType === ScreenType.Mobile ? (
    <div />
  ) : (
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
        }}
      >
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

        <div
          style={{
            padding: "0rem 3rem 0rem 3rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="col text-left my-auto"
            style={{ padding: "0rem 2rem 0rem 1rem" }}
          >
            <Link scroll={false} href="/map">
              <a className="bottom-element-text">MAP</a>
            </Link>
            <Link scroll={false} href="/travel">
              <a className="bottom-element-text">Travel</a>
            </Link>
            <Link scroll={false} href="/dance">
              <a className="bottom-element-text">Dance</a>
            </Link>
            <Link scroll={false} href="/blog">
              <a className="bottom-element-text">Blog</a>
            </Link>
          </div>

          <div
            className="col text-left my-auto"
            style={{ padding: "0rem 1rem 0rem 1rem" }}
          >
            <Link scroll={false} href="/about">
              <a className="bottom-element-text">My story</a>
            </Link>
            <Link scroll={false} href="/highlights">
              <a className="bottom-element-text">Highlights</a>
            </Link>
            <Link scroll={false} href="/collaborations">
              <a className="bottom-element-text">Collaboration</a>
            </Link>
            <a
              className="bottom-element-text"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ioanacatalina.com/shop"
            >
              <span>Shop</span>
            </a>
            <Link scroll={false} href="/contact">
              <a className="bottom-element-text">Contact</a>
            </Link>
          </div>

          <div style={{ padding: "0rem 1rem 0rem 1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <div style={{ margin: "0.2rem" }}>
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
              </div>
              <div style={{ margin: "0.2rem" }}>
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
              </div>
              <div style={{ margin: "0.2rem" }}>
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
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "5rem", margin: "1.5rem" }}>
          <a href="/highlights/geena">
            <img
              style={{ width: "inherit", maxWidth: "5.5rem" }}
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
