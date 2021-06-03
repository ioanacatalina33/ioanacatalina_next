import React from "react";

import { HomeContainers } from "components/Home";

export const PageNotFound = () => {
  return (
    <div>
      <h2>You just got to a.. 404 Page not found.. :( </h2>
      <h2 style={{ fontSize: "1.5rem" }}>But you can check this! :) </h2>{" "}
      <HomeContainers />
    </div>
  );
};
