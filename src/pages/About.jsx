import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Shield, Target, Users, Zap } from 'lucide-react'
import { schoolConfig } from '../data/config'
import proprietressImg from '../assets/proprietress.jpg.jpeg'
import schoolImg from '../assets/school.jpg.jpeg'

const values = [
  { icon: Heart, title: 'Faith in God', desc: 'Biblical foundation in all we do.', color: '#7c3aed' },
  { icon: BookOpen, title: 'Academic Excellence', desc: 'Commitment to quality education.', color: '#f97316' },
  { icon: Shield, title: 'Integrity', desc: 'Honesty and transparency.', color: '#10b981' },
  { icon: Target, title: 'Discipline', desc: 'Structure and respect.', color: '#1f2937' },
  { icon: Users, title: 'Service', desc: 'Contributing to community.', color: '#fde047' },
  { icon: Zap, title: 'Innovation', desc: 'Modern teaching methods.', color: '#3b82f6' },
]

export default function About() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn about Divine Lifting International School's mission, vision, core values, and the dedicated team shaping young minds through faith-based education." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About {schoolConfig.name}</h1>
          <p className="text-xl text-secondary font-medium">Committed to Academic Excellence and Godly Character</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#fde047] p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Mission Statement</h2>
            <p className="text-gray-900 leading-relaxed text-lg">"To raise godly leaders with academic excellence, strong character, and practical skills to impact their generation."</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#fde047] p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Vision Statement</h2>
            <p className="text-gray-900 leading-relaxed text-lg">"To be the leading school of choice in Ikorodu and Lagos State, known for producing well-rounded students who excel academically and demonstrate exemplary character."</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#fde047] p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Goal Statement</h2>
            <p className="text-gray-900 leading-relaxed text-lg">"To provide a holistic education that nurtures academic excellence, moral integrity, and practical skills, preparing students to become responsible global citizens."</p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#1f2937] text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={proprietressImg} alt="Mrs Stella A. Okoko" width={400} height={500} className="w-full md:w-1/3 rounded-2xl shadow-xl" />
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-white">Meet Our Proprietress</h2>
            <h3 className="text-xl font-bold text-[#fde047] mb-4">Mrs. Stella A. Okoko</h3>
            <p className="text-gray-300 leading-relaxed mb-6">With over 20 years of experience in education, Mrs. Okoko is dedicated to fostering a learning environment where academic rigor meets moral development. Her leadership ensures that every child at Divine Lifting receives the foundation they need to excel in an international context while staying true to our local values.</p>
          </div>
        </div>
      </section>

      {/* Proprietor */}
      <section className="py-20 bg-[#92400e] text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/3 h-72 bg-white/20 rounded-2xl shadow-xl flex items-center justify-center text-white/60">
            Proprietor Image
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-white">Meet Our Proprietor</h2>
            <h3 className="text-xl font-bold text-[#fde047] mb-4">Mr. Sunday O. Okoko</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Mr. Okoko provides the strategic leadership and operational support that keeps Divine Lifting International School running smoothly. Working hand-in-hand with the Proprietress, he ensures that our facilities, administration, and community engagement meet the highest standards. His dedication to excellence creates a stable and nurturing environment where both students and staff can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">Our Journey</h2>
          <div className="space-y-8 border-l-2 border-secondary pl-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-secondary rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-bold text-primary">September 2013 - The Beginning</h3>
              <p className="text-gray-600 mt-2">Divine Lifting International School was established in Ikorodu with a vision to provide a holistic, Christ-centered education for local families.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-secondary rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-bold text-primary">2018 - First Set of Graduates</h3>
              <p className="text-gray-600 mt-2">We celebrated our first graduating class, who achieved outstanding results in their WAEC and NECO examinations.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-secondary rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-bold text-primary">2026 - A New Era</h3>
              <p className="text-gray-600 mt-2">Continued growth in our facilities and academic achievements marks our commitment to raising leaders for the next generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} whileHover={{ y: -5 }} className="p-8 rounded-xl shadow-md text-center border border-gray-200" style={{ backgroundColor: v.color }}>
                <v.icon size={40} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2 text-white">{v.title}</h3>
                <p className="text-white/90">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
