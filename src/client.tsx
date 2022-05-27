// import React from "react";
import { hydrateRoot } from "react-dom/client";
import CountUp from "./CountUp";

const container = document.getElementById("app");
const root = hydrateRoot(container, <CountUp />);

// idがappの部分をhydrateで描画する
// root.render(<CountUp />);
// const root = hydrateRoot(container, <CountUp />);
