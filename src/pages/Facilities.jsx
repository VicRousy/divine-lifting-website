import { Helmet } from "react-helmet-async";
import Motion from "../components/Motion";
import Facilities from "../components/Facilities";
import schoolImg from "../assets/school.jpg.jpeg";

export default function FacilitiesPage() {
  const detailedFacilities = [
    {
      name: "Science Laboratories",
      description:
        "State-of-the-art chemistry, physics, and biology laboratories equipped with modern apparatus and safety equipment.",
      features: [
        "Advanced microscopes",
        "Bunsen burners",
        "Periodic table software",
        "Safety protocols",
      ],
      image: "placeholder",
      bgColor: "#10b981", // Emerald Green for Science
    },
    {
      name: "Computer Lab",
      description:
        "Modern computer laboratory with high-speed internet, programming software, and 1:1 device ratio.",
      features: [
        "60+ workstations",
        "Latest software",
        "Cybersecurity training",
        "Coding platforms",
      ],
      image: "placeholder",
      bgColor: "#3b82f6", // Blue for Technology
    },
    {
      name: "Library & Resource Center",
      description:
        "Comprehensive collection with 10,000+ books, digital resources, and quiet study spaces.",
      features: [
        "Online database access",
        "Reading areas",
        "Research computers",
        "Digital archives",
      ],
      image: "placeholder",
      bgColor: "#92400e", // Brown for Books/Wood
    },
    {
      name: "Assembly Hall & Auditorium",
      description:
        "Spacious hall for morning assemblies, school events, drama performances, and parent-teacher meetings.",
      features: [
        "Sound system",
        "Stage area",
        "Seating capacity",
        "Projector setup",
      ],
      image: "placeholder",
      bgColor: "#f97316", // Orange for Gathering/Energy
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Facilities</title>
        <meta name="description" content="Discover our state-of-the-art facilities at Divine Lifting International School — science labs, sports complex, library, ICT center, and more." />
      </Helmet>
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Our Facilities
            </h1>
          </Motion>
        </div>
      </section>

      {/* Detailed Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3a8a] mb-4">
              Facility Details
            </h2>
          </Motion>

          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {detailedFacilities.map((facility, idx) => (
              <Motion
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-8 items-stretch lg:items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="flex-1 rounded-lg overflow-hidden shadow-lg bg-gray-200 h-64 sm:h-80 flex items-center justify-center text-gray-400">
                  {facility.image !== "placeholder" ? (
                    <img
                      src={facility.image}
                      alt={facility.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span>Image Placeholder</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: facility.bgColor }}>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {facility.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[#fde047] font-bold text-lg">
                          ✓
                        </span>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion>
            ))}
          </Motion>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-[#1e3a8a]">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Explore Our Campus Virtually
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take a 360° virtual tour of our facilities from the comfort of your
            home
          </p>
          <a
            href="#"
            className="inline-block bg-[#fde047] hover:bg-[#fcd34d] text-[#1e3a8a] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl"
          >
            Start Virtual Tour
          </a>
        </Motion>
      </section>
    </div>
  );
}
