import React from "react";

export const GeenaLinks = () => {
  return (
    <div>
      <div className="text-container text-centered">
        A BoredPanda article about her:
        <div className="links-container-wrapper">
          <div className="col text-center links-element">
            <img
              alt=""
              src="/img/sm_boredpanda_on.png"
              className="mystory-socialmedia"
            />
            <a
              className="link-underlined"
              href="https://www.boredpanda.com/i-love-traveling-with-my-golden-retriever-everywhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              boredpanda.com/i-love-traveling-with-my-golden-retriever-everywhere
            </a>
          </div>
        </div>
      </div>

      <div className="text-container text-centered">
        A facebook page dedicated to her:
        <div className="links-container-wrapper">
          <div className="col text-center links-element">
            <img
              alt=""
              src="/img/sm_facebook_on.png"
              className="mystory-socialmedia"
            />
            <a
              className="links-element-text link-facebook"
              href="https://www.facebook.com/Geena-my-Golden-Retriever-1405354306423207"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/Geena-my-Golden-Retriever
            </a>
          </div>
        </div>
      </div>

      <div className="text-container text-centered">
        <div>
          <img
            alt=""
            src="/img/sm_youtube_on.png"
            className="mystory-socialmedia"
          />
          Some old youtube videos with her: &nbsp;{" "}
          <a
            className="links-element-text link-shutterstock"
            href="https://www.youtube.com/watch?v=2UdlqtjZ-GM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link1
          </a>
          &nbsp;&nbsp;
          <a
            className="links-element-text link-shutterstock"
            href="https://www.youtube.com/watch?v=M8LMJUlgdtw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link2
          </a>
        </div>
      </div>

      <div className="text-container text-centered">
        Her pedigree in case by any chance you are a breeder and are interested
        in her ancestry:
        <div className="links-container-wrapper">
          <div className="col text-center links-element">
            <a
              className="links-element-text link-underlined"
              href="https://www.k9data.com/pedigree.asp?ID=393296"
              target="_blank"
              rel="noopener noreferrer"
            >
              K9data - Soulcharisma Wizzdom
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
