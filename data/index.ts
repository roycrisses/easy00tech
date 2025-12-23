import { Code, Server, Palette, Search, BarChart, Smartphone } from 'lucide-react';

export const logos = [
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "GSAP", src: "https://cdn.worldvectorlogo.com/logos/greensock.svg" },
    { name: "Tailwind", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Shopify", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Stripe", src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
];

export const processSteps = [
    { title: "Discovery", desc: "We analyze your requirements and analyze the market landscape.", id: "01" },
    { title: "Strategy", desc: "Formulating a strategic roadmap with clear technical milestones.", id: "02" },
    { title: "Design & Dev", desc: "Crafting the visual identity and coding the core application logic.", id: "03" },
    { title: "Launch & Scale", desc: "Deploying to production, monitoring metrics, and optimizing for growth.", id: "04" },
];

export const portfolioProjects = [
    { id: 1, title: "FinTech Dashboard", cat: "Software Development", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", year: "2024" },
    { id: 2, title: "Luxe E-Commerce", cat: "Web Design", img: "https://images.unsplash.com/photo-1481487484168-9b930d55206d?q=80&w=2670&auto=format&fit=crop", year: "2024" },
    { id: 3, title: "Health Tracker", cat: "Mobile Application", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop", year: "2024" },
    { id: 4, title: "Urban Realty", cat: "Branding & Strategy", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop", year: "2024" },
];

export const blogPosts = [
    {
        id: 1,
        title: "The Future of Web3 Interfaces",
        excerpt: "Exploring how decentralized technologies are reshaping user experience standards and interface design paradigms.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
        date: "Oct 12, 2024",
        category: "Design",
        author: "Alex M.",
    },
    {
        id: 2,
        title: "Optimizing React for Scale",
        excerpt: "A deep dive into advanced performance techniques, server components, and state management strategies for enterprise apps.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2940&auto=format&fit=crop",
        date: "Nov 05, 2024",
        category: "Development",
        author: "Sarah K.",
    },
    {
        id: 3,
        title: "AI-Driven Brand Aesthetics",
        excerpt: "How generative AI is streamlining the creative process while maintaining authentic brand voice and visual consistency.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        date: "Dec 01, 2024",
        category: "Artificial Intelligence",
        author: "Davide R.",
    },
];

export const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CTO, FinTech Global",
        quote: "Easy Way Technology transformed our legacy infrastructure into a modern, scalable beast. The attention to detail is unmatched.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Founder, Nexus AI",
        quote: "Their design team didn't just build a website; they crafted a brand identity that speaks volumes. Absolutely cinematic experience.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Director, ArtHouse",
        quote: "We needed a platform that felt alive. The animations and interactions they implemented are simply world-class.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Michael Ross",
        role: "VP Marketing, Sola",
        quote: "Professional, technical, and incredibly creative. They bridged the gap between complex functionality and user delight.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2669&auto=format&fit=crop"
    },
];
