'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize AOS after preloader disappears (2.5s + 0.8s fade = 3.3s)
    const aosTimer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const AOS = require('aos');
        AOS.init({ 
          offset: 0,
          duration: 800,
          easing: 'ease-out-cubic',
          delay: 0,
          once: false,
          mirror: false,
        });
        
        // Refresh AOS when components update
        const handleLoad = () => {
          AOS.refresh();
        };
        
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }, 3300); // 2.5s preloader + 0.8s fade out animation

    return () => clearTimeout(aosTimer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
