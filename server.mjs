import fs from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import path from "node:path";
import { createRequestListener } from "@mjackson/node-fetch-server";

const require = createRequire(import.meta.url);

const { entries } = JSON.parse(
  fs.readFileSync("./dist/manifest.json", "utf-8")
);

const { js, css } = entries.index.initial;

const server = createServer(
  createRequestListener(async (request) => {
    const url = new URL(request.url, "http://localhost:3000");

    if (url.pathname.endsWith(".ico")) {
      return await serveICOFile(url);
    }

    if (url.pathname.endsWith(".js")) {
      return await serveJSFile(url);
    }

    if (url.pathname.endsWith(".css")) {
      return await serveCSSFile(url);
    }

    if (process.env.NODE_ENV === "development") {
      if (url.pathname.endsWith(".map")) {
        return await serveMAPFile(url);
      }
    }

    const remotesPath = path.join(process.cwd(), "./dist/server/index.js");
    const importedApp = require(remotesPath);
    request.grazie = { scripts: js, links: css };

    return await importedApp.handler(request);
  })
);

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});

async function serveICOFile(url) {
  const filePath = path.join(process.cwd(), "dist", url.pathname);
  const src = fs.readFileSync(filePath);

  return new Response(src, {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "no-store; must-revalidate",
    },
  });
}

async function serveCSSFile(url) {
  const filePath = path.join(process.cwd(), "dist", url.pathname);
  const src = fs.readFileSync(filePath, "utf-8");

  return new Response(src, {
    headers: {
      "Content-Type": "text/css",
      "Cache-Control": "no-store; must-revalidate",
    },
  });
}
async function serveJSFile(url) {
  const filePath = path.join(process.cwd(), "dist", url.pathname);
  const src = fs.readFileSync(filePath, "utf-8");
  return new Response(src, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "no-store; must-revalidate",
    },
  });
}
async function serveMAPFile(url) {
  const filePath = path.join(process.cwd(), "dist", url.pathname);
  const src = fs.readFileSync(filePath, "utf-8");
  return new Response(src, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store; must-revalidate",
    },
  });
}
