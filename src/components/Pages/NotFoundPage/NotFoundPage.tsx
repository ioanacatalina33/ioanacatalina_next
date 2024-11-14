import React from "react";

import { HomeContainers } from "components";

export const NotFoundPage = () => {
  return (
    <div className="App">
      <h2>The page you were looking for could not be found.. :( </h2>
      <div style={{ width: "100%" }}>
        <h3 style={{ textAlign: "center" }}>But you can check this! </h3>{" "}
        <HomeContainers />
      </div>
    </div>
  );
};
