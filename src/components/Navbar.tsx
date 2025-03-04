import React from 'react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="glassmorphic squircle px-8 py-4 flex items-center gap-8">
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-white/90 hover:text-white transition-colors font-[500]"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-white/90 hover:text-white transition-colors font-[500]"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="text-white/90 hover:text-white transition-colors font-[500]"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('publications')} 
          className="text-white/90 hover:text-white transition-colors font-[500]"
        >
          Publications
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-white/90 hover:text-white transition-colors font-[500]"
        >
          Contact
        </button>
      </nav>
    </div>
  );
}

export default Navbar;