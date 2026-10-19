
import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />

      {/* Homepage / Hero section */}
      <Home />

      {/* About me section */}
      <About />

      {/* Technical skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Certifications */}
      <Certifications />

      {/* Resume */}
      <Resume />

      {/* Contact section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
