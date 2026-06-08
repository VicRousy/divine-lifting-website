import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, RefreshCw, Newspaper, ChevronRight } from 'lucide-react'
import { supabase } from '../supabaseClient'
import schoolImg from '../assets/school.jpg.jpeg'

const categories = ['All', 'Academics', 'Events', 'Sports', 'Admissions', 'General']

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('public_news')
          .select('*')
          .order('published_date', { ascending: false })

        if (error) throw error
        setNews(data || [])
      } catch (err) {
        console.error('Error fetching news:', err)
        setError('Unable to load news at this time.')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const filtered = activeCategory === 'All'
    ? news
    : news.filter(item => item.category === activeCategory)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>News & Events</title>
        <meta name="description" content="Stay updated with the latest news, events, and announcements from Divine Lifting International School." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            News & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-xl mx-auto"
          >
            Stay updated with the latest happenings at Divine Lifting International School
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <RefreshCw size={32} className="animate-spin mb-4" />
            <p>Loading news...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-gray-400">{error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20">
            <Newspaper size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400">
              {activeCategory === 'All'
                ? 'No news available at this time. Check back later.'
                : `No ${activeCategory.toLowerCase()} news available.`}
            </p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <>
            {/* Featured Article */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg mb-12 group hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {featured.image_url ? (
                    <div className="h-64 md:h-full overflow-hidden">
                      <img
                        src={featured.image_url}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-64 md:h-full bg-gray-100 flex items-center justify-center text-gray-400">
                      <Newspaper size={64} />
                    </div>
                  )}
                  <div className="p-8 md:p-12 flex flex-col justify-center relative bg-gray-50">
                    <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-secondary rounded-r-full"></div>
                    <div className="pl-6">
                      <span className="inline-flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full mb-4 w-fit border border-secondary/20">
                        {featured.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-gray-600 mb-8 leading-relaxed text-base">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar size={16} className="text-secondary" />
                          {new Date(featured.published_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Rest of Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-gray-100"
                >
                  {item.image_url ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                      <Newspaper size={40} />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={14} className="text-secondary/70" />
                        {new Date(item.published_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-secondary text-sm font-bold group-hover:gap-2 transition-all">
                      Read More <ChevronRight size={16} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
