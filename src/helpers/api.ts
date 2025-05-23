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
  const response = await fetch("/api/subscriber", {
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
  const response = await fetch("/api/email/buydigital", {
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
      return { result: -1, message: body.message };
    }
    return body;
  } catch (e) {
    return { result: -1, message: "Ops.. Something went wrong" };
  }
};

export const fetchParameter = async (name) => {
  try {
    const response = await fetch("/api/parameter/getParameter", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    });
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  } catch (err) {
    await sleep(2000);
    return await fetchParameter(name);
  }
};

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
