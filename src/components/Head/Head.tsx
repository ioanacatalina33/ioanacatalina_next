import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { AlbumDetails, BlogPostCard, Routes } from "types";
import { rootPath } from "helpers";

import {
  getMetaForBlog,
  getMetaForBlogPost,
  getMetaForCollaborations,
  getMetaForContact,
  getMetaForDance,
  getMetaForDanceAlbum,
  getMetaForHighlights,
  getMetaForHighlightsAlbum,
  getMetaForHome,
  getMetaForMap,
  getMetaForMyStory,
  getMetaForTravel,
  getMetaForTravelAlbum,
  getMetaForWorkWithMe,
  MetaData,
} from "./MetaHelper";

interface MetaProps {
  album?: AlbumDetails;
  blogPost?: BlogPostCard;
}

export const Meta = ({ album, blogPost }: MetaProps) => {
  const { pathname, query } = useRouter();

  const canonical =
    rootPath +
    (query.id ? pathname.replace("[id]", query.id.toString()) : pathname);

  let metaData: MetaData;

  if (query.id && !album && !blogPost) return <></>;

  switch (pathname) {
    case Routes.Home:
      metaData = getMetaForHome();
      break;
    case Routes.Map:
      metaData = getMetaForMap();
      break;
    case Routes.Travel:
    case Routes.TravelAll:
      metaData = getMetaForTravel();
      break;
    case Routes.Dance:
    case Routes.DanceAll:
      metaData = getMetaForDance();
      break;
    case Routes.Highlights:
      metaData = getMetaForHighlights();
      break;
    case Routes.Collaborations:
      metaData = getMetaForCollaborations();
      break;
    case Routes.WorkWithMe:
      metaData = getMetaForWorkWithMe();
      break;
    case Routes.About:
      metaData = getMetaForMyStory();
      break;
    case Routes.Contact:
      metaData = getMetaForContact();
      break;
    case Routes.AlbumDance:
      metaData = getMetaForDanceAlbum(album);
      break;
    case Routes.AlbumHighlights:
      metaData = getMetaForHighlightsAlbum(album);
      break;
    case Routes.AlbumTravel:
      metaData = getMetaForTravelAlbum(album);
      break;
    case Routes.Blog:
      metaData = getMetaForBlog();
      break;
    case Routes.BlogArticle:
      metaData = getMetaForBlogPost(blogPost);
      break;
    default:
      metaData = getMetaForHome();
      break;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{metaData.title}</title>
        <meta name="keywords" content={metaData.keywords} />
        <meta name="description" content={metaData.description} />
        {/* <meta name="url" content={url} /> */}

        <meta
          property="og:title"
          content={metaData.ogtitle ? metaData.ogtitle : metaData.title}
        />
        <meta
          property="og:description"
          content={
            metaData.ogdescription !== undefined
              ? metaData.ogdescription
              : metaData.description
          }
        />
        <meta
          property="og:image"
          content={
            blogPost ? "https:" + metaData.ogimage : rootPath + metaData.ogimage
          }
        />
        <meta
          property="og:type"
          content={metaData.ogtype ? metaData.ogtype : "website"}
        />
        <meta property="og:url" content={canonical} />
        <meta name="og:site_name" content="Ioana Catalina E. Photography" />
        <meta name="og:email" content="ioana.echim@gmail.com" />
        <meta name="og:latitude" content="45.7489" />
        <meta name="og:longitude" content="21.2087" />
        {metaData.author && (
          <meta name="article:author" content={metaData.author} />
        )}

        <link rel="canonical" href={canonical} />
      </Head>
      {/* <h1 style={{ display: "none" }}>{metaData.h1}</h1> */}
    </>
  );
};
