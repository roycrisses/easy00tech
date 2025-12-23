import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { logos } from '../data';

const LogoTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const content = tickerRef.current?.firstElementChild;
      if (content) {
        // Clone for infinite loop
        const clone = content.cloneNode(true);
        tickerRef.current?.appendChild(clone);

        gsap.to(tickerRef.current?.children || [], {
          xPercent: -100,
          repeat: -1,
          duration: 30,
          ease: "linear",
        });
      }
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background py-10 overflow-hidden relative z-20 border-b border-black/5">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

      <div className="container mx-auto relative">
        <div className="flex justify-center mb-10">
          <h3 className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold font-mono">Trusted Technologies</h3>
        </div>
        <div ref={tickerRef} className="flex whitespace-nowrap overflow-hidden">
          <div className="flex space-x-12 md:space-x-24 items-center pr-12 md:pr-24">
            {logos.map((logo, i) => (
              <div key={i} className="group flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;