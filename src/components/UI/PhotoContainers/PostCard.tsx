import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { useScreenType } from "hooks";
import { BlogPostCard, ScreenType } from "types";
import { getBlogDate } from "helpers";
import { ContentfulImage } from "components/Contentful/Image/ContentfulImage";
import LazyLoad from "react-lazy-load";

export function PostCard({ post }: { post: BlogPostCard }) {
  const { screenType } = useScreenType();

  const isMobile = useMemo(
    () => screenType === ScreenType.Mobile,
    [screenType],
  );

  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }

  const loadedImage = (
    <ContentfulImage
      src={post.fields.headerPhoto.fields.file.url}
      alt={post.fields.headerPhoto.fields.title}
      sizes="(max-width: 580px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 38vw, 30vw"
    />
  );

  let colsClass = "photo-col col-lg-12 col-sm-12 ";

  const imageComponent = useMemo(
    () => (
      <div className="photo-container" style={{ flex: 1 }}>
        <div
          className="photo-container-img-space border-corner-up"
          style={{ background: "black" }}
        >
          <div
            className="loading-animation border-corner-up"
            style={{ minHeight: show ? "auto" : "13rem", background: "black" }}
          >
            <img
              className="photo-small border-corner-up"
              style={{
                visibility: "hidden",
              }}
              src={"/img/cover_placeholder_.jpg"}
              onLoad={onLoad}
              alt=""
            />
          </div>
          {loadedImage}
        </div>
      </div>
    ),
    [post, isMobile],
  );

  const content = useMemo(
    () => (
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link
          scroll={false}
          href={"/blog/" + post.fields.slug}
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "blue",
          }}
        >
          <PostCardDiv mobile={isMobile}>
            {isMobile && imageComponent}
            <ContentDiv mobile={isMobile}>
              <h3>{post.fields.title}</h3>
              <div style={{ flexGrow: 1 }}>
                {isMobile
                  ? post.fields.summary
                  : post.fields.summary.slice(0, 130)}
                ...
              </div>

              <DateDiv>
                <span>{getBlogDate(new Date(post.fields.date))}</span>
              </DateDiv>
            </ContentDiv>
            {!isMobile && imageComponent}
          </PostCardDiv>
        </Link>
      </div>
    ),
    [post, isMobile, imageComponent],
  );

  return <div>{content}</div>;
}

interface MobileProps {
  mobile?: boolean;
}

const PostCardDiv = styled.div<MobileProps>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  align-items: ${({ mobile }) => (mobile ? "left" : "center")};
  background-color: #ffffff;
  box-shadow:
    rgba(50, 50, 93, 0.3) 0px 1px 1px -6px,
    rgba(0, 0, 0, 0.3) 0px 6px 10px 0px;
  transition: 0.2s;
  max-width: 900px;
  margin: 2rem auto;

  cursor: pointer;

  :hover {
    box-shadow:
      rgba(50, 50, 93, 0.3) 0px 1px 1px -5px,
      rgba(0, 0, 0, 0.5) 0px 9px 12px 0px;
  }
`;

const ContentDiv = styled.div<MobileProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ mobile }) => (mobile ? "1rem" : "0rem 1rem 0rem 2rem")};
  text-align: left;
`;

const DateDiv = styled.div`
  display: flex;
  align-self: flex-end;
  padding-top: 1rem;
  opacity: 0.6;
  justify-content: flex-start;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;
