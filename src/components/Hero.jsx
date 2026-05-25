import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[620px] h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Sophisticated Gradient Overlay Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/60 to-[#0f172a]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 mb-6">
            <span className="w-2 h-2 bg-[#fde047] rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Accredited by Ministry of Education</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Where Excellence <br />
            <span className="text-[#fde047]">Meets Character</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Empowering young minds with world-class education in the heart of Lagos. 
            Nurturing the leaders of tomorrow through academic rigor and moral integrity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/admissions"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2"
            >
              Apply Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/facilities"
              className="group border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <PlayCircle size={20} />
              Virtual Tour
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
