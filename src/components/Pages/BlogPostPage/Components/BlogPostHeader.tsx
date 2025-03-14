import ContentBlogImage from "components/Contentful/BlogPost/ContentBlogImage";
import { Spacer } from "components/UI/Spacer/Spacer";
import { getBlogDate } from "helpers";
import { useScreenType } from "hooks";
import { BlogAuthor, BlogImage } from "types";

interface Props {
  title: string;
  date: string;
  author: BlogAuthor;
  headerImage: BlogImage;
  read?: number;
}

export function BlogPostHeader({ title, date, headerImage, read = 5 }: Props) {
  const { isDesktop, isMobile } = useScreenType();
  return (
    <>
      <div className="defaultWidth" style={{ width: "100%" }}>
        <Spacer size={(s) => (isDesktop ? s.m : s.s)} />
        <h1>{title}</h1>
        {!isMobile && <Spacer size={(s) => s.xs} withBorder />}
        <span style={{ opacity: "0.7" }}>
          {getBlogDate(new Date(date))} &nbsp; · &nbsp; {read} min read
        </span>
        <ContentBlogImage {...headerImage.fields} isHeader />
      </div>
    </>
  );
}
