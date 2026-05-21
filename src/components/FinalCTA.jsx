import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6"
        >
          Enroll Your Child for 2026/2027 Academic Session
        </motion.h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Limited spaces available. Apply now to secure your child's future in our world-class educational environment.
        </p>
        <a
          href="/admissions"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl"
        >
          Start Application Process <ArrowRight size={24} />
        </a>
      </div>
    </section>
  )
}
