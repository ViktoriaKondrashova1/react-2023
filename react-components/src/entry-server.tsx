import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
// import { Response } from "express";

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}

// export function render(
//   url: string,
//   opts: RenderToPipeableStreamOptions,
//   res: Response
// ) {
//   const stream = renderToPipeableStream(
//     <Provider store={store}>
//       <StaticRouter location={url}>
//         <App />
//       </StaticRouter>
//     </Provider>,
//     {
//       bootstrapScripts: ["/main.js"],
//       onShellReady() {
//         res.setHeader("content-type", "text/html");
//         stream.pipe(res);
//       },
//     }
//   );
// }
