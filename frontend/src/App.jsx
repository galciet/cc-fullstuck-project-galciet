import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMenu from "./AddMenu";
import AddExercise from "./AddExercise";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<AddMenu />} />
          <Route path="/add-exercise" element={<AddExercise />} />
        </Routes>
      </div>
    </Router>
  );
}
