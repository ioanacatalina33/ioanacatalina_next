import ReactGA from "react-ga";
import React, { useEffect } from "react";

import { LinksPageType, StaticPage } from "types/enums";
import { getPhotosForCollage } from "staticModel";
import { ImageCollage } from "components/UI/ImageCollage";
import { LinksContainer } from "components/UI/LinksContainer";
import { AlbumMyLife } from "components/UI/AlbumMyLife";

import { GeenaLinks } from "./GeenaLinks";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";

export const AboutPage = () => {
  const FullSizeLayer = useFullScreenlayer(StaticPage.ABOUT);

  return (
    <div className="App">
      {FullSizeLayer}

      <h2>About me</h2>

      <div className="text-container">
        As you can probably guess, I love{" "}
        <span className="text-container-bold">life</span> and admire the world
        around us a lot. As a child, I’ve had my own universe, spending time
        alone, day dreaming most of the time and watching documentaries on
        Animal Planet and Discovery Channel. I could not stop admiring nature
        and the Earth’s beauties, hoping that one day I will be that explorer
        from Animal Planet going on the adventure. Even though things didn’t go
        quite like that, I am seeing all my dreams coming true, one by one.
        Along the years I’ve discovered other passions and hobbies as well, just
        more ways of blessing and cherishing life.
      </div>

      <div className="text-container">
        Anything that implies nature, animals, outdoos, arts, ways of
        expression, feelings, connection, balance, I will be there, happy to be
        part of it or present in it, acknowledging and, probably taking a
        picture.
      </div>

      <ImageCollage photos={getPhotosForCollage(0)} />
      {/* Adventure pics */}

      <div className="text-container">
        I created this website firstly for me, to keep track and have a{" "}
        <span className="text-container-bold">database</span> for my many albums
        of all the trips and events I’ve been to. Having a programmer mind, I
        designed the filtering mechanism and the whole site just the way I
        wanted, to be easy to see the data that I want.
      </div>

      <div className="text-container">
        I don’t wish to be a travel photographer blogger or instagrammer or
        content creator.. There are many out there that are doing an amazing
        thing but, I don’t find myself in that, at least for now. I just have a
        huge hunger to{" "}
        <span className="text-container-bold">explore the world</span> and see
        it from every angle.
      </div>

      <div className="text-container">
        Passion for <span className="text-container-bold">photography</span>{" "}
        came so naturally to me during my younger years that I had never paid
        attention to this growing hobby that today has become such an important
        part of my life. There are some concrete reasons why photography
        conquered my heart. While I see this world so beautiful and mysterious,
        I’ve also had a desire to share my admiration and show others what I
        feel about everything that surrounds us. Since I’ve always had a
        struggle with writing or putting into words what I think and feel, in
        photography I found a way of expression. Something simpler and more
        natural to me. Later on, dancing came into my life, which became another
        amazing magical way of expression.
      </div>

      <ImageCollage photos={getPhotosForCollage(1)} />

      <div className="text-container">
        I remember I was using my first camera on film, the family camera, when
        I was 13 years old, taking photos of my dog. In 2004, at 14 years old, I
        had my first digital camera, which to me was a miracle. From having only
        24 or 36 shots per film, to being able to take 200-300 digital photos
        only to copy them to the computer and start again without paying for
        another film… was overwhelming. At 17 I upgraded to a semi-professional
        camera, since 2009 I’ve owned DSLRs and in 2018 I added mirrorless to my
        collection!
      </div>

      <div className="text-container">
        From nature, animals, wildlife, dog shows, pets to traveling, dancing,
        hiking, winter sports, exploring new places, I’ve managed to combine
        them all very well during the years with my passion for photography.
        Between 14 and 18 I used to be a photographer at{" "}
        <span className="text-container-bold">dog shows</span> in Romania and
        other countries nearby, taking pictures of dogs for breeders.
      </div>

      {/* Dog shows */}
      <ImageCollage photos={getPhotosForCollage(2)} />

      <div className="text-container">
        Later, after I started working and had my own money, I went traveling
        with other landscape photographers to stunning places in the middle of
        nature, catching unforgettable sunsets, dreamy mornings with fog above
        villages, capturing the{" "}
        <span className="text-container-bold">rural life of Romania</span> and
        the whole nature across the country.
      </div>

      {/* Travel */}
      <ImageCollage photos={getPhotosForCollage(4)} />

      <div className="text-container">
        In 2010 I discovered{" "}
        <span className="text-container-bold">dancing</span>, another huge
        passion that stayed with me till present. Today I go to{" "}
        <span className="text-container-bold">Brazilian Zouk dance events</span>{" "}
        around Europe as a photographer and dancer. Thank to this hobby I've met
        an amazing community that I’ve been seeing at different festivals
        everywhere around the world. I feel truly blessed I found this passion
        and dance.. But my words will never be enough to describe the feelings
        and intensity of the moment I get to experience through dancing. I can
        only hope the photos show a glimpse of the heaven we’ve found..
      </div>

      {/* Dancing */}
      <ImageCollage photos={getPhotosForCollage(3)} />

      <div className="text-container">
        Besides dancing events, I love traveling on every occasion, either if
        it’s for visiting friends abroad, to see a place I read about or
        organize trips and hikes in the middle of the nature to catch those
        perfect moments of the day in pictures. Or… as I am preparing now, to
        leave home for a while and just ‘go’ nomad.
      </div>

      <div
        className="text-container text-centered"
        style={{ paddingTop: "3rem" }}
      >
        <span className="text-container-bold">
          Some links with my profiles and portofolio:
        </span>
      </div>

      <LinksContainer containerType={LinksPageType.MyStory} />

      <div
        className="text-container text-centered"
        style={{ padding: "3rem 2rem 0rem 2rem" }}
      >
        <span className="text-container-bold">
          Some articles where I had my photos published:
        </span>
      </div>

      <div
        className="text-container text-centered"
        style={{ paddingBottom: "4rem" }}
      >
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlined"
            href="https://www.shutterstock.com/blog/secrets-epic-mountain-shots"
          >
            Shutterstock - secret epic mountain shots
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlined"
            href="https://medium.com/@maria.c.suta/zouk-the-art-of-connection-6d9ced359852"
          >
            Medium - Zouk: The art of connection by Maria Cristina Suta
          </a>
        </div>
      </div>

      <div className="text-container" style={{ display: "block" }}>
        Special mention about my awesome dog.. a{" "}
        <span className="text-container-bold">
          Golden Retriever girl, Geena{" "}
        </span>
        , that I feel so blessed to have. She is actually a real star, since a
        lot of people know her from all over the world. She was popular at my
        college, at my dance school, dog shows - she’s an International Show
        Champion and my travel companion in many of my adventures in Romania.
      </div>

      {/* <includeCanvasPopCss /> */}

      {/* <button data-cp-url="https://www.ioanacatalina.com/img/photos/aboutme_adventures/pic2.jpg">Buy Now</button> */}

      <ImageCollage photos={getPhotosForCollage(5)} />

      <GeenaLinks />

      <AlbumMyLife />
    </div>
  );
};
