import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { schoolConfig } from '../data/config'
import logoImg from '../assets/logo.jpg.png'
import logoWebp from '../assets/logo.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    const focusable = menuRef.current?.querySelectorAll('a, button')
    if (!focusable?.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    if (e.key === 'Escape') {
      setIsOpen(false)
      toggleRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      const firstLink = menuRef.current?.querySelector('a')
      firstLink?.focus()
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleKeyDown])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Staff', href: '/staff' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-6">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setIsOpen(false)}>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-lg flex-shrink-0">
                <picture>
                  <source srcSet={logoWebp} type="image/webp" />
                  <img src={logoImg} alt="Divine Lifting School" className="w-full h-full object-contain" />
                </picture>
              </div>
              <div className={`font-serif font-bold text-base xl:text-xl whitespace-nowrap ${scrolled ? 'text-primary' : 'text-white'}`}>
                {schoolConfig.name}
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `text-[11px] xl:text-xs font-medium transition-colors hover:text-secondary whitespace-nowrap ${isActive ? 'text-secondary' : scrolled ? 'text-primary' : 'text-white/90'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-1.5 xl:gap-2 flex-shrink-0">
              <Link
                to="/apply"
                className="bg-secondary hover:bg-orange-600 text-white px-3 xl:px-5 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium shadow-lg whitespace-nowrap"
              >
                Apply Now
              </Link>
              <a
                href="https://divine-lifting-school.vercel.app"
                rel="prefetch"
                className="bg-green-600 hover:bg-green-700 text-white px-3 xl:px-5 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium shadow-lg whitespace-nowrap"
              >
                Portal Login
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button type="button" ref={toggleRef} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-menu" onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled ? 'text-primary' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} role="navigation" aria-label="Mobile navigation" className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-[calc(100vh-76px)] opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-primary hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-secondary text-white py-3 rounded-lg font-bold"
            >
              Apply Now
            </Link>
            <a
              href="https://divine-lifting-school.vercel.app?force_login=true"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-bold"
            >
              Portal Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
