import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import pages from "./pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>ReactHookForm Sandbox</h1>
              <ul>
                {pages.map((page, i) => (
                  <li key={`list_${i}`}>
                    <Link to={`/${i}`}>
                      {i + 1}_{page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          }
        />
        {pages.map((page, i) => (
          <Route key={`page_${i}`} path={`/${i}`} element={page.element()} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
