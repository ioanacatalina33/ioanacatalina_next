import React from "react";

import { Picture40Rem } from "components/UI/PictureContent";
import { LinksContainer } from "components/UI/LinksContainer";
import { LinksPageType, StaticPage } from "types/enums";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";

export const ContactPage = () => {
  const FullSizeLayer = useFullScreenlayer(StaticPage.CONTACT);

  return (
    <div className="App">
      {FullSizeLayer}
      <h2>Contact</h2>

      {/* {Picture40Rem("/img/alwayslate.jpg")} */}

      <div
        style={{
          margin: "4rem 0rem 4rem 0rem",
        }}
      >
        <LinksContainer containerType={LinksPageType.Contact} />
      </div>
    </div>
  );
};
