// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/main/Main";
import MoreDetails from "./components/MoreDetails/MoreDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/more-details" element={<MoreDetails />} />
      </Routes>
    </Router>
  );
}

export default App;