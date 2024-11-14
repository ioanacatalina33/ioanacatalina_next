import React from "react";
import { PhotoContainerHome } from "components/UI/PhotoContainers";

export const HomeContainers = () => {
  return (
    <div className="row home-container">
      <PhotoContainerHome
        name="My Story"
        url="/about"
        img="/img/Home/mystory.jpg"
      />
      <PhotoContainerHome
        name="Highlights"
        url="/highlights"
        img="/img/Home/highlights.jpg"
      />
      <PhotoContainerHome name="Blog" url="/blog" img="/img/Home/blog.jpg" />

      <PhotoContainerHome name="Map" url="/map" img="/img/Home/map_.jpg" />
      <PhotoContainerHome
        name="Travel"
        url="/travel"
        img="/img/Home/travel.jpg"
      />
      <PhotoContainerHome
        name="Work with me"
        url="/work-with-me"
        img="/img/Home/workwithme.jpg"
      />
    </div>
  );
};
