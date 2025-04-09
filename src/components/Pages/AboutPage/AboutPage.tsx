import React from "react";

import { LinksPageType, StaticPage } from "types/enums";
import { getPhotosForCollage, PhotosCollageType } from "staticModel";
import { ImageCollage } from "components/UI/ImageCollage";
import { LinksContainer } from "components/UI/LinksContainer";

import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { Paragraph } from "components/UI/Paragraph/Paragraph";
import { Spacer } from "components/UI/Spacer/Spacer";
import { imageContainer } from "helpers/imageContainer";
import { useScreenType } from "hooks";
import { Flex } from "components/UI/Flex/Flex";
import { LinksPortfolio } from "components/UI/LinksPortfolio/LinksPortfolio";
import Link from "next/link";

export const AboutPage = () => {
  const FullSizeLayer = useFullScreenlayer(StaticPage.ABOUT);
  const { isMobile } = useScreenType();

  return (
    <div className="App">
      {FullSizeLayer}
      <main className="main-container">
        <h2>About me</h2>
        <Flex column style={{ maxWidth: "var(--content-width)" }}>
          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            <Paragraph leftSide>
              As you've probably seen in my pictures, I have a profound love for
              nature and a deep admiration for the world around us. As a child,
              I often retreated into my own world, daydreaming and watching
              Animal Planet, hoping that one day I will be that explorer going
              on the adventure. While I may not have taken that exact path, I’m
              seeing my dreams come true in different ways, one by one. Along
              the way, I've discovered other passions — new ways to celebrate
              and cherish life.
            </Paragraph>
            {imageContainer({
              src: "/img/photos/aboutme/pic.jpg",
              alt: "Work with me",
              // funnyBorderRadius: true,
            })}
          </Flex>
        </Flex>
        <Paragraph>
          Anything that involves nature, animals, outdoors, arts, or dance - I’m
          always excited to dive in, be present, immerse myself, and likely snap
          a photo.
        </Paragraph>
        {/* <div className="text-container">
        Anything that involves nature, animals, outdoors, arts, or dance- I’m
        in, excited to be present, immerse myself, and likely snap a picture.
      </div> */}
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.MyAdventures)}
          alt="Adventures"
        />
        {/* Adventure pics */}
        <Paragraph>
          I originally created this website as a personal space to organize and
          catalog the countless albums from my travels and events. With my
          programmer mindset, I designed the site’s filtering system and layout
          to suit my needs—making it easy to access and view the data I cared
          about. Over time, however, the website evolved into something more. I
          found a deeper purpose in it: to inspire others to reconnect with
          nature and cultivate a deeper sense of respect for the world around
          us.
        </Paragraph>
        {/* <div className="text-container">
        I don’t wish to be a blogger, Instagrammer, or content creator. There
        are many out there doing a great job, but I don’t see myself in those
        roles, at least for now. I simply have a deep desire to{" "}
        <span className="text-container-bold">explore the world</span> and
        capture its beauty through my lenses.
      </div> */}
        <Paragraph>
          Passion for <span className="text-container-bold">photography</span>{" "}
          came so naturally to me during my younger years that I had never paid
          attention to this growing hobby that today has become such an
          important part of my life. There are a few key reasons why photography
          captured my heart. While I see this world so beautiful and mysterious,
          I’ve felt a strong desire to share that admiration—showing others what
          I feel about everything around us. In photography, I found a form of
          expression that felt to me more natural and simpler than words. Later
          on, dancing came into my life, which became another amazing magical
          way of expression.
        </Paragraph>
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.Photography)}
          alt="About me"
        />
        <Paragraph>
          I remember I was using my first camera on film, the family camera,
          when I was only 13 years old, taking photos of my dog. At 14 years
          old, my dad bought me my first digital camera, which to me was a
          miracle. From having only 24 or 36 shots per film, to being able to
          take 200-300 digital photos only to copy them to the computer and
          start again… was incredible. Later on I upgraded to a
          semi-professional camera, since 2009 I’ve owned DSLRs and in 2018 I
          added mirrorless to my collection.
        </Paragraph>
        <Paragraph>
          From nature, wildlife, dog shows, pets to traveling, dancing, hiking,
          winter sports, I’ve managed to combine them all very well during the
          years with my passion for photography. Between the ages of 14 and 18,
          I used to be a photographer at{" "}
          <span className="text-container-bold">dog shows</span> in Romania and
          neighbour countries, taking pictures for dog breeders.
        </Paragraph>
        {/* Dog shows */}
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.DogShows)}
          alt="Dogs"
        />
        <Paragraph>
          Later on, in my early 20s, I started traveling with other landscape
          photographers to stunning places in the middle of nature, capturing
          the <span className="text-container-bold">rural life of Romania</span>{" "}
          and the whole nature across the country.
        </Paragraph>
        {/* Travel */}
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.RomaniaTravel)}
          alt="Travel"
        />
        <Paragraph>
          In 2010, I discovered{" "}
          <span className="text-container-bold">dancing</span>—a passion that
          has stayed with me to this day. Since 2015, I’ve been attending
          Brazilian Zouk dance events, both as a photographer and a dancer.
          Through this hobby, I’ve connected with an incredible community of
          people I’ve met at festivals around the world. I truly feel blessed to
          have found this love for dance, though words will never fully capture
          the intensity of the moments we experience through it. I can only hope
          that my photos offer a glimpse into the heaven we’ve found.
        </Paragraph>
        {/* Dancing */}
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.Dancing)}
          alt="Dancing"
        />
        <Paragraph>
          The next chapter of my life was all about traveling the world, a dream
          I’d carried since childhood. In 2019, I quit my job to take a
          sabbatical year and travel through Asia. Unfortunately, my journey was
          cut short by the onset of COVID, but I adapted, transitioned to remote
          work, and eventually became the digital nomad I’ve always envisioned.
        </Paragraph>
        <Paragraph>
          In 2021, my passion for dance led me to{" "}
          <span className="text-container-bold">Rio de Janeiro, Brazil</span>
          —where I found far more than I ever imagined. I ended up calling this
          vibrant city my home for nearly three years. Between 2021 and 2024, I
          grew deeply connected to South America and Brazil, falling in love
          again with the beauty of nature and becoming increasingly aware of the
          urgency to protect it.
        </Paragraph>
        {/* Brazil and South America */}
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.SouthAmerica)}
          alt="Travel"
        />
        <Paragraph>
          Now, after years of traveling to fulfill my dreams, my focus has
          shifted to projects that give back to the world. My recent travels
          through South America in 2024 reignited my appreciation for the
          incredible beauty of nature, and my hope for all of us is to reconnect
          with and protect the magical world that surrounds us.
        </Paragraph>
        {/* Nature */}
        <ImageCollage
          photos={getPhotosForCollage(PhotosCollageType.Nature)}
          alt="Travel"
        />
        <Spacer size={(s) => s.s} />
        <h5 style={{ margin: "1rem", marginTop: "0", textAlign: "center" }}>
          Some links with my profiles and portfolio:
        </h5>
        <LinksContainer containerType={LinksPageType.MyStory} />
        <Spacer size={(s) => s.s} />
        <LinksPortfolio />
        <Spacer size={(s) => s.m} />
        <div className="text-container text-centered">
          For more stories with my travels check out my{" "}
          <Link href="/blog">blog articles!</Link>
        </div>
        {/* <Paragraph>
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
      </Paragraph>

      <ImageCollage
        photos={getPhotosForCollage(5)}
        alt="Geena my Golden Retriever"
      />

      <GeenaLinks /> */}
      </main>
    </div>
  );
};
