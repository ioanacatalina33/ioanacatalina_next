import React from "react";

import { HomeContainers } from "components";

export const NotFoundPage = () => {
  return (
    <div style={{ paddingTop: "3rem" }}>
      <h2>The page you were looking for could not be found.. :( </h2>
      <h2 style={{ fontSize: "1.5rem" }}>But you can check this! :) </h2>{" "}
      <HomeContainers />
    </div>
  );
};
