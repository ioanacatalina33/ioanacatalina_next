import React from "react";
import { PhotoContainerHome } from "components/UI/PhotoContainers";

export const HomeContainers = () => {
  return (
    <div className="row home-container">
      <PhotoContainerHome name="Map" url="/map" img="/img/Home/map.jpg" />
      <PhotoContainerHome
        name="Travel"
        url="/travel"
        img="/img/Home/travel.jpg"
      />
      <PhotoContainerHome name="Dance" url="/dance" img="/img/Home/dance.jpg" />
      <PhotoContainerHome
        name="Highlights"
        url="/highlights"
        img="/img/Home/highlights.jpg"
      />
      <PhotoContainerHome
        name="About me"
        url="/about"
        img="/img/Home/aboutme.jpg"
      />
      <PhotoContainerHome
        name="Collaborations"
        url="/collaborations"
        img="/img/Home/collaborations.jpg"
      />
    </div>
  );
};
