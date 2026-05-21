import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import NewsGrid from '../components/NewsGrid'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Programs />
      <Testimonials />
      <NewsGrid />
      <FinalCTA />
    </div>
  )
}
