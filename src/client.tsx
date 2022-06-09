import * as React from "react";
import { createRoot } from "react-dom/client";
// import CountUp from "./CountUp";
import CoffeeIndex from "./ui/components/CoffeeIndex";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<CoffeeIndex />);

// idがappの部分をhydrateで描画する
// root.render(<CountUp />);
// const root = hydrateRoot(container, <CountUp />);
