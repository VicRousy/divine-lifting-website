import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, RefreshCw, Newspaper } from 'lucide-react'
import { supabase } from '../supabaseClient'

export default function NewsGrid() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('public_news')
          .select('*')
          .order('published_date', { ascending: false })
          .limit(3)

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-16">Latest News & Events</h2>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <RefreshCw size={32} className="animate-spin mb-4" />
            <p>Loading news...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-gray-400">{error}</p>
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No news available at this time. Check back later.</p>
          </div>
        )}

        {!loading && !error && news.length > 0 && (
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
                  <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                    <Newspaper size={32} />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold text-primary mt-2 mb-3">{item.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-2" /> {new Date(item.published_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                  </div>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
