import { motion } from "framer-motion";
import {
  Microscope,
  Library,
  Dumbbell,
  Music,
  Palette,
  Wifi,
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      name: "State-of-the-Art Labs",
      description:
        "Modern science and computer labs equipped with the latest technology for hands-on learning",
      icon: Microscope,
      image: "placeholder",
    },
    {
      id: 2,
      name: "Digital Library",
      description:
        "Extensive collection of physical and digital resources for research and learning",
      icon: Library,
      image: "placeholder",
    },
    {
      id: 3,
      name: "Sports Complex",
      description:
        "Olympic-sized pools, football pitches, basketball courts, and fitness centers",
      icon: Dumbbell,
      image: "placeholder",
    },
    {
      id: 4,
      name: "Music & Arts Studio",
      description:
        "Fully equipped studios for music production, visual arts, and performance practice",
      icon: Music,
      image: "placeholder",
    },
    {
      id: 5,
      name: "Creative Workshop",
      description:
        "Design studios with 3D printers, art supplies, and innovation spaces for projects",
      icon: Palette,
      image: "placeholder",
    },
    {
      id: 6,
      name: "Smart Classrooms",
      description:
        "Interactive learning spaces with Wi-Fi, projectors, and collaborative technology",
      icon: Wifi,
      image: "placeholder",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e3a8a] mb-4">
            Our Facilities
          </h2>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center text-gray-400">
                  {facility.image !== "placeholder" ? (
                    <>
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    </>
                  ) : (
                    <span>Image Placeholder</span>
                  )}
                </div>

                <div className="p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4 inline-block p-3 rounded-lg bg-[#f97316]/10"
                  >
                    <Icon size={28} className="text-[#f97316]" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#1e3a8a] mb-3">
                    {facility.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/facilities"
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
          >
            Take Virtual Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
}
