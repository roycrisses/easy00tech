import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { processSteps } from '../data';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line Animation (Scrubbed)
      if (lineRef.current && stepsContainerRef.current) {
        gsap.fromTo(lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.5,
            }
          }
        );
      }

      // 2. Steps Stagger Animation
      const stepElements = gsap.utils.toArray('.process-step');
      gsap.fromTo(stepElements,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="py-24 bg-carbon text-gray-900 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-black opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Visual - Abstract Node Graph */}
          <div className="relative sticky top-32 hidden lg:block">
            <div className="absolute inset-0 bg-neon-blue/10 blur-[80px] rounded-full"></div>
            <div className="relative glass-panel rounded-2xl overflow-hidden aspect-[4/5] border border-black/5 shadow-2xl flex items-center justify-center p-8 bg-white/50 backdrop-blur-md">

              {/* Decorative schematic */}
              <div className="w-full h-full relative">
                <div className="absolute top-10 left-10 w-40 h-40 border border-black/10 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-neon-blue/10 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-20 right-10 w-60 h-40 border border-black/10 rounded-lg flex items-center justify-center backdrop-blur-md bg-white/60 shadow-sm">
                  <div className="text-xs font-mono text-neon-blue">
                    &gt; PROCESS_INIT<br />
                    &gt; LOADING_ASSETS...<br />
                    &gt; OPTIMIZING...<br />
                    &gt; READY.
                  </div>
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d="M 100 100 Q 200 200 300 400" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
              </div>

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-display font-bold text-gray-900">The Easy Way <br /><span className="text-neon-blue">Methodology</span></h3>
              </div>
            </div>
          </div>

          {/* Right List */}
          <div>
            <span className="text-amber font-mono tracking-widest text-xs uppercase mb-2 block">Workflow</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-gray-900">From Concept to <br />Execution</h2>

            <div ref={stepsContainerRef} className="relative pl-8">
              {/* Timeline Track */}
              <div className="absolute left-0 top-4 bottom-12 w-[1px] bg-gray-200"></div>
              {/* Timeline Progress */}
              <div ref={lineRef} className="absolute left-0 top-4 w-[2px] bg-gradient-to-b from-neon-blue to-purple-500 h-0 max-h-[calc(100%-3rem)] box-content shadow-[0_0_10px_rgba(0,163,255,0.5)]"></div>

              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div key={index} className="process-step relative group">
                    <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10 group-hover:border-neon-blue group-hover:scale-125 transition-all duration-300 shadow-sm">
                      <div className="w-2 h-2 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-gray-400 group-hover:text-neon-blue transition-colors">STEP {step.id}</span>
                      <h4 className="text-2xl font-bold flex items-center gap-2 text-gray-900 group-hover:text-neon-blue transition-colors cursor-pointer">
                        {step.title}
                        <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </h4>
                      <p className="text-gray-600 max-w-md font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;