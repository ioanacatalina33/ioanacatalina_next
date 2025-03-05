import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, FormControl, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { useScreenSize, useScreenType, useSelector } from "hooks/utils";
import { Routes } from "types/enums";

import { HeaderDropdown } from "./HeaderUtils";
import { updateMobileSearch, updateQueryText } from "store/appSlice";
import { Flex } from "components/UI/Flex/Flex";

export const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const [isOnTop, setIsOnTop] = useState(true);

  const { isMobile, isDesktop, isTablet } = useScreenType();
  const { screenWidth } = useScreenSize();
  const queryText = useSelector((state) => state.app.queryText);
  const isMobileSearch = useSelector((state) => state.app.isMobileSearch);

  //const showCamera = screenWidth > 1400;
  const showCamera = false;
  const showFullMenu = screenWidth > 1200;

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
      // pathname === Routes.BlogArticle ||
      pathname === Routes.WorkWithMe
    );
  }

  const [menuHover, setMenuHover] = useState(false);

  const LeftMenu = (
    <Flex align={(a) => a.center}>
      <Link
        scroll={false}
        href="/about"
        className="custom-navbar-link links-large"
      >
        MY STORY
      </Link>

      <Link
        scroll={false}
        href="/highlights"
        className="custom-navbar-link links-large"
      >
        HIGHLIGHTS
      </Link>

      <Link
        scroll={false}
        href="/blog"
        className="custom-navbar-link links-large"
      >
        BLOG
      </Link>

      {showCamera && (
        <div
          style={{
            maxWidth: "2rem",
            margin: "0rem 1.5rem",
            display: "inline-block",
          }}
        >
          <img
            style={{ height: "auto", width: "100%" }}
            src="/img/logo_camera.png"
            alt="Camera"
          />
        </div>
      )}
    </Flex>
  );

  const RightMenu = (
    <div>
      <Link
        scroll={false}
        href="/map"
        className="custom-navbar-link links-small"
      >
        MAP
      </Link>

      <Link
        scroll={false}
        href="/travel"
        className="custom-navbar-link links-small"
      >
        Travel
      </Link>

      {/* <Link
    scroll={false}
    href="/dance"
    className="custom-navbar-link links-small"
  >
    Dance
  </Link> */}

      <Link
        scroll={false}
        href="/work-with-me"
        className="custom-navbar-link links-small"
      >
        Work with me
      </Link>

      <Link
        scroll={false}
        href="/contact"
        className="custom-navbar-link links-small"
      >
        Contact
      </Link>
    </div>
  );

  const HiddenMenuTablet = (
    <>
      {" "}
      <Nav.Link
        eventKey="1"
        href="/map"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        MAP
      </Nav.Link>
      <Nav.Link
        eventKey="2"
        href="/travel"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Travel
      </Nav.Link>
      {/* <Nav.Link
    eventKey="3"
    href="/dance"
    style={{ color: "#cccccc", textDecoration: "none" }}
  >
    Dance
  </Nav.Link> */}
      <Nav.Link
        eventKey="7"
        href="/work-with-me"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Work with me
      </Nav.Link>
      <Nav.Link
        eventKey="8"
        href="/contact"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Contact
      </Nav.Link>
    </>
  );

  const HiddenMenuMobile = (
    <>
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
        eventKey="3"
        href="/blog"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Blog
      </Nav.Link>
      {HiddenMenuTablet}
    </>
  );

  return (
    <>
      <Navbar
        className={
          "custom-navbar " +
          (allowInvisibleBackground() && isOnTop && isDesktop
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
        <Flex justify={(j) => j.center} align={(a) => a.center} fullWidth>
          <Link scroll={false} href="/">
            <div
              className="navbar-brand "
              style={{
                display: "inline",
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

          {isDesktop && (
            <>
              <Nav
                className="custom-navbar-buttons-main"
                style={{
                  width: "100%",
                }}
              >
                {LeftMenu}
                <div
                  style={{
                    flex: 1,
                    justifyContent: "right",
                    textAlign: "right",
                    marginRight: "1rem",
                  }}
                >
                  {!showFullMenu ? (
                    <div style={{ display: "inline-block" }}>
                      <HeaderDropdown />
                    </div>
                  ) : (
                    RightMenu
                  )}
                </div>
              </Nav>
              <div className="form-search">
                <Button
                  onClick={onCloseSearchPressed}
                  variant="outline-warning"
                  className="navbar-search-button"
                  aria-label="Search"
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
                  id="nav-search"
                  placeholder="Search"
                  className="navbar-search"
                />
              </div>
            </>
          )}

          {!isDesktop && (
            <>
              {isTablet && !isMobileSearch && (
                <Nav
                  className="custom-navbar-buttons-main"
                  style={{
                    width: "100%",
                  }}
                >
                  {LeftMenu}
                </Nav>
              )}
              <div className="form-search">
                {isMobileSearch && (
                  <FormControl
                    value={queryText}
                    onChange={onSearchQueryChanged}
                    type="text"
                    placeholder="Search"
                    name="Search"
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
                  aria-label="Search"
                  style={{
                    borderRadius: isMobileSearch
                      ? "0rem 0.4rem 0.4rem 0rem"
                      : "0.4rem",
                    margin: "0rem 0.5rem 0rem 0rem",
                  }}
                >
                  <i
                    className={isMobileSearch ? "fa fa-close" : "fa fa-search"}
                  ></i>
                </Button>
              </div>
            </>
          )}

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ display: isMobileSearch ? "none" : undefined }}
          />
        </Flex>

        <Navbar.Collapse id="responsive-navbar-nav">
          {!isDesktop && (
            <Nav className="custom-navbar-buttons-me">
              {isMobile ? HiddenMenuMobile : HiddenMenuTablet}
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
