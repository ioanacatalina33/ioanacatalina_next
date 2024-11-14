import { css } from "styled-components";

export interface Offset {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface StyleOffset extends Offset {
  x?: number;
  y?: number;
  all?: number;
  custom?: number | string;
}

export type StyleOffsets = StyleOffset | false;

export interface SpacingOffsets {
  marginOffset?: StyleOffsets;
  paddingOffset?: StyleOffsets;
}

export function generateSpacingOffsets({
  paddingOffset,
  marginOffset,
}: SpacingOffsets) {
  return css`
    /* MARGIN OFFSET */
    ${getMarginOffset(marginOffset)}
    /* PADDING OFFSET */
		${getPaddingOffset(paddingOffset)}
  `;
}

export function getPaddingOffset(paddingOffset?: StyleOffsets) {
  if (!paddingOffset) return;

  return css`
    padding-top: ${paddingOffset.top !== undefined &&
    `${paddingOffset.top}rem`};
    padding-right: ${paddingOffset.right !== undefined &&
    `${paddingOffset.right}rem`};
    padding-bottom: ${paddingOffset.bottom !== undefined &&
    `${paddingOffset.bottom}rem`};
    padding-left: ${paddingOffset.left !== undefined &&
    `${paddingOffset.left}rem`};

    ${paddingOffset.x !== undefined &&
    paddingOffset.y !== undefined &&
    css`
      padding: ${paddingOffset.y}rem ${paddingOffset.x}rem;
    `}
    ${paddingOffset.x !== undefined &&
    paddingOffset.y === undefined &&
    css`
      padding-left: ${paddingOffset.x}rem;
      padding-right: ${paddingOffset.x}rem;
    `}
		${paddingOffset.y !== undefined &&
    paddingOffset.x === undefined &&
    css`
      padding-top: ${paddingOffset.y}rem;
      padding-bottom: ${paddingOffset.y}rem;
    `}
		${paddingOffset.all !== undefined &&
    css`
      padding: ${paddingOffset.all}rem;
    `}
		${paddingOffset.custom !== undefined &&
    css`
      padding: ${paddingOffset.custom};
    `}
  `;
}

export function getMarginOffset(marginOffset?: StyleOffsets) {
  if (!marginOffset) return;

  return css`
    margin-top: ${marginOffset.top !== undefined && `${marginOffset.top}rem`};
    margin-right: ${marginOffset.right !== undefined &&
    `${marginOffset.right}rem`};
    margin-bottom: ${marginOffset.bottom !== undefined &&
    `${marginOffset.bottom}rem`};
    margin-left: ${marginOffset.left !== undefined &&
    `${marginOffset.left}rem`};

    ${marginOffset.x !== undefined &&
    marginOffset.y !== undefined &&
    css`
      margin: ${marginOffset.y}rem ${marginOffset.x}rem;
    `}
    ${marginOffset.x !== undefined &&
    marginOffset.y === undefined &&
    css`
      margin-left: ${marginOffset.x}rem;
      margin-right: ${marginOffset.x}rem;
    `}
		${marginOffset.y !== undefined &&
    marginOffset.x === undefined &&
    css`
      margin-top: ${marginOffset.y}rem;
      margin-bottom: ${marginOffset.y}rem;
    `}
		${marginOffset.all !== undefined &&
    css`
      margin: ${marginOffset.all}rem;
    `}
		${marginOffset.custom !== undefined &&
    css`
      margin: ${marginOffset.custom};
    `}
  `;
}
