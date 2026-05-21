import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import schoolImg from '../assets/school.jpg.jpeg';

export default function Contact() {
  const contactInfo = [
    { icon: MapPin, title: "Address", details: "13, Temidayo Street, New Era Estate, Parafa, Ikorodu, Lagos State", color: "#1e3a8a" },
    { icon: Phone, title: "Phone & WhatsApp", details: "07030136929", color: "#10b981" },
    { icon: Mail, title: "School Email", details: "divineliftingintlschl@gmail.com", color: "#f97316" },
    { icon: Mail, title: "Owner Email", details: "stellaokoko3@gmail.com", color: "#7c3aed" },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${schoolImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#1f2937]/50"></div>
      </div>

      <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out to us anytime.</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="rounded-3xl shadow-lg p-6 text-center text-white" style={{ backgroundColor: info.color }}>
                <Icon size={24} className="mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                <p className="text-sm opacity-90 break-words">{info.details}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-3xl mx-auto">
          <form action="YOUR_FORMSPREE_URL_HERE" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#1f2937] mb-2">Full Name *</label>
                <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a8a]" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1f2937] mb-2">Email Address *</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a8a]" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#1f2937] mb-2">Phone Number</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a8a]" placeholder="07030136929" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1f2937] mb-2">Program Interest *</label>
                <select name="program" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a8a]">
                  <option value="">Select a program</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="primary">Primary School</option>
                  <option value="secondary">Secondary School</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#1f2937] mb-2">Message *</label>
              <textarea name="message" required rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a8a] resize-none" placeholder="Tell us about your inquiry..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md">
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2347030136929"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <MessageCircle size={32} />
        <span className="font-bold hidden md:inline">Chat with us</span>
      </a>
    </section>
  );
}