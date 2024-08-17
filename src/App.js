import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Students from "./components/Students";
import Instructors from "./components/Instructors";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Analytics />
              <div id="pricing-section">
                <Cards />
              </div>
              <div id="courses-section">
                <Courses />
              </div>
              <Footer />
            </>
          }
        />

        {/* New Page for Students */}
        <Route path="/Students" element={<Students />} />

        {/* New Page for Teachers */}
        <Route path="/Instructors" element={<Instructors />} />
      </Routes>
    </Router>
  );
}

export default App;
