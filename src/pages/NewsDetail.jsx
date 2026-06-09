import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, Newspaper, RefreshCw } from 'lucide-react'
import { getSupabase } from '../supabaseClient'
import schoolImg from '../assets/school.jpg.jpeg'

export default function NewsDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data, error } = await getSupabase()
          .from('public_news')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setArticle(data)
      } catch (err) {
        console.error('Error fetching article:', err)
        setError('Unable to load this article.')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>{article ? article.title : 'News Article'}</title>
        <meta name="description" content={article?.excerpt || 'News article from Divine Lifting International School'} />
      </Helmet>

      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fadeInUp"
          >
            News & Events
          </h1>
          <p
            className="text-lg text-gray-300 animate-fadeInUp"
          >
            Stay updated with the latest happenings
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ minHeight: '400px' }}>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:text-secondary transition-colors"
        >
          <ArrowLeft size={20} /> Back to News
        </Link>

        <div style={{ minHeight: '700px' }}>

        {loading && (
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100 animate-pulse">
            <div className="h-72 md:h-96 bg-gray-200" />
            <div className="p-8 md:p-12 space-y-4">
              <div className="flex gap-4">
                <div className="h-3 bg-gray-200 rounded w-1/6" />
                <div className="h-3 bg-gray-200 rounded w-1/6" />
              </div>
              <div className="h-7 bg-gray-200 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <Newspaper size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 mb-6">{error}</p>
            <Link to="/news" className="text-secondary font-bold hover:underline">
              Return to News
            </Link>
          </div>
        )}

        {!loading && !error && !article && (
          <div className="text-center py-20">
            <Newspaper size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 mb-6">Article not found.</p>
            <Link to="/news" className="text-secondary font-bold hover:underline">
              Return to News
            </Link>
          </div>
        )}

        {!loading && !error && article && (
          <article
            className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100 animate-fadeInUp"
          >
            {article.image_url ? (
              <div className="h-72 md:h-96 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={article.image_url}
                  alt={article.title}
                  width={800} height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                <Newspaper size={80} />
              </div>
            )}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20">
                  {article.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} className="text-secondary" />
                                    {article.published_date ? new Date(article.published_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date TBD'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{article.excerpt}</p>
              </div>
            </div>
          </article>
        )}
        </div>
      </div>
    </div>
  )
}
