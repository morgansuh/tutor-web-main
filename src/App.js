import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Courses />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
