import RichText from "components/Contentful/BlogPost/RichText";
import { BlogPost } from "types";

interface Props {
  post: BlogPost;
}

export function BlogPostBody({ post }: Props) {
  return (
    <article className="text-container">
      <RichText content={post.fields.content} />
    </article>
  );
}
