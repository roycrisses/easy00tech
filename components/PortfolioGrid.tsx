import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects } from '../data';

const PortfolioGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-background relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-neon-blue font-mono tracking-widest uppercase text-xs mb-2 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Innovation <br />Showcase</h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-[1px] w-12 bg-gray-300 hidden md:block"></div>
            <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors group">
              View All Projects <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer relative">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video w-full border border-black/5 shadow-sm">
                {/* Year Sticker */}
                <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full border border-gray-200 shadow-sm z-20">
                  2024
                </div>

                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white backdrop-blur-md border border-gray-100 flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-lg">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-1 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-sm font-mono text-gray-500">{project.cat}</p>
                </div>
                {/* Removed bottom year badge since we moved it to sticker */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-900 text-sm uppercase tracking-wide">View All</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;