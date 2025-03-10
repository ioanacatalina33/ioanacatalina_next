import { BlogImageFields } from "types";
import { ContentfulImage } from "../Image/ContentfulImage";
import { useScreenType } from "hooks";

interface Props extends BlogImageFields {
  isHeader?: boolean;
}

export function ContentBlogImage({
  description,
  file,
  title,
  isHeader,
}: Props) {
  const { isDesktop } = useScreenType();
  return (
    <figure
      style={{
        paddingTop: "1.6rem",
        paddingBottom: "2rem",
        width: isHeader || isDesktop ? "" : "calc(100% + 2rem)",
        margin: isHeader || isDesktop ? "" : "0rem -1rem 0rem -1rem",
      }}
    >
      <ContentfulImage
        src={file.url}
        alt={title}
        height={file.details.image.height}
        width={file.details.image.width}
        sizes="(max-width: 850px) 100vw, 850px"
        layout="responsive"
      />
      {description && (
        <figcaption className="blog-header-image-text">
          {description}
        </figcaption>
      )}
    </figure>
  );
}

export default ContentBlogImage;
