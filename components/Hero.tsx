import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient Glow Animation
      gsap.to('.ambient-glow', {
        scale: 1.2,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Floating Sticker Animation
      gsap.to('.floating-sticker', {
        y: -15,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Staggered text reveal
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 50, opacity: 0, rotateX: 20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );

      // Image Reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out', delay: 0.6 }
      );

      // Magnetic Button (Simple version)
      const btn = buttonRef.current;
      if (btn) {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6 min-h-screen flex items-center">
      {/* --- DECORATIVE STICKERS & MARKERS --- */}
      {/* Corner Crosshairs */}
      <div className="absolute top-8 left-8 text-gray-200 pointer-events-none">+</div>
      <div className="absolute top-8 right-8 text-gray-200 pointer-events-none">+</div>
      <div className="absolute bottom-8 left-8 text-gray-200 pointer-events-none">+</div>
      <div className="absolute bottom-8 right-8 text-gray-200 pointer-events-none">+</div>

      {/* Floating System Badge */}
      <div className="absolute top-28 right-8 md:right-16 hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 backdrop-blur-sm animate-pulse">
        <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
        <span className="text-[10px] font-mono font-bold text-neon-blue tracking-widest uppercase">System Online v2.4</span>
      </div>

      {/* Floating Verified Sticker (New) */}
      <div className="absolute top-40 left-10 hidden xl:flex items-center gap-3 floating-sticker z-20">
        <div className="w-14 h-14 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center">
          <ShieldCheck size={24} className="text-neon-blue" />
        </div>
        <div className="bg-white/90 backdrop-blur px-5 py-3 rounded-2xl border border-gray-100 shadow-lg">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Status</p>
          <p className="text-sm font-bold text-gray-900">Verified Partner</p>
        </div>
      </div>

      {/* Vertical Scroll Label */}
      <div className="absolute left-10 bottom-40 hidden md:block origin-left -rotate-90 pointer-events-none z-10">
        <span className="text-[10px] font-mono font-bold text-gray-300 tracking-[0.4em] uppercase flex items-center gap-4">
          Scroll to Explore <span className="w-12 h-[1px] bg-gray-300"></span>
        </span>
      </div>

      {/* --- END DECORATION --- */}

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] -translate-y-1/2 ambient-glow pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[120px] translate-y-1/3 ambient-glow pointer-events-none opacity-40"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">

        {/* Left Content */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-neon-blue"></span>
            <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-1">Future Ready Agency</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight text-gray-900">
            Design that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-900 to-gray-500">Defines</span> the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-amber italic pr-4">Future.</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed font-light">
            We build digital experiences that blend <strong className="text-gray-900 font-medium">cinematic aesthetics</strong> with cutting-edge Web3 technology. Elevate your brand beyond the ordinary.
          </p>

          <div className="pt-6 flex flex-wrap gap-6">
            <button
              ref={buttonRef}
              className="group relative px-8 py-4 bg-black text-white rounded-full flex items-center gap-3 font-bold tracking-wide hover:bg-neon-blue hover:text-white transition-colors duration-300 shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-neon-blue blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
            </button>

            <button className="flex items-center gap-3 px-8 py-4 text-gray-900 hover:text-amber transition-colors group">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-amber group-hover:scale-110 transition-all duration-300">
                <Play size={18} fill="currentColor" className="ml-1" />
              </div>
              <span className="font-medium tracking-wide">Watch Reel</span>
            </button>
          </div>
        </div>

        {/* Right Image / Visual */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div
            ref={imageRef}
            className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl group"
          >
            {/* Top Left Sticker */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 rounded border border-gray-200 shadow-lg z-20 font-mono tracking-widest uppercase">
              Generation 3.0
            </div>

            {/* Top Right Sticker */}
            <div className="absolute top-6 right-6 z-20">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-[8px] uppercase tracking-widest border border-gray-700 shadow-2xl animate-[spin_10s_linear_infinite]">
                Live
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Abstract Digital Art"
              className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>

            {/* Floating Glass Cards */}
            <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border-l-4 border-l-neon-blue bg-white/95 backdrop-blur-xl shadow-2xl">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Latest Project</p>
                  <h3 className="text-xl font-bold font-display text-gray-900">Neon Horizon</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Background elements */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-black/5 rounded-[2rem]"></div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-2/3 h-2/3 bg-grid-black opacity-20 mask-image-gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;