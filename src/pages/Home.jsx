import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to Divine Lifting International School — providing quality education with a focus on academic excellence, character development, and holistic growth in a God-centered environment." />
      </Helmet>
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
