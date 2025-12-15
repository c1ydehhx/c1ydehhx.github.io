import "./custom.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Layout from "./Outlet";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import DevDaily from "./DevDaily";
import Blog from "./Blog";
import { BlogContent } from "./BlogContent";
import { MDXProvider } from "@mdx-js/react";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/DevDaily" element={<DevDaily />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Blog/:slug" element={<BlogContent />} />
    </Route>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
