import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import waecImg from '../assets/WAEC.png'
import gradImg from '../assets/graduation ceremony.jpg'
import prizeImg from '../assets/annual prize giving day.png'

export default function NewsGrid() {
  const news = [
    {
      id: 1,
      title: "WAEC Examinations 2026",
      category: "Academics",
      excerpt: "WAEC examinations are currently ongoing. Wishing all our students the very best of luck in their papers.",
      published_date: "2026-05-21",
      image_url: waecImg
    },
    {
      id: 2,
      title: "2026 Graduation Ceremony",
      category: "Events",
      excerpt: "Preparations are underway for our grand graduation ceremony. Celebrate with us as we honor the graduating class.",
      published_date: "2026-07-15",
      image_url: gradImg
    },
    {
      id: 3,
      title: "Annual Prize Giving Day",
      category: "Events",
      excerpt: "Join us as we celebrate academic excellence and achievements at the Annual Prize Giving Day. Mark your calendars!",
      published_date: "2026-07-20",
      image_url: prizeImg
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-16">Latest News & Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              {item.image_url ? (
                <div className="h-48 overflow-hidden">
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ) : (
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
              )}
              <div className="p-6">
                <span className="text-secondary text-xs font-bold uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold text-primary mt-2 mb-3">{item.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={14} className="mr-2" /> {new Date(item.published_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                </div>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="/news" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
