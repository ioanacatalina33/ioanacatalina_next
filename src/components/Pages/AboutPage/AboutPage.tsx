import React from "react";

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
        As you probably noticed, I&apos;ve always had a profound love for nature
        and a deep admiration for the world around us. In my childhood, I had my
        own universe, spending time alone, day dreaming and watching
        documentaries on Animal Planet, hoping that one day I will be that
        explorer going on the adventure. Even though things didn&apos;t go quite
        like that, I am seeing my dreams coming true, one by one. Along the
        years I&apos;ve discovered other passions and hobbies as well, just more
        ways of blessing and cherishing life.
      </div>

      <div className="text-container">
        Anything that involves nature, animals, outdoors, arts, or dance - I
        will be there, happy to be a part of it or present in it, acknowledging
        and probably taking a picture.
      </div>

      <ImageCollage photos={getPhotosForCollage(0)} alt="Adventures" />
      {/* Adventure pics */}

      <div className="text-container">
        I created this website firstly for me, to keep track and have a{" "}
        <span className="text-container-bold">database</span> for my many albums
        of all the trips and events I’ve been to. Having a programmer mind, I
        designed the filtering mechanism and the whole site just the way I
        wanted, to be easy to find and see the data that I want.
      </div>

      <div className="text-container">
        I don’t wish to be a blogger, Instagrammer, or content creator. There
        are many out there doing a great job, but I don’t see myself in those
        roles, at least for now. I simply have a deep desire to{" "}
        <span className="text-container-bold">explore the world</span> and
        capture its beauty through my lenses.
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

      <ImageCollage photos={getPhotosForCollage(1)} alt="About me" />

      <div className="text-container">
        I remember I was using my first camera on film, the family camera, when
        I was only 13 years old, taking photos of my dog. At 14 years old, my
        dad bought me my first digital camera, which to me was a miracle. From
        having only 24 or 36 shots per film, to being able to take 200-300
        digital photos only to copy them to the computer and start again without
        paying for another film… was overwhelming. Later on I upgraded to a
        semi-professional camera, since 2009 I’ve owned DSLRs and in 2018 I
        added mirrorless to my collection.
      </div>

      <div className="text-container">
        From nature, animals, wildlife, dog shows, pets to traveling, dancing,
        hiking, winter sports, exploring new places, I’ve managed to combine
        them all very well during the years with my passion for photography.
        Between the ages of 14 and 18, I used to be a photographer at{" "}
        <span className="text-container-bold">dog shows</span> in Romania and
        other nearby countries, taking pictures for dog breeders.
      </div>

      {/* Dog shows */}
      <ImageCollage photos={getPhotosForCollage(2)} alt="Dogs" />

      <div className="text-container">
        Later on, I started traveling with other landscape photographers to
        stunning places in the middle of nature, catching unforgettable sunsets,
        dreamy mornings with fog above villages, capturing the{" "}
        <span className="text-container-bold">rural life of Romania</span> and
        the whole nature across the country.
      </div>

      {/* Travel */}
      <ImageCollage photos={getPhotosForCollage(4)} alt="Dancing" />

      <div className="text-container">
        In 2010 I discovered{" "}
        <span className="text-container-bold">dancing</span>, another huge
        passion that has remained with me to this day. Since 2015 I&apos;ve been
        traveling to{" "}
        <span className="text-container-bold">Brazilian Zouk dance events</span>{" "}
        around the world as both a photographer and dancer. Thanks to this hobby
        I&apos;ve connected with an incredible community that I meet at
        festivals all over the world. I feel truly blessed to have found this
        passion for dance, but my words will never be enough to describe the
        intensity of the moment we get to experience through dancing. I can only
        hope the photos show a glimpse of the heaven we’ve found..
      </div>

      {/* Dancing */}
      <ImageCollage photos={getPhotosForCollage(3)} alt="Traveling" />

      <div className="text-container">
        Besides dancing events, I simply love traveling—whether it’s to visit
        friends, explore places I’ve read about, or organize trips and hikes in
        the middle of the nature to capture its beauty in pictures. Or… as I am
        preparing now, to leave home for a while and just ‘go’ nomad.
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
          Articles where my photos had been published:
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
        Special mention about my dear{" "}
        <span className="text-container-bold">
          Golden Retriever girl, Geena{" "}
        </span>
        , who brightened my life for 15 wonderful years, leaving me with
        cherished memories that will forever hold a special place in my heart.
        Geena was more than just a pet; she was a star known far and wide. From
        my college days to dance school and international dog shows where she
        earned the title of International Show Champion, Geena was not only a
        companion but also a beloved travel partner on my many adventures
        throughout Romania.
      </div>

      {/* <includeCanvasPopCss /> */}

      {/* <button data-cp-url="https://www.ioanacatalina.com/img/photos/aboutme_adventures/pic2.jpg">Buy Now</button> */}

      <ImageCollage
        photos={getPhotosForCollage(5)}
        alt="Geena my Golden Retriever"
      />

      <GeenaLinks />

      <AlbumMyLife />
    </div>
  );
};
