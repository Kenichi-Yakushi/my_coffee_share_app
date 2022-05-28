// import React from "react";
import * as ReactDOMServer from "react-dom/server";
import CountUp from "./CountUp";

// 返り値の型を指定しました。
const ssr = (): string => `
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">${ReactDOMServer.renderToString(<CountUp />)}</div>
      <script src="./client.js"></script>
    </body>
  </html>
`;

export default ssr;
