import ContentBlogImage from "components/Contentful/BlogPost/ContentBlogImage";
import { Spacer } from "components/UI/Spacer/Spacer";
import { getBlogDate, getBlogDateCaption } from "helpers";
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
    <header className="defaultWidth" style={{ width: "100%" }}>
      <Spacer size={(s) => (isDesktop ? s.m : s.s)} />
      <h1 style={{ padding: "1rem" }}>{title}</h1>
      {!isMobile && <Spacer size={(s) => s.xs} withBorder />}
      <span style={{ opacity: "0.7" }}>
        <time dateTime={getBlogDateCaption(new Date(date))}>
          {getBlogDate(new Date(date))}
        </time>{" "}
        &nbsp; · &nbsp; {read} min read
      </span>
      <ContentBlogImage {...headerImage.fields} isHeader />
    </header>
  );
}
