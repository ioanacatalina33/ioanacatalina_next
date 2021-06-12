import React from "react";
import { useScreenType } from "hooks";
import { NavDropdown } from "react-bootstrap";
import { Colors } from "helpers/const";
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
                color: dropdownOpen ? Colors.primary : "",
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
            <Link scroll={false} href="/about">
              My Story
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link scroll={false} href="/highlights">
              Highlights
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link scroll={false} href="/collaborations">
              Collaborations
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
