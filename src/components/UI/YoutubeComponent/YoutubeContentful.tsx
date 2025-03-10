import React from "react";
import { Flex } from "../Flex/Flex";

const YoutubeContentful = ({ embedUrl, title }: YoutubeEmbedProps) => (
  <Flex
    column
    fullWidth
    style={{ maxWidth: "45rem", margin: "0 auto" }}
    paddingOffset={{ top: 1.6, bottom: 1.6 }}
  >
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  </Flex>
);

interface YoutubeEmbedProps {
  embedUrl: string;
  title: string;
}

export default YoutubeContentful;
