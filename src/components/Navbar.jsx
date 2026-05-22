import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { schoolConfig } from '../data/config'
import logoImg from '../assets/logo.jpg.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-lg">
                <img src={logoImg} alt="Divine Lifting School" className="w-full h-full object-contain" />
              </div>
              <div className={`font-serif font-bold text-xl ${scrolled ? 'text-primary' : 'text-white'}`}>
                {schoolConfig.name}
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${scrolled ? 'text-primary' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/admissions"
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </a>
            <a
              href="https://divine-lifting-school.vercel.app"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Portal Login
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled ? 'text-primary' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-primary hover:text-secondary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-secondary text-white py-3 rounded-lg font-bold"
              >
                Apply Now
              </a>
              <a
                href="https://divine-lifting-school.vercel.app?force_login=true"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-bold"
              >
                Portal Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
