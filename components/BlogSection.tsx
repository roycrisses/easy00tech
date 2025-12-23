import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data';

const BlogSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.blog-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="blog" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-neon-blue font-mono tracking-widest uppercase text-xs mb-2 block">Our Thinking</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Latest <br />Insights</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-[1px] w-12 bg-gray-300 hidden md:block"></div>
                        <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors group">
                            View All Articles <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <div key={post.id} className="group glass-panel rounded-3xl overflow-hidden flex flex-col h-full border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300">
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full border border-black/5 shadow-sm">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-100 shadow-sm flex items-center gap-2">
                                    <Tag size={12} className="text-neon-blue" />
                                    <span className="text-xs font-bold uppercase tracking-wide text-gray-900">{post.category}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="h-3 w-[1px] bg-gray-300"></div>
                                    <div className="flex items-center gap-1">
                                        <User size={12} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-neon-blue transition-colors">Read Article</span>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
