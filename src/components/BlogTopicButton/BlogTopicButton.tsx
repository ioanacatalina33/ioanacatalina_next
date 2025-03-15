import { Button } from "react-bootstrap";

interface BlogTopicButtonProps {
  value: string;
  selected?: boolean;
  onClick?: (value: string) => void;
}

export function BlogTopicButton({
  value,
  selected,
  onClick,
}: BlogTopicButtonProps) {
  const buttonStyle = {
    padding: "0.5rem 1.2rem 0.5rem 1.2rem",
    margin: "0.4rem",
  };

  const styleButtonClicked = {
    backgroundColor: "rgb(var(--primary-color))",
    borderColor: "white",
    color: "#ffffff",
    ...buttonStyle,
  };

  return (
    <Button
      className={"filter-element radius-edge-topic"}
      onClick={() => onClick && onClick(value)}
      name={value}
      style={selected ? styleButtonClicked : buttonStyle}
    >
      {value}
    </Button>
  );
}
