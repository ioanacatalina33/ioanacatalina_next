import { createServer } from "http";
import { parse } from "url";
import next from "next";
const dev = process.env.NODE_ENV !== "production";

const port = !dev ? process.env.PORT : 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      if (dev)
        console.log(
          `> Ready on ${dev ? "http://localhost" : "https://ioanacatalina.com"}:${port}`,
        );
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
