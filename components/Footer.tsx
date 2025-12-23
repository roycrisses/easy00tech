import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background border-t border-gray-200 text-gray-900">
      {/* Upper Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Contact Form */}
        <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-gray-200">
          <span className="text-neon-blue font-mono tracking-widest uppercase text-xs mb-2 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-8">Ready to <br />Collaborate?</h2>

          <form className="space-y-8 max-w-md">
            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-500 uppercase">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-400 text-gray-900" placeholder="Enter your name" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-400 text-gray-900" placeholder="Enter your email" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-400 resize-none text-gray-900" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="group flex items-center gap-3 text-lg font-bold hover:text-neon-blue transition-colors">
              Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className="p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden bg-gray-50">
          <div className="max-w-md">
            <h3 className="font-display text-2xl font-bold mb-8">Contact Info</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                  <MapPin className="text-neon-blue" size={20} />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-500 uppercase block mb-1">Office</label>
                  <p className="text-lg">123 Innovation Drive,<br /> Tech City, TC 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                  <Mail className="text-neon-blue" size={20} />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-500 uppercase block mb-1">Email</label>
                  <p className="text-lg">hello@easywaytech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                  <Phone className="text-neon-blue" size={20} />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-500 uppercase block mb-1">Phone</label>
                  <p className="text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <label className="text-xs font-mono text-gray-500 uppercase block mb-4">Socials</label>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 py-8 px-6 text-sm text-gray-500">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono">&copy; {new Date().getFullYear()} Easy Way Technology.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;