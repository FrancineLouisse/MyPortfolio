import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Particles from "../src/components/Particles"
function App() {
  return (
    <>
      <Particles
        particleColors={["#f09080", "#ffffff"]}
        particleCount={700}
        particleSpread={15}
        speed={0.1}
        particleBaseSize={130}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;