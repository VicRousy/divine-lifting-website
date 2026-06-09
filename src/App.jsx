import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Contact = lazy(() => import('./pages/Contact'))
const News = lazy(() => import('./pages/News'))
const NewsDetail = lazy(() => import('./pages/NewsDetail'))
const Apply = lazy(() => import('./pages/Apply'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Staff = lazy(() => import('./pages/Staff'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">
          <Helmet defaultTitle="Divine Lifting International School" titleTemplate="%s | Divine Lifting International School">
            <meta name="description" content="Divine Lifting International School — providing quality education with a focus on academic excellence, character development, and holistic growth." />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Divine Lifting International School" />
            <meta property="og:image" content={`${siteUrl}/images/default-hero.jpg`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </Helmet>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            <ErrorBoundary>
            <Suspense fallback={<div className="min-h-screen bg-[#0f172a] flex items-center justify-center"><div className="animate-pulse text-white/60 font-semibold">Loading...</div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/staff" element={<Staff />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
