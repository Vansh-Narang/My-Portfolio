import React from "react";
import "./index.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/project" element={<Project></Project>} />
      </Routes>
    </>
  );
}

export default App;


//For making props to be passed with componets make a class and refactoe the code and pass them as the props to fetch different values for the different pages