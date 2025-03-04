import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative bg-[#010219]">
      <div className="absolute inset-0 h-screen grid-background"></div>
      <div className="absolute inset-0 h-screen overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%]">
          <div className="light-streak absolute w-[60%] h-[200px] rotate-45 blur-[100px] bg-[#4169E1] opacity-20"></div>
        </div>
      </div>
      <Navbar />
      <main className="relative">
        <Home />
        <About />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}