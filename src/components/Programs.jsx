import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import nurseryImg from '../assets/nursery and pre-school.jpg'
import primaryImg from '../assets/primary.jpg'
import secondaryImg from '../assets/secondary.jpg'

const programs = [
  {
    image: nurseryImg,
    badge: 'Age 2-5',
    title: 'Nursery & Pre-Primary',
    description: 'A solid foundation built on curiosity, creativity, and fundamental literacy and numeracy skills in a nurturing environment.',
  },
  {
    image: primaryImg,
    badge: 'Age 6-11',
    title: 'Primary School',
    description: 'A balanced blend of British and Nigerian curricula, preparing students for secondary school with strong critical thinking skills.',
  },
  {
    image: secondaryImg,
    badge: 'Age 12-17',
    title: 'Secondary School',
    description: 'Rigorous preparation for WAEC, NECO, and JAMB with focused Science, Commercial and Arts departments to ensure future success.',
  },
]

export default function Programs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Academic Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Providing a seamless journey from early childhood to university entrance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={program.image} alt={program.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {program.badge}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <Link to="/academics" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
