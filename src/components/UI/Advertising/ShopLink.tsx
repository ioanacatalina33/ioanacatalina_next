import React from "react";

interface ShopLinkProps {
  fontSize?: number;
  center?: boolean;
}

export function ShopLink({ fontSize, center }: ShopLinkProps) {
  return (
    <div
      style={{
        fontSize: fontSize ? fontSize + "rem" : "1.3rem",
        textAlign: center ? "center" : "left",
        marginBottom: "1rem",
      }}
    >
      You can now buy events photos from:{" "}
      <a
        href="https://ioanacatalina.smugmug.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fec400" }}
      >
        ioanacatalina.smugmug.com
      </a>
    </div>
  );
}
