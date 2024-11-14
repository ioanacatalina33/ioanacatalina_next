import React from "react";
import { useScreenType } from "hooks";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { ScreenType } from "types";
import Link from "next/link";

export const HeaderDropdown = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false);

  function onMouseEnter() {
    setDropDownOpen(true);
  }

  function onMouseLeave() {
    setDropDownOpen(false);
  }

  const { screenType } = useScreenType();
  return (
    <>
      {screenType === ScreenType.Desktop && (
        <NavDropdown
          id={"more"}
          title={
            <div
              className="collapsible-nav-dropdown"
              style={{
                color: dropdownOpen
                  ? "rgb(var(--primary-color-hover))"
                  : undefined,
                fontSize: "2rem",
                lineHeight: "0.1rem",
                paddingBottom: "1.3rem",
              }}
            >
              ...
            </div>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          show={dropdownOpen}
        >
          <NavDropdown.Item>
            <Link scroll={false} href="/map">
              Map
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link scroll={false} href="/travel">
              Travel
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link scroll={false} href="/collaborations">
              Work with me
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link scroll={false} href="/contact">
              Contact
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      )}
    </>
  );
};
