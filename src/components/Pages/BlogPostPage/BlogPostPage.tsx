import { Flex } from "components/UI/Flex/Flex";
import { BlogPost } from "types";
import { BlogPostHeader } from "./Components/BlogPostHeader";
import { BlogPostBody } from "./Components/BlogPostBody";
import { calculateReadingTime } from "helpers";
import { Meta } from "components/Head";

interface Props {
  post: BlogPost;
}

export function BlogPostPage({ post }: Props) {
  return (
    <>
      <Meta blogPost={post} />
      <Flex className_="App">
        <BlogPostHeader
          {...post.fields}
          headerImage={post.fields.headerPhoto}
          read={calculateReadingTime(post.fields.content)}
        />
        <BlogPostBody post={post} />
      </Flex>
    </>
  );
}
