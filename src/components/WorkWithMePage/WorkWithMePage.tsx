import React from "react";
import { StaticPage } from "types/enums";
import { useFullScreenlayer } from "hooks/useFullScreenLayer";
import { Flex } from "components/UI/Flex/Flex";
import { useScreenType } from "hooks";
import { Paragraph } from "components/UI/Paragraph/Paragraph";
import { Spacer } from "components/UI/Spacer/Spacer";
import { WorkLogos } from "./WorkLogos";
import { WorkCompanies } from "./WorkCompanies";
import { collaborativeDanceEvents } from "staticModel";
import Link from "next/link";
import YoutubeEmbed from "components/UI/YoutubeComponent/YoutubeComponent";
import { imageContainer } from "helpers/imageContainer";

export const WorkWithMePage = () => {
  const FullSizeLayer = useFullScreenlayer(StaticPage.WORK_WITH_ME);
  const { isMobile } = useScreenType();

  function getLogo(src: string, alt: string) {
    return (
      <img
        style={{
          maxHeight: "3.7rem",
          margin: "0 auto",
          marginTop: isMobile ? "1rem" : "1rem",
          marginBottom: "1rem",
        }}
        src={src}
        alt={alt}
      />
    );
  }

  return (
    <Flex className_="App">
      {FullSizeLayer}
      <main>
        <h2>Work with me</h2>
        <Flex column style={{ maxWidth: "var(--content-width)" }}>
          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            {imageContainer({
              src: "/img/photos/workwithme/me1.jpg",
              alt: "Work with me",
              funnyBorderRadius: true,
            })}

            <Paragraph rightSide>
              With a software engineering career that began in 2014 and over 18
              years of photography experience, I’ve had the opportunity to work
              across diverse industries and regions, contributing to both
              creative and technical projects.
              <Spacer size={(s) => s.xs} />
              What began as a teenage passion for photography has led me to
              diverse roles, from capturing dog shows and dance events to
              conducting photo sessions and focusing on nature and landscape
              photography.
              <Spacer size={(s) => s.xs} />
              Working in both the tech and creative fields has sharpened my
              attention to detail and given me a unique perspective, blending
              creativity with logical problem-solving in everything I do.
            </Paragraph>
          </Flex>
          <Paragraph leftSide>
            I am currently open to new opportunities in projects focused on the
            environmental sectors, including climate change, biodiversity, and
            sustainability. Through my photography and videography, I also aim
            to inspire others to appreciate and protect our planet, using visual
            storytelling to inspire action and drive positive change.
          </Paragraph>
          {getLogo("/img/logo_tree_color.png", "Tree")}

          <Spacer size={(s) => s.m} withBorder />
          <h3 style={{ textAlign: "center" }}>Software Engineering</h3>

          <Paragraph>
            Over the years, I’ve worked both independently and as part of teams
            on a variety of web and mobile applications, contributing to the
            entire development lifecycle. This includes defining requirements,
            making architectural decisions, implementing code, and handling
            testing, deployment, and ongoing maintenance.
            <Spacer size={(s) => s.xs} />
            As a former Java developer with 6 years of experience, and now
            specializing in Front-End development with React and TypeScript, I
            focus on delivering clean, maintainable code and building robust
            architectures, ensuring that projects are not only functional but
            also easy to extend.
            <Spacer size={(s) => s.xs} />
            In addition to my software development experience, I also have a
            background in graphic design and UX. I’m passionate about these
            fields and have often taken on both design and UX roles in my own
            projects.
            <Spacer size={(s) => s.xs} />
          </Paragraph>
          <Paragraph>
            Some of the notable projects and companies I’ve worked with:
          </Paragraph>
          <WorkCompanies />
          <WorkLogos />

          <Spacer size={(s) => s.m} withBorder />
          <h3 style={{ textAlign: "center" }}>Photography</h3>
          <Paragraph>
            My photography focuses on several key areas, each with its own story
            and purpose:
          </Paragraph>

          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            <Paragraph leftSide flex={1.6}>
              <h5>Nature and Landscape</h5>
              Since I first started photography, nature and landscape have been
              some of my primary areas of focus. My landscape photos have been
              sold on various photography platforms and featured in numerous
              online articles. One of my favorite leisure activities is planning
              photography trips to capture those magical moments in nature.
            </Paragraph>
            {imageContainer({
              src: "/img/photos/workwithme/landscape.jpg",
              alt: "Nature and Landscape photography",
            })}
          </Flex>

          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            {!isMobile &&
              imageContainer({
                src: "/img/photos/workwithme/wildlife.jpg",
                alt: "Wildlife and Conservation",
              })}
            <Paragraph rightSide flex={1.6}>
              <h5>Wildlife and Conservation</h5>
              Wildlife and conservation photography is a field that has always
              been close to my heart and is now my primary focus. I take
              photographs to raise awareness about biodiversity and contribute
              to conservation efforts. If you represent an organization or
              institute that needs wildlife or nature photography for
              conservation, research, or awareness campaigns, I am happy to
              offer both my portfolio and photography services.
            </Paragraph>
            {isMobile &&
              imageContainer({
                src: "/img/photos/workwithme/wildlife.jpg",
                alt: "Wildlife and Conservation",
              })}
          </Flex>

          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            <Paragraph leftSide flex={1.6}>
              <h5>Adventure and Exploration</h5>
              Traveling with others has given me the opportunity to photograph
              people in action in the heart of wild nature. These experiences
              have fueled my passion for adventure photography, capturing the
              human spirit as it connects with the natural world.
            </Paragraph>
            {imageContainer({
              src: "/img/photos/workwithme/adventure.jpg",
              alt: "Adventure and Exploration",
            })}
          </Flex>

          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            {!isMobile &&
              imageContainer({
                src: "/img/photos/workwithme/travel2.jpg",
                alt: "* Travel Photography",
              })}
            <Paragraph rightSide flex={1.6}>
              <h5>Travel Photography</h5>
              My love for travel, particularly in my younger years, has allowed
              me to visit and experience diverse cultures and landscapes. This
              has shaped my deep empathy for our planet and reinforced a deep
              sense of connection with the world around me. Travel photography
              is a way for me to document and share the beauty and diversity of
              the world.
            </Paragraph>
            {isMobile &&
              imageContainer({
                src: "/img/photos/workwithme/travel2.jpg",
                alt: "* Travel Photography",
              })}
          </Flex>
          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            <Paragraph leftSide flex={1.6}>
              <h5>Photo Sessions and Events</h5>
              Over the years, I’ve also taken on various photo sessions, wedding
              photography, newborn shoots, and event photography, mostly through
              personal connections and requests from friends. Through these
              sessions, I’ve been able to explore diverse styles and capture
              meaningful moments with a more personal touch.
            </Paragraph>
            {imageContainer({
              src: "/img/photos/workwithme/people.jpg",
              alt: "Photo Sessions and Eventsy",
            })}
          </Flex>

          <Flex column={isMobile ? true : false} align={(a) => a.center}>
            {!isMobile &&
              imageContainer({
                src: "/img/photos/workwithme/dance.jpg",
                alt: "Dance Events",
              })}
            <Paragraph rightSide flex={1.6}>
              <h5>Dance Events</h5>
              Since 2015, I’ve had the privilege of photographing dancers at
              Brazilian Zouk festivals around the world. I’ve collaborated with
              some of the most respected Zouk events organizers to capture
              moments of joy and movement on the dance floor, celebrating the
              energy and connection that dance brings.
            </Paragraph>
            {isMobile &&
              imageContainer({
                src: "/img/photos/workwithme/dance.jpg",
                alt: "Dance Events",
              })}
          </Flex>
        </Flex>
        <Flex
          className_="filters-background"
          column
          align={(a) => a.center}
          marginOffset={{ top: 3, bottom: 1 }}
          paddingOffset={{ top: 1, bottom: 1 }}
          fullWidth
        >
          <h4 style={{ color: "rgba(255,255,255,0.9)" }}>
            Brazilian Zouk events and organizers I’ve worked with:
          </h4>

          <div style={{ width: "100%", maxWidth: "70rem", margin: "1rem" }}>
            {collaborativeDanceEvents.map((organizer, index) => {
              return organizer.logo !== "" && organizer.logo !== undefined ? (
                <img
                  className="logos-element-collaborations" //col-4 col-md-3 col-lg-2 col-xxl-1 justify-content-around
                  key={index}
                  src={organizer.logo}
                  alt={organizer.logo}
                ></img>
              ) : (
                ""
              );
            })}
          </div>
          {/* </ButtonToolbar>{" "} */}
        </Flex>
        <Paragraph centered>
          To see the dance events albums{" "}
          <Link
            scroll={false}
            href="/dance"
            // className="custom-navbar-link links-small"
          >
            follow this link
          </Link>
          .
        </Paragraph>
        {getLogo("/img/logo_camera_color.png", "Tree")}
        <Spacer size={(s) => s.m} withBorder />
        <h3 style={{ textAlign: "center" }}>Videography</h3>
        <Flex column style={{ maxWidth: "var(--content-width)" }}>
          <Paragraph>
            While photography has been my primary focus, I’ve also ventured into
            videography, creating travel videos that document nature and the
            beauty of our planet. Looking ahead, I plan to focus more on
            documenting the causes and consequences of climate change, the human
            impact on the environment, as well as exploring potential solutions.
            If you have a project or idea that aligns with my vision, feel free
            to reach out. I’m always open to collaboration.
          </Paragraph>
        </Flex>
        <Flex
          column
          fullWidth
          style={{ maxWidth: "45rem" }}
          paddingOffset={{ top: 2, bottom: 2 }}
        >
          <YoutubeEmbed embedId="BzC8JBbIRfQ" />
          <Spacer size={(s) => s.m} />
          <YoutubeEmbed embedId="Lsz5g945484" />
          <Spacer size={(s) => s.m} />
          <YoutubeEmbed embedId="quBttnUH7as" />
        </Flex>

        <Paragraph centered>
          For more details don't hesitate to{" "}
          <Link scroll={false} href="/contact">
            reach out
          </Link>
          .
        </Paragraph>
      </main>
    </Flex>
  );
};
