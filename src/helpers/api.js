import { sleep, getHighlightsAlbums, getRecommendedAlbums } from "./utils";

export const fetchSmallArticles = async () => {
  try {
    const response = await fetch("/api/albums_small");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  } catch (err) {
    await sleep(2000);
    return await fetchSmallArticles();
  }
};

export const addSubscriber = async (email, country, travel, dance) => {
  const response = await fetch("/subscribers/add", {
    method: "POST",
    body: JSON.stringify({
      subscriber: {
        email: email,
        country: country,
        travel: travel,
        dance: dance,
        date: new Date(),
      },
    }),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
  try {
    const body = await response.json();
    if (response.status !== 200) {
      return { result: -1, message: body.message };
    }
    return body;
  } catch (e) {
    return { result: -1, message: "Ops.. Something went wrong" };
  }
};

export const buyDigital = async (email, name, message, img) => {
  const response = await fetch("/email/buydigital", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      name: name,
      message: message,
      img: img,
      date: new Date(),
    }),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
  try {
    const body = await response.json();
    if (response.status !== 200) {
      //console.log("Error adding the subscriber " + body.message);
      return { result: -1, message: body.message };
    }
    return body;
  } catch (e) {
    return { result: -1, message: "Ops.. Something went wrong" };
  }
};

export const fetchArticles = async (type) => {
  try {
    const response = await fetch("/articles/get", {
      method: "POST",
      body: JSON.stringify({ type: type }),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    });
    const body = await response.json();
    if (response.status !== 200) {
      // console.log("Error fetching articles " + body.message);
      throw Error(body.message);
    }
    return body;
  } catch (err) {
    // console.log("fetching again");
    await sleep(2000);
    return await fetchArticles();
  }
};

export const fetchArticleByUrlId = async (id) => {
  //verify if it's a highlight
  try {
    var album = getHighlightsAlbums(id);
    if (album.length === 1) {
      const response = await fetch("/articles/get", {
        method: "POST",
        body: JSON.stringify({
          identifier: album[0].identifier,
          type: album[0].type,
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
      });
      const body = await response.json();
      if (response.status !== 200) {
        // console.log("Error fetching albums " + body.message);
        throw Error(body.message);
      }
      return { article: album[0], images: body.images };
    } else {
      const response = await fetch("/articles/get", {
        method: "POST",
        body: JSON.stringify({ name_url: id }),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
      });
      const body = await response.json();
      if (response.status !== 200) {
        // console.log("Error fetching articles " + body.message);
        throw Error(body.message);
      }
      return body;
    }
  } catch (err) {
    // console.log("fetching again");
    await sleep(2000);
    return await fetchArticleByUrlId(id);
  }
};

export const fetchRecommendedArticles = async (article) => {
  if (article.type === AlbumType.HIGHLIGHTS) {
    return { recommendedArticles: getRecommendedAlbums(article.href) };
  } else
    try {
      const response = await fetch("/articles/get", {
        method: "POST",
        body: JSON.stringify({ article: article, recommended: true }),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
      });
      const body = await response.json();
      if (response.status !== 200) {
        // console.log("Error fetching articles " + body.message);
        throw Error(body.message);
      }
      return body;
    } catch (err) {
      // console.log("fetching again");
      await sleep(2000);
      return await fetchRecommendedArticles(article);
    }
};

export const fetchLocations = async () => {
  try {
    const response = await fetch("/locations/get");
    const body = await response.json();
    if (response.status !== 200) {
      // console.log("Error fetching locations " + body.message);
      throw Error(body.message);
    }
    return body;
  } catch (err) {
    // console.log("fetching articles again");
    await sleep(2000);
    return await fetchLocations();
  }
};

export const fetchValidLocations = async () => {
  try {
    const response = await fetch("/locations/getValid");
    const body = await response.json();
    if (response.status !== 200) {
      // console.log("Error fetching locations " + body.message);
      throw Error(body.message);
    }
    return body;
  } catch (err) {
    // console.log("fetching articles again");
    await sleep(2000);
    return await fetchValidLocations();
  }
};

export const fetchParameter = async (name) => {
  try {
    const response = await fetch("/parameter/getParameter", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    });
    const body = await response.json();
    if (response.status !== 200) {
      // console.log("Error fetching parameter " + body.message);
      throw Error(body.message);
    }
    return body;
  } catch (err) {
    // console.log("fetching again");
    await sleep(2000);
    return await fetchParameter();
  }
};
