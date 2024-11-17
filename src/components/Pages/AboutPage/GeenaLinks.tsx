import React from "react";

export const GeenaLinks = () => {
  return (
    <div className="text-container text-centered">
      A BoredPanda article about her:
      <div className="col text-center links-element">
        <img
          alt=""
          src="/img/sm_boredpanda_on.png"
          className="mystory-socialmedia"
        />
        <a
          // className="link-underlined"
          href="https://www.boredpanda.com/i-love-traveling-with-my-golden-retriever-everywhere"
          target="_blank"
          rel="noopener noreferrer"
        >
          boredpanda.com/i-love-traveling-with-my-golden-retriever-everywhere
        </a>
      </div>
      <div className="text-container text-centered">
        A facebook page dedicated to her:
        <div className="col text-center links-element">
          <img
            alt=""
            src="/img/sm_facebook_on.png"
            className="mystory-socialmedia"
          />
          <a
            // className="links-element-text link-facebook"
            href="https://www.facebook.com/Geena-my-Golden-Retriever-1405354306423207"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/Geena-my-Golden-Retriever
          </a>
        </div>
      </div>
    </div>
  );
};
