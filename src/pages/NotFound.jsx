import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream px-4">
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist at Divine Lifting International School." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-bold transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
