import { extname, join } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { createRequestListener } from "@mjackson/node-fetch-server";

const port = parseInt(process.env.ZULU_PORT ?? "3000", 10);
const listenHost = process.env.ZULU_HOSTNAME ?? "localhost";

const require = createRequire(import.meta.url);
const { entries } = JSON.parse(
  readFileSync(join(process.cwd(), "dist", "manifest.json"), "utf-8")
);
const { js, css } = entries.index.initial;
const contentTypeMap = new Map([
  [".ico", "image/x-icon"],
  [".js", "application/javascript"],
  [".css", "text/css"],
  [".map", "application/json"],
]);

const server = createServer(
  createRequestListener(async (request) => {
    const url = new URL(request.url, `http://${listenHost}:${port}`);
    const ext = extname(url.pathname);

    if (contentTypeMap.has(ext)) {
      const contentType = contentTypeMap.get(ext);
      const path = join(process.cwd(), "dist", url.pathname);

      if (!existsSync(path)) {
        return new Response(null, {
          status: 404,
        });
      }

      return new Response(readFileSync(path), {
        headers: {
          "Content-Type": contentType,
          "Cache-Control":
            process.env.NODE_ENV === "development"
              ? "no-store; must-revalidate"
              : "max-age=604800",
        },
      });
    }

    const remotesPath = join(process.cwd(), "dist", "server", "index.js");
    const importedApp = require(remotesPath);
    request.grazie = { scripts: js, links: css };

    return await importedApp.handler(request);
  })
);

server.listen(port, () => {
  console.log(`Listening on http://${listenHost}:${port}`);
});
