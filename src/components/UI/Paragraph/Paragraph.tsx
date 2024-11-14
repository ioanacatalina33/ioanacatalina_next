import { useScreenType } from "hooks";

interface ParagraphProps {
  leftSide?: boolean;
  rightSide?: boolean;
  children?: React.ReactNode;
  flex?: number;
  centered?: boolean;
}

export function Paragraph({
  children,
  leftSide,
  rightSide,
  flex = 1.5,
  centered,
}: ParagraphProps) {
  const { isMobile } = useScreenType();
  return (
    <div
      className="text-container"
      style={{
        width: "100%",
        flex: flex,
        textAlign: centered ? "center" : "left",
        paddingRight: isMobile || !leftSide ? "1rem" : "2rem",
        paddingLeft: isMobile || !rightSide ? "1rem" : "2rem",
      }}
    >
      {children}
    </div>
  );
}
