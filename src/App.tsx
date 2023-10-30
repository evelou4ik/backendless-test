import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import tabsData from "./data/tabs.json";
import TabButton from "./components/TabButton";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <ul>
          {sortTabs.map(({ id, title }) => (
            <li key={id}>
              <TabButton to={`/${id}`} title={title} />
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Routes>
          {sortTabs.map(({ id, Component }) => (
            <Route
              key={id}
              path={`/${id}`}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {<Component />}
                </Suspense>
              }
            />
          ))}
          <Route
            path="/"
            element={<Navigate to={`/${sortTabs[0].id}`} replace />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const sortTabs = tabsData
  .sort((a, b) => a.order - b.order)
  .map((tab) => {
    return {
      ...tab,
      Component: lazy(() => import(`../src/components/${tab.path}`)),
    };
  });
