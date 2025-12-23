import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

const TestimonialSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite Marquee
            if (marqueeRef.current) {
                const content = marqueeRef.current.firstElementChild;
                if (content) {
                    const clone = content.cloneNode(true);
                    marqueeRef.current.appendChild(clone);

                    gsap.to(marqueeRef.current.children, {
                        xPercent: -100,
                        repeat: -1,
                        duration: 30, // Adjust speed here
                        ease: "linear",
                    });
                }
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden border-t border-b border-black/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-black opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <div className="text-center">
                    <span className="text-neon-blue font-mono tracking-widest uppercase text-xs mb-3 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Trusted by <br />Industry Leaders</h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20"></div>

                <div ref={marqueeRef} className="flex gap-8 whitespace-nowrap px-4 hover:[animation-play-state:paused]">
                    <div className="flex gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="w-[400px] glass-panel p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-neon-blue/30 transition-colors whitespace-normal flex flex-col justify-between select-none">
                                <div>
                                    <div className="mb-6 text-neon-blue opacity-50">
                                        <Quote size={40} />
                                    </div>
                                    <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">"{t.quote}"</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 font-display">{t.name}</h4>
                                        <p className="text-xs text-gray-500 font-mono uppercase">{t.role}</p>
                                    </div>
                                </div>

                                {/* Decoration */}
                                <div className="absolute top-4 right-4 flex gap-1">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="text-amber fill-current" />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
