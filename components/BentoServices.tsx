import React from 'react';
import { Code, Server, Palette, Search, BarChart, Smartphone, ArrowUpRight } from 'lucide-react';

const BentoServices: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-black opacity-100 pointer-events-none"></div>

      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-neon-blue font-mono tracking-widest uppercase text-xs mb-2 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-gray-900">Architecture</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl font-light">
            We don't just build websites; we engineer digital ecosystems. From high-performance web apps to immersive brand experiences.
          </p>
        </div>

        {/* 
          Wireframe mapping:
          Left: Tall Block
          Right Top: 2 Blocks
          Right Bottom: 1 Wide Block
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[650px]">

          {/* 1. Tall Left Block - Web Development */}
          <div className="lg:row-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-neon-blue/40">
            {/* Internal Grid */}
            <div className="absolute inset-0 bg-grid-black opacity-[0.05] pointer-events-none"></div>

            {/* Sticker */}
            <div className="absolute top-6 right-6 bg-neon-blue text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20 animate-bounce-slow">
              MOST POPULAR
            </div>

            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code size={200} className="text-black" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(0,163,255,0.3)] transition-shadow shadow-sm z-10 relative">
                <Code className="text-neon-blue" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-gray-900">Web & Software <br />Development</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Custom websites and powerful software solutions tailored to your business logic. We specialize in scalable React applications, Node.js backends, and secure cloud architectures.
              </p>

              <div className="bg-white/50 rounded-xl border border-gray-200 overflow-hidden relative backdrop-blur-sm">
                {['Custom Web Apps', 'SaaS Platforms', 'API Integration'].map((item, index) => (
                  <div key={item} className={`flex items-center gap-3 text-sm text-gray-700 font-medium p-4 ${index !== 2 ? 'border-b border-gray-200' : ''} hover:bg-white/80 transition-colors`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,163,255,0.8)]"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* 2. Top Right 1 - Hosting */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-300 group hover:border-amber/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-black opacity-[0.05] pointer-events-none"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] transition-shadow shadow-sm">
                <Server size={24} className="text-amber" />
              </div>
              <span className="text-[10px] font-mono font-bold border border-green-500/30 text-green-600 px-3 py-1 rounded-full bg-green-500/10">99.9% UPTIME</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-2 text-gray-900 relative z-10">Hosting & Domains</h3>
            <p className="text-sm text-gray-600 font-light relative z-10">Secure, high-speed hosting solutions and domain management to keep your business online 24/7.</p>
          </div>

          {/* 3. Top Right 2 - UI/UX */}
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 border border-gray-200 shadow-sm">
            <div className="absolute inset-0 bg-grid-black opacity-[0.05] pointer-events-none"></div>

            {/* Sticker */}
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded -rotate-3 hover:rotate-0 transition-transform shadow-md z-20">
              AWARD WINNING
            </div>

            <div className="absolute -right-4 -bottom-4 opacity-10 text-purple-500">
              <Palette size={100} />
            </div>
            <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow shadow-sm relative z-10">
              <Palette size={24} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2 text-gray-900 relative z-10">UI/UX Design</h3>
            <p className="text-sm text-gray-600 font-light relative z-10">
              User-centric interfaces that are intuitive, accessible, and visually stunning.
            </p>
          </div>

          {/* 4. Bottom Right Wide - Marketing/SEO */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:border-black/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-black opacity-[0.05] pointer-events-none"></div>

            <div className="flex-1 relative z-10">
              <div className="flex gap-4 mb-6">
                {[Search, BarChart, Smartphone].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-neon-blue group-hover:border-neon-blue/30 transition-all duration-300 shadow-sm">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">Growth & Marketing</h3>
              <p className="text-gray-600 font-light text-sm">
                We don't just build; we grow. Our SEO and Social Media Management services ensure your voice is heard in the crowded digital space.
              </p>
            </div>

            <div className="flex-1 w-full flex justify-end relative z-10">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neon-blue transition-colors group-hover:translate-x-1 duration-300 text-gray-900">
                Learn More <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoServices;