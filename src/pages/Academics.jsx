import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, Clock } from 'lucide-react'
const schoolImg = "/images/academics-hero.jpg"

const programs = [
  { title: 'Nursery & Pre-Primary', age: 'Ages 2-5', desc: 'A solid foundation built on curiosity, creativity, and fundamental literacy and numeracy skills.' },
  { title: 'Primary School', age: 'Ages 6-11', desc: 'A balanced blend of British and Nigerian curricula, preparing students for secondary school with critical thinking.' },
  { title: 'Secondary School', age: 'Ages 12-17', desc: 'Rigorous preparation for WAEC, NECO, and JAMB with focused Science and Arts departments.' },
]

export default function Academics() {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Academics</title>
        <meta name="description" content="Explore our academic programs from Nursery to Secondary — British and Nigerian curricula with 90%+ WAEC/NECO pass rate at Divine Lifting International School." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School Campus" fetchpriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Quality Education for Success</h1>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Curriculum</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
          <p className="text-lg text-gray-700 leading-relaxed">
            Divine Lifting International School follows the Nigerian National Curriculum, 
            enhanced by British educational best practices. We focus on academic rigor, 
            critical thinking, and the holistic development of every child.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <div key={p.title} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-gray-600 font-semibold mb-4">{p.age}</p>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Results */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Student Support Services</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-100"><Users className="text-secondary" /> Career Guidance & Counseling</li>
            <li className="flex items-center gap-3 text-gray-100"><Clock className="text-secondary" /> Remedial Lessons</li>
            <li className="flex items-center gap-3 text-gray-100"><BookOpen className="text-secondary" /> Academic Tutoring</li>
          </ul>
        </div>
        <div className="bg-[#9a3412] p-10 rounded-2xl shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Success</h2>
          <div className="text-5xl font-bold mb-2">90%+</div>
          <p className="text-lg text-white">WAEC & NECO Pass Rate</p>
          <p className="mt-4">Our students consistently secure admission into top universities across Nigeria and beyond.</p>
        </div>
      </section>
    </div>
  )
}
