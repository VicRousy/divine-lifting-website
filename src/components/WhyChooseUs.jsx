import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Heart, Building2, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'We follow the British and Nigerian curriculum, ensuring our students are prepared for global opportunities while maintaining cultural roots.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Heart,
    title: 'Character Development',
    description: 'Beyond grades, we focus on moral values, leadership training, and emotional intelligence to build well-rounded individuals.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description: 'State-of-the-art ICT labs, science laboratories, sports facilities, and a serene learning environment for optimal growth.',
    color: 'bg-green-50 text-green-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why Choose Divine Lifting School?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide a nurturing environment where every child is encouraged to reach their full potential.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-sky-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-200"
            >
              <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6`}>
                <feature.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">{feature.description}</p>
              <Link to="/about" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
