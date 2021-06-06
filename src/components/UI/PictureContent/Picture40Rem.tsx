import React from "react";

export function Picture40Rem(src) {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        margin: "2rem 0rem 2rem 0rem",
      }}
    >
      <img
        alt=""
        src={src}
        style={{ height: "auto", maxWidth: "100%", width: "40rem" }}
      />
    </div>
  );
}
