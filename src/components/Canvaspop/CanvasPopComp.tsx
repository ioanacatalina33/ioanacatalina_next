import React from "react";

import useCanvasPopScript from "hooks/useCanvasPopScript";

export const CanvasPopComp = (props) => {
  useCanvasPopScript("https://use.typekit.net/foobar.js");

  return (
    <div
      style={{ width: "1000px" }}
      id="cp-store-root"
      data-cp-settings={
        '{ "access_key": "' +
        process.env.REACT_APP_CANVASPOP +
        '" , "modal": true }'
      }
    >
      {" "}
    </div>
  );
  // rest of your component
};
