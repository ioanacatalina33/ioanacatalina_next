import { Flex } from "components/UI/Flex/Flex";
import { Paragraph } from "components/UI/Paragraph/Paragraph";

export function WorkCompanies() {
  return (
    <Paragraph>
      <Flex>
        {getTimeline("2020–Present")}
        <WorkInformation>
          <b>Sensidev, Timisoara</b> – Focused on React-based projects as a
          Front-End Developer.
        </WorkInformation>
      </Flex>

      <Flex>
        {getTimeline("2020–2024")}
        <WorkInformation>
          <b>Ledidi, Norway</b> – Worked as a Front-End Developer on a platform
          designed to empower the global health and life sciences community to
          collaborate and conduct innovative research in real time.{" "}
        </WorkInformation>
      </Flex>
      <Flex>
        {getTimeline("2018–2019")}
        <WorkInformation>
          <b>Edreams Project, Barcelona</b> – Contributed to back-end
          development for Edreams website.
        </WorkInformation>
      </Flex>
      <Flex>
        {getTimeline("2014–2018")}
        <WorkInformation>
          <b>Infobest, Timisoara</b> - Worked on Android apps and Java projects.
        </WorkInformation>
      </Flex>
    </Paragraph>
  );
}

type WorkInformationProps = { children?: React.ReactNode };
function WorkInformation({ children }: WorkInformationProps) {
  return (
    <Flex
      style={{
        borderLeft: "2px solid rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          //marginRight: "0.6rem",
          // width: "4rem",
          marginLeft: "-0.37rem",
          marginTop: "-0.08rem",
        }}
      >
        <span className="dot" />
      </div>
      <div
        style={{
          paddingLeft: "1rem",
          paddingBottom: "0.4rem",
        }}
      >
        {children}
      </div>
    </Flex>
  );
}

function getTimeline(text: string) {
  return (
    <span
      style={{
        minWidth: "9rem",
        textAlign: "right",
        paddingRight: "0.8rem",
      }}
    >
      {text}
    </span>
  );
}
