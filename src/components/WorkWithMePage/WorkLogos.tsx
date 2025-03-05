import { Flex } from "components/UI/Flex/Flex";
import { useScreenType } from "hooks";

const logos12 = (
  <>
    <div style={{ flex: 1, padding: "1rem", maxWidth: "12rem" }}>
      <img
        style={{ width: "100%" }}
        src="/img/photos/workwithme/logos/sensidev.jpg"
        alt="Sensidev"
      />
    </div>
    <div style={{ flex: 1, padding: "1rem", maxWidth: "10rem" }}>
      <img
        style={{ width: "100%" }}
        src="/img/photos/workwithme/logos/ledidi.jpg"
        alt="Ledidi"
      />
    </div>
  </>
);

const logos34 = (
  <>
    <div style={{ flex: 1, padding: "1rem", maxWidth: "12rem" }}>
      <img
        style={{ width: "100%" }}
        src="/img/photos/workwithme/logos/edreams.jpg"
        alt="Edreams"
      />
    </div>
    <div style={{ flex: 1, padding: "1rem", maxWidth: "10rem" }}>
      <img
        style={{ width: "100%" }}
        src="/img/photos/workwithme/logos/infobest.jpg"
        alt="Infobest"
      />
    </div>
  </>
);

export function WorkLogos() {
  const { isMobile } = useScreenType();
  return (
    <Flex
      fullWidth
      wrap
      align={(a) => a.center}
      justify={(j) => j.center}
      paddingOffset={{ left: isMobile ? 0 : 1, right: isMobile ? 0 : 1 }}
    >
      {isMobile ? (
        <>
          <Flex column>{logos12}</Flex>
          <Flex column>{logos34}</Flex>
        </>
      ) : (
        <>
          {logos12}
          {logos34}
        </>
      )}
    </Flex>
  );
}
