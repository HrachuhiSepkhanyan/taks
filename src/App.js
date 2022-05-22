import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import List from "./pages/page2/List";
import Group from "./pages/page3/Group";
import Layout from "./pages/navbar/Layout";
import "./App.style";

function App() {
  return (
    <div className="App">
      <Layout path="/" />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/list" element={<List />} />{" "}
        <Route path="/group" element={<Group />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
