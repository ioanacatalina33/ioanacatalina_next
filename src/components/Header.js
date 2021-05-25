import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "coral" }}>
      <Link href="/map">
        <a>MAP</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link href="/travel">
        <a>Travel</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link href="/dance">
        <a>Dance</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
    </div>
  );
};

export default Header;
