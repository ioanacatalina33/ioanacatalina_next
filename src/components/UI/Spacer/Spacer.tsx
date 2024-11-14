import styled, { css } from "styled-components";

export enum SpaceTypes {
  xs = 0.8,
  s = 1.6,
  m = 2.4,
  l = 3.2,
  xl = 4.8,
  xxl = 6.4,
}

interface Props {
  className?: string;
  withBorder?: boolean;
  borderColor?: string;
  size: (size: typeof SpaceTypes) => SpaceTypes;
}

export function Spacer({ className, size, withBorder, borderColor }: Props) {
  const spaceSize = size(SpaceTypes);

  return (
    <Component
      className={className}
      $size={spaceSize}
      border={withBorder}
      borderColor={borderColor}
    />
  );
}

interface ComponentProps {
  // using `$` before the prop name to avoid DOM errors
  $size: SpaceTypes;
  border?: boolean;
  borderColor?: string;
}
const Component = styled.div<ComponentProps>`
  display: block;
  /* opacity: 0; */
  width: 100%;

  ${({ $size, border, borderColor }) => css`
    height: ${$size}rem;
    min-height: ${$size}rem;
    max-height: ${$size}rem;
    border-top: ${border
      ? "1px solid " + (borderColor ? borderColor : "rgba(0,0,0,0.4)")
      : ""};
  `}
`;
