import { Flex } from "components/UI/Flex/Flex";
import { BlogPost, BlogPostCard } from "types";
import { BlogPostHeader } from "./Components/BlogPostHeader";
import { BlogPostBody } from "./Components/BlogPostBody";
import { calculateReadingTime } from "helpers";
import { Meta } from "components/Head";
import BlogWall from "../BlogPage/BlogWall";
import { FollowMe } from "components/UI/FollowMe";
import { Spacer } from "components/UI/Spacer/Spacer";
import { ShareButtons } from "components/UI/Modals/ShareButtons";
import { useScreenType } from "hooks";
import styled from "styled-components";
import { BlogTopicButton } from "components/BlogTopicButton/BlogTopicButton";
import Link from "next/link";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPostCard[];
}

export function BlogPostPage({ post, relatedPosts }: Props) {
  const { isDesktop } = useScreenType();
  const shareButtons = (
    <ShareButtons
      facebook
      twitter
      whatsupp
      pinterest
      vertical={isDesktop ? true : false}
    />
  );
  return (
    <>
      <Meta blogPost={post} />
      {isDesktop && <FixedContainer>{shareButtons}</FixedContainer>}
      <Flex className_="App">
        <BlogPostHeader
          {...post.fields}
          headerImage={post.fields.headerPhoto}
          read={calculateReadingTime(post.fields.content)}
        />
        <BlogPostBody post={post} />
        {!isDesktop && shareButtons}

        <div
          className="text-container"
          style={{
            maxWidth: "var(--content-width)",
            textAlign: "left",
            width: "100%",
          }}
        >
          {post.fields.keywords.map((value, index) => (
            <Link href={"/blog?topics=" + value}>
              <BlogTopicButton value={value} key={index} />
            </Link>
          ))}
        </div>

        <Spacer size={(s) => s.m} />
        <FollowMe invertColors />
        <section>
          <h2>Related articles</h2>
          <BlogWall posts={relatedPosts} />
        </section>
      </Flex>
    </>
  );
}

const FixedContainer = styled.div`
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
