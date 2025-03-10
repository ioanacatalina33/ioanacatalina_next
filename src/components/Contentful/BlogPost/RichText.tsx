import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES, MARKS } from "@contentful/rich-text-types";
import styled from "styled-components";
import Link from "next/link";
import ContentBlogImage from "./ContentBlogImage";
import YoutubeEmbed from "components/UI/YoutubeComponent/YoutubeComponent";
import YoutubeContentful from "components/UI/YoutubeComponent/YoutubeContentful";

const Header2 = ({ children }) => (
  <h2 style={{ textAlign: "left" }}>{children}</h2>
);
const Header3 = ({ children }) => (
  <h3 style={{ marginTop: "1.6rem" }}>{children}</h3>
);
const Header4 = ({ children }) => (
  <h4 style={{ textAlign: "left" }}>{children}</h4>
);

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <Header2>{children}</Header2>,
    [BLOCKS.HEADING_3]: (node, children) => <Header3>{children}</Header3>,
    [BLOCKS.HEADING_4]: (node, children) => <Header4>{children}</Header4>,
    [INLINES.HYPERLINK]: (node, children) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <Link href={`/blog/${node.data.target.fields.slug}`}>{children}</Link>
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fields = node.data.target.fields;
      return <ContentBlogImage {...fields} />;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return <YoutubeContentful {...node.data.target.fields} />;
      }
    },
  },
};

interface RichTextProps {
  content: Document;
}

const RichText = ({ content }: RichTextProps) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
