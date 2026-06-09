import { Users, GraduationCap, Award, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Happy Students' },
  { icon: GraduationCap, value: '50+', label: 'Expert Teachers' },
  { icon: Award, value: '98%', label: 'Pass Rate' },
  { icon: Calendar, value: '20+', label: 'Years of Excellence' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-primary relative -mt-20 z-20 mx-4 md:mx-12 lg:mx-24 rounded-2xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group cursor-pointer bg-secondary rounded-xl p-6 shadow-md hover:bg-orange-600 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-orange-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
