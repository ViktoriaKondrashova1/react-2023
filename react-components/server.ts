import type { Request, Response, NextFunction } from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import compression from "compression";
import serveStatic from "serve-static";
import { createServer as createViteServer } from "vite";
const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p: string) => path.resolve(__dirname, p);

// const getStyleSheets = async () => {
//   try {
//     const assetpath = resolve("dist/assets");
//     const files = await fs.readdir(assetpath);
//     const cssAssets = files.filter((l) => l.endsWith(".scss"));
//     const allContent = [];
//     for (const asset of cssAssets) {
//       const content = await fs.readFile(path.join(assetpath, asset), "utf-8");
//       allContent.push(`<style type="text/scss">${content}</style>`);
//     }
//     return allContent.join("\n");
//   } catch {
//     return "";
//   }
// };

async function createServer(isProd = process.env.NODE_ENV === "production") {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: isTest ? "error" : "info",
  });

  app.use(vite.middlewares);
  const requestHandler = express.static(resolve("assets"));
  app.use(requestHandler);
  app.use("/assets", requestHandler);

  if (isProd) {
    app.use(compression());
    app.use(
      serveStatic(resolve("dist/client"), {
        index: false,
      })
    );
  }
  // const stylesheets = getStyleSheets();
  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      let template = await fs.readFile(
        isProd ? resolve("dist/client/index.html") : resolve("index.html"),
        "utf-8"
      );

      template = await vite.transformIndexHtml(url, template);

      const productionBuildPath = path.join(
        __dirname,
        "./dist/server/entry-server.mjs"
      );
      const devBuildPath = path.join(__dirname, "./src/entry-server.tsx");
      const { render } = await vite.ssrLoadModule(
        isProd ? productionBuildPath : devBuildPath
      );

      const appHtml = await render(url, res);
      // const cssAssets = isProd ? "" : await stylesheets;

      const html = template.replace(`<!--app-html-->`, appHtml);
      // .replace(`<!--head-->`, cssAssets);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      const e = err as Error;
      !isProd && vite.ssrFixStacktrace(e);
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  const port = process.env.PORT || 7456;
  app.listen(Number(port), "0.0.0.0", () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}

createServer();

// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import express from "express";
// import type { Request, Response, NextFunction } from "express";
// import { createServer as createViteServer } from "vite";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// async function createServer() {
//   const app = express();

//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: "custom",
//   });

//   app.use(vite.middlewares);

//   app.use("*", async (req: Request, res: Response, next: NextFunction) => {
//     const url = req.originalUrl;

//     try {
//       let template = fs.readFileSync(
//         path.resolve(__dirname, "index.html"),
//         "utf-8"
//       );

//       template = await vite.transformIndexHtml(url, template);

//       const { render } = await vite.ssrLoadModule("./src/entry-server.tsx");

//       const appHtml = await render(url);

//       const html = template.replace(`<!--app-html-->`, appHtml);

//       res.status(200).set({ "Content-Type": "text/html" }).end(html);
//     } catch (err) {
//       const e = err as Error;
//       vite.ssrFixStacktrace(e);
//       next(e);
//     }
//   });

//   app.listen(5173);
// }

// createServer();
