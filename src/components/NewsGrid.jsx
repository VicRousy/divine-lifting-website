import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, RefreshCw, Newspaper } from 'lucide-react'
import { getSupabase } from '../supabaseClient'

export default function NewsGrid() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await getSupabase()
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
        <div style={{ minHeight: '450px' }}>

        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
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
              <div 
                key={item.id} 
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                {item.image_url ? (
                  <div className="h-48 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={item.image_url} alt={item.title} width={400} height={225} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                    <Calendar size={14} className="mr-2" />                     {item.published_date ? new Date(item.published_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : 'Date TBD'}
                  </div>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  )
}
