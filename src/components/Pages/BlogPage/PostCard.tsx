import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

import { BlogPost } from "staticModel/Blog/blog";
import { useScreenType } from "hooks";
import { ScreenType } from "types";
import { Button } from "react-bootstrap";
import { Months } from "helpers";

export function PostCard({ post }: { post: BlogPost }) {
  const { screenType } = useScreenType();

  const months = Months;
  const isMobile = screenType === ScreenType.Mobile;

  return (
    <Link
      scroll={false}
      href={"/blog/" + post.url}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {/* <a style={{ textDecoration: "none", color: "inherit" }}> */}
      <PostCardDiv mobile={isMobile}>
        <ImageDiv mobile={isMobile}>
          <Image src={"/img/Blog/" + post.id + ".jpg"} mobile={isMobile} />
        </ImageDiv>
        <ContentDiv mobile={isMobile}>
          <h3>{post.title}</h3>
          <div style={{ flexGrow: 1 }}>{post.text}...</div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              width: "100%",
            }}
          >
            <div style={{ flex: 1 }}>
              <Button
                style={{
                  textAlign: "center",
                  padding: "0.2rem 1rem 0.2rem 1rem",
                  margin: "1rem 0rem 0rem 0rem",
                  color: "#1a1a1a",
                }}
                variant="warning"
              >
                <b>Read more</b>
              </Button>
            </div>
            <div style={{ opacity: "0.3" }}>
              <div
                style={{
                  fontSize: "4rem",
                  fontWeight: 800,
                  lineHeight: "4rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {post.date.getDate() < 10
                  ? "0" + post.date.getDate()
                  : post.date.getDate()}
              </div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "1rem",
                  lineHeight: "1rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {months[post.date.getMonth()].toUpperCase()}{" "}
                {post.date.getFullYear()}
              </div>
            </div>
          </div>
        </ContentDiv>
      </PostCardDiv>
      {/* </a> */}
    </Link>
  );
}

interface MobileProps {
  mobile?: boolean;
}

const PostCardDiv = styled.div<MobileProps>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  box-shadow:
    rgba(50, 50, 93, 0.3) 0px 1px 1px -6px,
    rgba(0, 0, 0, 0.3) 0px 9px 15px 0px;
  transition: 0.2s;
  max-width: 750px;
  margin: 2rem auto;

  cursor: pointer;

  :hover {
    box-shadow:
      rgba(50, 50, 93, 0.3) 0px 1px 1px -5px,
      rgba(0, 0, 0, 0.5) 0px 13px 22px 0px;
  }

  /* &&:after {
    content: "✈️";
  } */
`;

const ImageDiv = styled.div<MobileProps>`
  ${({ mobile }) => css`
    ${!mobile &&
    css`
      position: relative;
    `}

    flex: 1;
  `}
`;

const Image = styled.img<MobileProps>`
  ${({ mobile }) => css`
    flex: 1;
    width: 100%;
    height: auto;

    ${!mobile &&
    css`
      width: 95%;
      position: absolute;
      top: 2rem;
      left: -3rem;
    `}

    box-shadow: rgba(50, 50, 93, 0.3) 0px 1px 1px -5px,
      rgba(0, 0, 0, 0.5) 0px 13px 22px 0px;
  `}
`;

const ContentDiv = styled.div<MobileProps>`
  ${({ mobile }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;

    /* display: flex;
  flex-direction: column; */
    text-align: left;
    padding: 1rem;

    ${!mobile &&
    css`
      padding: 1rem 1rem 1rem 0rem;
      min-height: 20rem;
    `}
  `}
`;

const MaxLinesText = styled.div`
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 4.5rem;
`;
