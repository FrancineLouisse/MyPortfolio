import { useState } from 'react'
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />

     </>
  )
}

export default App
