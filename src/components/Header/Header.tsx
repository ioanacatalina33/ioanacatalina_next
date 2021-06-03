import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, FormControl, Button, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { updateQueryText, updateMobileSearch } from "store";
import { useSelector } from "hooks/utils";
import { ScreenType } from "helpers/enums";

export const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  const screenType = useSelector((state) => state.app.screenType);
  const queryText = useSelector((state) => state.app.queryText);
  const isMobileSearch = useSelector((state) => state.app.isMobileSearch);

  useEffect(() => {
    setIsOnTop(window.pageYOffset === 0);
  }, []);

  function handleScroll() {
    setIsOnTop(window.pageYOffset === 0);
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
    setDropDownOpen(false);
  }

  function onMouseEnter() {
    setDropDownOpen(true);
  }

  function onMouseLeave() {
    setDropDownOpen(false);
  }

  function allowInvisibleBackground(pathname) {
    // return (
    //   pathname === "/" ||
    //   pathname === "/travel" ||
    //   pathname === "/dance" ||
    //   pathname === "/mystory" ||
    //   pathname === "/highlights" ||
    //   pathname === "/contact" ||
    //   pathname === "/collaborations" ||
    //   pathname === "/travel"
    // );
    return false;
  }

  return (
    <>
      <Navbar
        className={
          "custom-navbar " +
          (allowInvisibleBackground(pathname) &&
          isOnTop &&
          screenType === ScreenType.Desktop
            ? "transparent-bg"
            : "visible-bg")
        }
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        {!isMobileSearch && (
          <Link href="/">
            <Navbar.Brand
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
            </Navbar.Brand>
          </Link>
        )}

        {(screenType === ScreenType.Desktop || !isMobileSearch) && (
          <Nav className="custom-navbar-buttons-main mr-auto">
            <div className="mobile-nav-links">
              {screenType !== ScreenType.Mobile && (
                <Link href="/map">
                  <a className="custom-navbar-link">MAP</a>
                </Link>
              )}
              {screenType !== ScreenType.Mobile && (
                <Link href="/travel">
                  <a className="custom-navbar-link">Travel</a>
                </Link>
              )}
              {screenType !== ScreenType.Mobile && (
                <Link href="/dance">
                  <a className="custom-navbar-link">Dance</a>
                </Link>
              )}
              {screenType !== ScreenType.Mobile && (
                <Nav.Link
                  className="custom-navbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.shop.ioanacatalina.com"
                >
                  <span>Shop</span>
                </Nav.Link>
              )}
            </div>
          </Nav>
        )}

        {screenType === ScreenType.Desktop && (
          <NavDropdown
            id={"more"}
            title={
              <div className="collapsible-nav-dropdown">
                {/* <img className="thumbnail-image" src="/img/profile_icon_on.png" alt="Me" /> */}
                More <i className="fa fa-angle-down"></i>
              </div>
            }
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            show={dropdownOpen}
          >
            <NavDropdown.Item>
              <Link href="/mystory">My Story</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/highlights">Highlights</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/collaborations">Collaborations</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/contact">Contact</Link>
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="/mylongtrip">My long trip</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="/travelwithme">Travel with me</NavDropdown.Item> */}
          </NavDropdown>
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
                  className={queryText === "" ? "fa fa-search" : "fa fa-close"}
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
                  <Link href="/map">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      MAP
                    </a>
                  </Link>
                </Nav.Link>
              )}
              {screenType === ScreenType.Mobile && (
                <Nav.Link eventKey="2">
                  <Link href="/travel">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      Travel
                    </a>
                  </Link>
                </Nav.Link>
              )}
              {screenType === ScreenType.Mobile && (
                <Nav.Link eventKey="3">
                  <Link href="/dance">
                    <a style={{ color: "#cccccc", textDecoration: "none" }}>
                      Dance
                    </a>
                  </Link>
                </Nav.Link>
              )}
              {screenType === ScreenType.Mobile && (
                <Link href="/shop">
                  <Nav.Link
                    eventKey="4"
                    className="custom-navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.shop.ioanacatalina.com"
                  >
                    <span>Shop</span>
                  </Nav.Link>
                </Link>
              )}
              <Nav.Link eventKey="5">
                <Link href="/mystory">
                  <a style={{ color: "#cccccc", textDecoration: "none" }}>
                    My story
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="6">
                <Link href="/highlights">
                  <a style={{ color: "#cccccc", textDecoration: "none" }}>
                    Highlights
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="7">
                <Link href="/collaborators">
                  <a style={{ color: "#cccccc", textDecoration: "none" }}>
                    Collaborators
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="8">
                <Link href="/contact">
                  <a style={{ color: "#cccccc", textDecoration: "none" }}>
                    Contact
                  </a>
                </Link>
              </Nav.Link>
              {/* <a className="custom-navbar-link" href="/mylongtrip">My long trip</a> */}
              {/* <NavDropdown.Item href="/travelwithme">Travel with me</NavDropdown.Item> */}
            </Nav>
          )}

          {screenType === ScreenType.Desktop && (
            <div className="navbar-social-buttons-container">
              <div className="navbar-social-buttons-subcontainer">
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.facebook.com/IoanaCatalinaPhotography/"
                >
                  <img
                    src="/img/sm_facebook_off.png"
                    height="20"
                    alt="FB"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "/img/sm_facebook_on.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "/img/sm_facebook_off.png")
                    }
                  />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.instagram.com/ioana.catalina.e/"
                >
                  <img
                    src="/img/sm_instagram_off.png"
                    height="20"
                    alt="FB"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "/img/sm_instagram_on.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "/img/sm_instagram_off.png")
                    }
                  />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.flickr.com/photos/ioana_e/"
                >
                  <img
                    src="/img/sm_flickr_off.png"
                    height="20"
                    alt="FB"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "/img/sm_flickr_on.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "/img/sm_flickr_off.png")
                    }
                  />
                </Nav.Link>
              </div>
              <div className="navbar-social-buttons-subcontainer">
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://500px.com/ioanacatalinae"
                >
                  <img
                    src="/img/sm_500px_off.png"
                    height="20"
                    alt="FB"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "/img/sm_500px_on.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "/img/sm_500px_off.png")
                    }
                  />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.shutterstock.com/g/IoanaCatalinaE"
                >
                  <img
                    src="/img/sm_shutterstock_off.png"
                    height="20"
                    alt="FB"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "/img/sm_shutterstock_on.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "/img/sm_shutterstock_off.png")
                    }
                  />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://yourshot.nationalgeographic.com/profile/1275781/"
                >
                  <img
                    src="/img/sm_nationalgeographic_off.png"
                    height="20"
                    alt="FB"
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "/img/sm_nationalgeographic_on.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src =
                        "/img/sm_nationalgeographic_off.png")
                    }
                  />
                </Nav.Link>
              </div>
            </div>
          )}
          {screenType !== ScreenType.Desktop && (
            <div className="navbar-social-buttons-container">
              <div className="navbar-social-buttons-subcontainer">
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.facebook.com/IoanaCatalinaPhotography/"
                >
                  <img src="/img/sm_facebook_on.png" height="20" alt="FB" />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.instagram.com/ioana.catalina.e/"
                >
                  <img src="/img/sm_instagram_on.png" height="20" alt="FB" />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.flickr.com/photos/ioana_e/"
                >
                  <img src="/img/sm_flickr_on.png" height="20" alt="FB" />
                </Nav.Link>
              </div>
              <div className="navbar-social-buttons-subcontainer">
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://500px.com/ioanacatalinae"
                >
                  <img src="/img/sm_500px_on.png" height="20" alt="FB" />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://www.shutterstock.com/g/IoanaCatalinaE"
                >
                  <img src="/img/sm_shutterstock_on.png" height="20" alt="FB" />
                </Nav.Link>
                <Nav.Link
                  className="navbar-social-button"
                  target="_blank"
                  href="https://yourshot.nationalgeographic.com/profile/1275781/"
                >
                  <img
                    src="/img/sm_nationalgeographic_on.png"
                    height="20"
                    alt="FB"
                  />
                </Nav.Link>
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
