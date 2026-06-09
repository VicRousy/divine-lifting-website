import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Camera } from 'lucide-react'
import schoolImg from '../assets/school.jpg.jpeg'

const CATEGORIES = ['All', 'School Building', 'Classrooms', 'Sports', 'Events', 'Students']

const GALLERY_ITEMS = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: [
    'School Front View', 'Science Lab', 'Library', 'Sports Field', 'Graduation Day',
    'Classroom Learning', 'Computer Lab', 'Cultural Day', 'School Bus',
    'Art Exhibition', 'Music Room', 'Staff Room', 'Assembly Hall',
    'Playground', 'Laboratory Equipment', 'Award Ceremony', 'School Garden', 'Exam Hall'
  ][i],
  category: ['School Building', 'Classrooms', 'Facilities', 'Sports', 'Events', 'Classrooms', 'Facilities', 'Events', 'School Building', 'Events', 'Facilities', 'School Building', 'School Building', 'Sports', 'Facilities', 'Events', 'School Building', 'Classrooms'][i],
}))

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Browse photos of Divine Lifting International School — our facilities, classrooms, sports, events, and student life." />
      </Helmet>

      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fadeInUp">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto animate-fadeInUp">
            A glimpse into life at Divine Lifting International School
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-10 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-secondary text-white shadow-md' : 'bg-gray-100 text-primary hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-52 bg-gray-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Camera size={48} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="text-white text-sm font-medium bg-secondary/80 px-3 py-1 rounded-full">{item.category}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-1">Click to view full image</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Camera size={48} className="mx-auto mb-4" />
            <p className="text-lg">No photos in this category yet.</p>
          </div>
        )}
      </section>
    </div>
  )
}
