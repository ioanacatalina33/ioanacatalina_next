import styled from "styled-components";

export const ReactIcon = styled.a<{ darkColor?: boolean; hoverColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
  cursor: pointer;

  svg {
    transition: 0.4s;
    color: ${({ darkColor }) =>
      darkColor ? "rgb(var(--secondary-color))" : "rgb(200, 200,200, 0.7)"};
  }
  svg:hover {
    transition: 0.4s;
    color: ${({ hoverColor }) =>
      hoverColor ? hoverColor : "rgb(var(--primary-color))"};
  }
`;
