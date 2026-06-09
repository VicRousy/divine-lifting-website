import { Helmet } from 'react-helmet-async'
import { Users, Mail, BookOpen } from 'lucide-react'
import schoolImg from '../assets/school.jpg.jpeg'

const STAFF = [
  { name: 'Dr. Stella Okoko', role: 'Proprietress', department: 'Administration', email: 'stellaokoko3@gmail.com' },
  { name: 'Mrs. Adebayo F.', role: 'Principal', department: 'Administration' },
  { name: 'Mr. Okafor C.', role: 'Vice Principal', department: 'Administration' },
  { name: 'Mrs. Eze J.', role: 'Head Teacher', department: 'Primary' },
  { name: 'Mr. Bello A.', role: 'Senior Teacher', department: 'Mathematics' },
  { name: 'Miss Ogunleye T.', role: 'Senior Teacher', department: 'English' },
  { name: 'Mr. Adeleke K.', role: 'Teacher', department: 'Science' },
  { name: 'Mrs. Nnamdi P.', role: 'Teacher', department: 'Social Studies' },
  { name: 'Mr. Chibueze I.', role: 'Teacher', department: 'Computer Science' },
  { name: 'Miss Adeyemi R.', role: 'Teacher', department: 'Arts & Music' },
  { name: 'Mr. Musa S.', role: 'Teacher', department: 'Physical Education' },
  { name: 'Mrs. Obiageli N.', role: 'Teacher', department: 'Nursery' },
]

export default function Staff() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Staff Directory</title>
        <meta name="description" content="Meet the dedicated staff and faculty of Divine Lifting International School — qualified educators committed to your child's success." />
      </Helmet>

      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fadeInUp">
            Staff Directory
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fadeInUp">
            Meet our dedicated team of educators and administrators
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 text-center">
          <div className="flex items-center justify-center gap-3 text-primary mb-2">
            <Users size={28} />
            <h2 className="text-2xl font-serif font-bold">Our Faculty & Staff</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our team is composed of qualified, experienced, and caring professionals dedicated to nurturing academic excellence and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {STAFF.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                <span className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {person.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              <h3 className="font-bold text-primary text-lg">{person.name}</h3>
              <p className="text-secondary font-semibold text-sm">{person.role}</p>
              <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-2">
                <BookOpen size={14} />
                <span>{person.department}</span>
              </div>
              {person.email && (
                <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-1 hover:text-secondary transition-colors">
                  <Mail size={14} />
                  <span>{person.email}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
