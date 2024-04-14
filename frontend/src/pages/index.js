import React from "react";
import { Route, Routes } from "react-router-dom";
import "./pages.css";
import { commonRoutes } from "../constant/route";
import Home from "./Home";

export default function Pages() {
  return (
    <main className="pages-wrapper">
      <Routes>
        {commonRoutes.map(({ Component, to }, index) => (
          <Route
            exact
            path={to}
            key={`route-common-${index}`}
            element={<Component />}
          />
        ))}
        <Route exact path="/*" key="HOME" element={<Home />} />
      </Routes>
    </main>
  );
}
