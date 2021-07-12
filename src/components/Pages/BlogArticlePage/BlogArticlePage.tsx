import React, { useState } from "react";

import { FollowMe } from "components/UI/FollowMe";
import { Photowall } from "components/UI/Photowall";
import { useFullScreenlayer, useScreenType } from "hooks";
import { useMemo } from "react";
import { FullBlogPostDetails, getRandomPosts } from "staticModel/Blog/blog";
import { ScreenType, StaticPage } from "types";
import { Location } from "types";

import { MapComponent } from "../MapPage/MapComponent";
import { BlogImagesDisplay } from "./BlogImagesDisplay";
import { sleep } from "helpers";
import { MapAlbums } from "../MapPage/MapAlbums";
import { Meta } from "components/Head";
import { PostCard } from "../BlogPage/PostCard";
import { ArticleSubHeader } from "components/UI/ArticleSubHeader";

interface BlogArticlePageInterface {
  fullPost: FullBlogPostDetails;
}

export function BlogArticlePage({ fullPost }: BlogArticlePageInterface) {
  const { albums, post, images } = fullPost;

  const { screenType } = useScreenType();

  const coverImg = useMemo(
    () => "/img/Blog/" + fullPost.post.id + "_large.jpg",
    [fullPost.post.id]
  );

  const FullSizeLayer = useFullScreenlayer(StaticPage.BLOG, {
    alt: post.id,
    class: "img-loaded-text-center",
    text: post.title,
    url: coverImg,
  });

  const otherPosts = useMemo(() => {
    return getRandomPosts(post.id);
  }, [post.id]);

  // gets locations from Albums
  const locations = useMemo(() => {
    const locations = [];
    const locIds = [];
    albums.forEach((album) => {
      album.locations.forEach((loc: Location) => {
        if (!locIds.includes(loc.name)) {
          const locationClone = { ...loc };
          locationClone.articles = [];
          locationClone.articles.push(album);
          locIds.push(locationClone.name);
          locations.push(locationClone);
        } else {
          const existingLocation: Location = locations.find(
            (l) => l.name === loc.name
          );
          existingLocation.articles.push(album);
        }
      });
    });
    return locations;
  }, [albums]);

  const [selectedLocation, setSelectedLocation] = useState<Location>();
  const [showAlbums, setShowAlbums] = useState(false);

  async function onMarkerClicked(location: Location) {
    if (
      selectedLocation !== undefined &&
      selectedLocation.name === location.name
    ) {
      setSelectedLocation(undefined);
      setShowAlbums(false);
    } else {
      if (selectedLocation !== undefined) {
        //we need to wait a little
        setSelectedLocation(undefined);
        await sleep(1);
      }
      setSelectedLocation(location);
      setShowAlbums(true);
    }
  }

  function onMarkerAlbumsClosed() {
    setSelectedLocation(undefined);
    setShowAlbums(false);
  }

  const element = post.content;

  return (
    <>
      <Meta blogPost={post} />
      <div className="App">
        {" "}
        {FullSizeLayer}
        {/* {post.subtitle && <h2>{post.subtitle}</h2>} */}
        <div className="text-container">
          <ArticleSubHeader
            title={post.subtitle}
            dateStart={post.date}
            dateEnd={post.date}
          />
        </div>
        {element}
        {images.length !== 0 && (
          <BlogImagesDisplay images={images} alt={post.title} />
        )}
        {post.showMap && locations && (
          <div style={{ position: "relative" }}>
            <MapComponent
              onMarkerClicked={onMarkerClicked}
              locationsFiltered={locations}
              selectedLocation={selectedLocation}
              width="calc(100vw - 15%)"
              height="calc(100vh - 300px)"
              viewport={post.viewport}
            />
            <MapAlbums
              showAlbums={showAlbums}
              location={selectedLocation}
              omitTitle
              onClose={onMarkerAlbumsClosed}
            />
          </div>
        )}
        {post.showAlbums && albums && <Photowall albums={albums} />}
        <br />
        <br />
        <FollowMe subscribe invertColors />
        <div
          style={{
            backgroundColor: "#f5f5f5",
            paddingTop: "3rem",
          }}
        >
          <h2>Other blog posts:</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding:
                screenType === ScreenType.Mobile
                  ? "2rem 1rem 2rem 1rem"
                  : "3rem 1rem 5rem 4rem",
            }}
          >
            {otherPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
