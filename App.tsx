import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import BentoServices from './components/BentoServices';
import ProcessSection from './components/ProcessSection';
import PortfolioGrid from './components/PortfolioGrid';
import BlogSection from './components/BlogSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      // Global animation for sections appearing
      const sections = gsap.utils.toArray('section');
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      });
    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background text-gray-900 selection:bg-neon-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <BentoServices />
        <ProcessSection />
        <PortfolioGrid />
        <BlogSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;