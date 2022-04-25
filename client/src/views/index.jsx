import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </React.StrictMode>
);
