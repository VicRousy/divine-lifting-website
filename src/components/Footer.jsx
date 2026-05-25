import { Link } from 'react-router-dom'
import { schoolConfig } from '../data/config'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-accent">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              {schoolConfig.name} is committed to nurturing excellence and building tomorrow's leaders through a blend of academic rigor and strong moral values.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Admissions', 'Academics', 'Facilities', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-secondary transition-colors">{link}</Link>
                </li>
              ))}
              <li><a href={schoolConfig.portalUrl} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary transition-colors">Portal Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-accent">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li>{schoolConfig.address}</li>
              <li>Phone: {schoolConfig.phone}</li>
              <li>Email: {schoolConfig.email}</li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-accent">School Hours</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Mon - Fri: {schoolConfig.hours.weekdays}</li>
              <li>Office: {schoolConfig.hours.office}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2026 {schoolConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
