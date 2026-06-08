import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Contact = lazy(() => import('./pages/Contact'))
const News = lazy(() => import('./pages/News'))
const NewsDetail = lazy(() => import('./pages/NewsDetail'))
const Apply = lazy(() => import('./pages/Apply'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">
          <Helmet defaultTitle="Divine Lifting International School" titleTemplate="%s | Divine Lifting International School">
            <meta name="description" content="Divine Lifting International School — providing quality education with a focus on academic excellence, character development, and holistic growth." />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Divine Lifting International School" />
          </Helmet>
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-[50vh] pt-28 text-center text-primary font-semibold">Loading...</div>}>
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
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
