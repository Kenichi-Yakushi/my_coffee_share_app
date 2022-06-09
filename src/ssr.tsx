import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
// import CountUp from "./CountUp";
import CoffeeIndex from "./ui/components/CoffeeIndex";

// 返り値の型を指定しました。
const ssr = (): string => `
  <html>
    <head>
      <title>MyCoffeeShareApp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">${ReactDOMServer.renderToString(<CoffeeIndex />)}</div>
      <script src="./client.js"></script>
    </body>
  </html>
`;

export default ssr;
