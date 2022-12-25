import "./App.css";
import Home from "./frontend/pages/Home";
import Terminal from "./frontend/pages/Terminal";

import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terminal" element={<Terminal/>} />
    </Routes>
  );
}

export default App;
