import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, FormControl, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { updateQueryText, updateMobileSearch } from "store";
import { useScreenSize, useSelector } from "hooks/utils";
import { Routes, ScreenType } from "types/enums";

import { HeaderDropdown } from "./HeaderUtils";

export const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const [isOnTop, setIsOnTop] = useState(true);

  const screenType = useSelector((state) => state.app.screenType);
  const { screenWidth } = useScreenSize();
  const queryText = useSelector((state) => state.app.queryText);
  const isMobileSearch = useSelector((state) => state.app.isMobileSearch);

  const isLargeScreen = screenWidth > 1210;
  const showPlane = screenWidth > 1400;

  useEffect(() => {
    setIsOnTop(window.pageYOffset === 0);
  }, []);

  function handleScroll() {
    setIsOnTop(window.pageYOffset < 200);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMobileSearch() {
    if (isMobileSearch) dispatch(updateQueryText(""));
    dispatch(updateMobileSearch(!isMobileSearch));
  }

  function onCloseSearchPressed() {
    dispatch(updateQueryText(""));
  }

  function onSearchQueryChanged(evt) {
    dispatch(updateQueryText(evt.target.value));
  }

  function allowInvisibleBackground() {
    return (
      pathname === Routes.Home ||
      pathname === Routes.Travel ||
      pathname === Routes.Dance ||
      pathname === Routes.About ||
      pathname === Routes.Highlights ||
      pathname === Routes.Collaborations ||
      pathname === Routes.Contact ||
      pathname === Routes.Blog ||
      pathname === Routes.BlogArticle
    );
  }

  const [menuHover, setMenuHover] = useState(false);

  return (
    <>
      <Navbar
        className={
          "custom-navbar " +
          (allowInvisibleBackground() &&
          isOnTop &&
          screenType === ScreenType.Desktop
            ? menuHover
              ? "semi-transparent-background"
              : "transparent-bg"
            : "visible-bg")
        }
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {!isMobileSearch && (
            <Link scroll={false} href="/">
              <a>
                <div
                  className="navbar-brand "
                  style={{
                    display:
                      isMobileSearch && screenType === ScreenType.Mobile
                        ? "none"
                        : "",
                  }}
                >
                  <img
                    src="/img/logo1.png"
                    className="logo-navbar"
                    alt="Ioana Catalaina Photography"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </a>
            </Link>
          )}

          {(screenType === ScreenType.Desktop || !isMobileSearch) && (
            <Nav
              className="custom-navbar-buttons-main"
              style={{
                width: screenType === ScreenType.Desktop ? "100%" : "unset",
              }}
            >
              {screenType !== ScreenType.Mobile && (
                <div>
                  <Link scroll={false} href="/map">
                    <a className="custom-navbar-link links-large">MAP</a>
                  </Link>

                  <Link scroll={false} href="/travel">
                    <a className="custom-navbar-link links-large">TRAVEL</a>
                  </Link>

                  <Link scroll={false} href="/dance">
                    <a className="custom-navbar-link links-large">DANCE</a>
                  </Link>

                  <Link scroll={false} href="/blog">
                    <a className="custom-navbar-link links-large">BLOG</a>
                  </Link>
                  {!isLargeScreen && (
                    <div style={{ display: "inline-block" }}>
                      <HeaderDropdown />
                    </div>
                  )}
                  {showPlane && (
                    <div
                      style={{
                        maxWidth: "2.1rem",
                        margin: "0rem 1.5rem",
                        display: "inline-block",
                      }}
                    >
                      <img
                        style={{ height: "auto", width: "100%" }}
                        src="/img/logo_airplane.png"
                        alt="Plane"
                      />
                    </div>
                  )}
                </div>
              )}
              {isLargeScreen && (
                <div
                  style={{
                    flex: 1,
                    justifyContent: "right",
                    textAlign: "right",
                    marginRight: "1rem",
                  }}
                >
                  <div className="mobile-nav-links">
                    <Link scroll={false} href="/about">
                      <a className="custom-navbar-link links-small">My story</a>
                    </Link>

                    <Link scroll={false} href="/highlights">
                      <a className="custom-navbar-link links-small">
                        Highlights
                      </a>
                    </Link>

                    <Link scroll={false} href="/collaborations">
                      <a className="custom-navbar-link links-small">
                        Collaborations
                      </a>
                    </Link>

                    <a
                      href="https://ioanacatalina.smugmug.com/"
                      className="custom-navbar-link links-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shop
                    </a>

                    <Link scroll={false} href="/contact">
                      <a className="custom-navbar-link links-small">Contact</a>
                    </Link>
                  </div>
                </div>
              )}
            </Nav>
          )}

          {screenType !== ScreenType.Desktop && (
            <div className="form-search">
              {isMobileSearch && (
                <FormControl
                  value={queryText}
                  onChange={onSearchQueryChanged}
                  type="text"
                  placeholder="Search"
                  className="navbar-search"
                  style={{
                    flex: "1",
                    borderRadius: "0.4rem 0rem 0rem 0.4rem",
                  }}
                />
              )}
              <Button
                onClick={toggleMobileSearch}
                variant="outline-warning"
                className="navbar-search-button"
                style={{
                  borderRadius: isMobileSearch
                    ? "0rem 0.4rem 0.4rem 0rem"
                    : "0.4rem",
                  margin: "0rem 0.5rem 0rem 0rem",
                }}
              >
                {" "}
                <i
                  className={isMobileSearch ? "fa fa-close" : "fa fa-search"}
                ></i>
              </Button>
            </div>
          )}

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ display: isMobileSearch ? "none" : "" }}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            {screenType === ScreenType.Desktop && (
              <div className="form-search">
                <Button
                  onClick={onCloseSearchPressed}
                  variant="outline-warning"
                  className="navbar-search-button"
                >
                  <i
                    className={
                      queryText === "" ? "fa fa-search" : "fa fa-close"
                    }
                  ></i>
                </Button>
                <FormControl
                  value={queryText}
                  onChange={onSearchQueryChanged}
                  type="text"
                  placeholder="Search"
                  className="navbar-search"
                />
              </div>
            )}

            {screenType !== ScreenType.Desktop && (
              <Nav className="custom-navbar-buttons-me">
                {screenType === ScreenType.Mobile && (
                  <Nav.Link eventKey="1">
                    <Link scroll={false} href="/map">
                      <a style={{ color: "#cccccc", textDecoration: "none" }}>
                        MAP
                      </a>
                    </Link>
                  </Nav.Link>
                )}
                {screenType === ScreenType.Mobile && (
                  <Nav.Link eventKey="2">
                    <Link scroll={false} href="/travel">
                      <a style={{ color: "#cccccc", textDecoration: "none" }}>
                        Travel
                      </a>
                    </Link>
                  </Nav.Link>
                )}
                {screenType === ScreenType.Mobile && (
                  <Nav.Link eventKey="3">
                    <Link scroll={false} href="/dance">
                      <a style={{ color: "#cccccc", textDecoration: "none" }}>
                        Dance
                      </a>
                    </Link>
                  </Nav.Link>
                )}
                {screenType === ScreenType.Mobile && (
                  <Nav.Link eventKey="3">
                    <Link scroll={false} href="/blog">
                      <a style={{ color: "#cccccc", textDecoration: "none" }}>
                        Blog
                      </a>
                    </Link>
                  </Nav.Link>
                )}

                <Nav.Link
                  eventKey="4"
                  className="custom-navbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ioanacatalina.com/shop"
                >
                  <a style={{ color: "#cccccc", textDecoration: "none" }}>
                    Shop
                  </a>
                </Nav.Link>

                <Nav.Link eventKey="5">
                  <Link scroll={false} href="/about">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      My story
                    </a>
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="6">
                  <Link scroll={false} href="/highlights">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      Highlights
                    </a>
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="7">
                  <Link scroll={false} href="/collaborations">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      Collaborations
                    </a>
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="8">
                  <Link scroll={false} href="/contact">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      Contact
                    </a>
                  </Link>
                </Nav.Link>
                {/* <a className="custom-navbar-link" href="/mylongtrip">My long trip</a> */}
                {/* <NavDropdown.Item href="/travelwithme">Travel with me</NavDropdown.Item> */}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
