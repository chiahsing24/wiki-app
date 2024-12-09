import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Navigation from "./components/Page/Navigation/Navigation";

import TonyPage from "./pages/TonyPage/TonyPage";
import CholePage from "./pages/CholePage/CholePage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<TonyPage />} />
      <Route path="/wiki-app" element={<TonyPage />} />
      <Route path="/wiki-app/tony" element={<TonyPage />} />
      <Route path="/wiki-app/chole" element={<CholePage />} />
    </Routes>
  </BrowserRouter>
);
