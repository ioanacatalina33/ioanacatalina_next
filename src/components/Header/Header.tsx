import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, FormControl, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { useScreenSize, useSelector } from "hooks/utils";
import { Routes, ScreenType } from "types/enums";

import { HeaderDropdown } from "./HeaderUtils";
import { updateMobileSearch, updateQueryText } from "store/appSlice";

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
              <div
                className="navbar-brand "
                style={{
                  display:
                    isMobileSearch && screenType === ScreenType.Mobile
                      ? "none"
                      : "inline",
                }}
              >
                <img
                  src="/img/logo1.png"
                  className="logo-navbar"
                  alt="Ioana Catalaina Photography"
                  style={{ cursor: "pointer" }}
                />
              </div>
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
                  <Link
                    scroll={false}
                    href="/map"
                    className="custom-navbar-link links-large"
                  >
                    MAP
                  </Link>

                  <Link
                    scroll={false}
                    href="/travel"
                    className="custom-navbar-link links-large"
                  >
                    TRAVEL
                  </Link>

                  <Link
                    scroll={false}
                    href="/dance"
                    className="custom-navbar-link links-large"
                  >
                    DANCE
                  </Link>

                  <Link
                    scroll={false}
                    href="/blog"
                    className="custom-navbar-link links-large"
                  >
                    BLOG
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
                    <Link
                      scroll={false}
                      href="/about"
                      className="custom-navbar-link links-small"
                    >
                      My story
                    </Link>

                    <Link
                      scroll={false}
                      href="/highlights"
                      className="custom-navbar-link links-small"
                    >
                      Highlights
                    </Link>

                    <Link
                      scroll={false}
                      href="/collaborations"
                      className="custom-navbar-link links-small"
                    >
                      Collaborations
                    </Link>

                    <Link
                      scroll={false}
                      href="/contact"
                      className="custom-navbar-link links-small"
                    >
                      Contact
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
            style={{ display: isMobileSearch ? "none" : undefined }}
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
                  <Nav.Link
                    eventKey="1"
                    href="/map"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                  >
                    MAP
                  </Nav.Link>
                )}
                {screenType === ScreenType.Mobile && (
                  <Nav.Link
                    eventKey="2"
                    href="/travel"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                  >
                    Travel
                  </Nav.Link>
                )}
                {screenType === ScreenType.Mobile && (
                  <Nav.Link
                    eventKey="3"
                    href="/dance"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                  >
                    Dance
                  </Nav.Link>
                )}
                {screenType === ScreenType.Mobile && (
                  <Nav.Link
                    eventKey="3"
                    href="/blog"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                  >
                    Blog
                  </Nav.Link>
                )}

                <Nav.Link
                  eventKey="5"
                  href="/about"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  My story
                </Nav.Link>
                <Nav.Link
                  eventKey="6"
                  href="/highlights"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Highlights
                </Nav.Link>
                <Nav.Link
                  eventKey="7"
                  href="/collaborations"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Collaborations
                </Nav.Link>
                <Nav.Link
                  eventKey="8"
                  href="/contact"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Contact
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
