import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${isScrolled ? 'py-0' : 'py-2'
        }`}
    >
      <div
        className={`w-full max-w-5xl transition-all duration-500 rounded-2xl border ${isScrolled
          ? 'glass-panel px-6 py-4 shadow-sm border-black/5'
          : 'bg-transparent border-transparent px-2 py-4'
          }`}
      >
        <div className="flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-bold font-display tracking-wide cursor-pointer text-gray-900 flex items-center gap-1 group"
          >
            Easy Way<span className="text-neon-blue group-hover:text-amber transition-colors duration-300">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center bg-white/70 px-8 py-2 rounded-full border border-black/5 backdrop-blur-sm shadow-sm">
            {['Services', 'Work', 'Process', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-xs uppercase tracking-widest font-semibold text-gray-600 hover:text-neon-blue transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </nav>

          <button className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-neon-blue transition-colors shadow-lg shadow-neon-blue/20">
            Start Project
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col items-center space-y-6 animate-fade-in-down border border-black/5">
          {['Services', 'Work', 'Process', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-display font-medium text-gray-900 hover:text-neon-blue transition-colors"
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-neon-blue text-white py-3 rounded-xl font-bold uppercase tracking-wide">
            Start Project
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;