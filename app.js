import React from "react";
import {createRoot} from "react-dom/client";

const hello = <h1>Hello, world!</h1>;

const root = createRoot(document.getElementById("main"));
root.render(hello);