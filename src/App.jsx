import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Contact = lazy(() => import('./pages/Contact'))
const News = lazy(() => import('./pages/News'))

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
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
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
