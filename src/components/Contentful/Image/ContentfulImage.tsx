import Image from "next/image";

export const contentfulLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 75}`;
};

interface ContentfulImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: string;
  margin?: string;
}

export const ContentfulImage = (props: ContentfulImageProps) => {
  return (
    <Image
      loader={contentfulLoader}
      {...props}
      style={{ margin: props.margin }}
    />
  );
};
