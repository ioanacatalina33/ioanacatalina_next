import Image from "next/image";
import { CSSProperties, ReactEventHandler } from "react";

export const contentfulLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 75}`;
};

interface ContentfulImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  style?: CSSProperties;
  onLoad?: ReactEventHandler<HTMLImageElement>;
}

export const ContentfulImage = ({
  width,
  height,
  ...props
}: ContentfulImageProps) => {
  return (
    <Image
      loader={contentfulLoader}
      {...props}
      fill={width && height ? false : true}
      className="object-cover"
      width={width}
      height={height}
    />
  );
};
