import RichText from "components/Contentful/BlogPost/RichText";
import { BlogPost } from "types";

interface Props {
  post: BlogPost;
}

export function BlogPostBody({ post }: Props) {
  return (
    <div
      className="text-container"
      // style={{ padding: isDesktop ? "0rem" : "0rem 1rem 0rem 0rem" }}
    >
      {/* <Spacer size={(s) => s.s} /> */}
      <RichText content={post.fields.content} />
    </div>
  );
}
