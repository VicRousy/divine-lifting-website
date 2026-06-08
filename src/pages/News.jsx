import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, RefreshCw, Newspaper } from 'lucide-react'
import { supabase } from '../supabaseClient'

export default function News() {
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
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            News & Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Divine Lifting School
          </p>
        </motion.div>

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

        {!loading && !error && news.length === 0 && (
          <div className="text-center py-20">
            <Newspaper size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400">No news available at this time. Check back later.</p>
          </div>
        )}

        {!loading && !error && news.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
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
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    <Newspaper size={40} />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={14} />
                      {new Date(item.published_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
