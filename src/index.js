import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Stats } from "@react-three/drei";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Stats />
    <App />
  </>
);
