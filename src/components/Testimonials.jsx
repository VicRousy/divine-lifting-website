import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "My daughter improved from average to top 3 in her class. The teachers really care!",
    name: "Mrs. Adebayo",
    child: "Parent of Primary 5 student"
  },
  {
    quote: "Divine Lifting gave my son structure and discipline. He's now studying Engineering at UNILAG.",
    name: "Mr. Okonkwo",
    child: "Parent of 2019 graduate"
  },
  {
    quote: "Safe environment, quality teaching, affordable fees. Best decision we made!",
    name: "Mrs. Ibrahim",
    child: "Parent of JSS 2 student"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-16">What Parents Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-primary p-8 rounded-2xl shadow-lg relative border border-gray-700"
            >
              <Quote className="text-secondary/30 w-16 h-16 absolute top-4 left-4" />
              <p className="text-gray-200 mb-8 italic relative z-10 leading-relaxed text-lg">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-secondary font-medium">{t.child}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
