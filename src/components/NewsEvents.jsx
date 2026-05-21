import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsEvents() {
  const newsEvents = [
    {
      id: 1,
      type: "Event",
      date: "May 25, 2026",
      title: "Annual Sports Day & Prize-Giving Ceremony",
      description:
        "Celebrate our students' athletic achievements and academic excellence with families.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&h=300",
      featured: true,
    },
    {
      id: 2,
      type: "News",
      date: "May 20, 2026",
      title: "Divine Lifting Wins National Science Olympiad",
      description:
        "Our Secondary School team achieved 1st place in the National Science Olympiad Competition.",
      image:
        "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?auto=format&fit=crop&w=500&h=300",
      featured: true,
    },
    {
      id: 3,
      type: "Event",
      date: "June 10, 2026",
      title: "STEM Innovation Fair",
      description:
        "Students showcase their engineering and technology projects to parents and industry professionals.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&h=300",
      featured: false,
    },
    {
      id: 4,
      type: "News",
      date: "May 15, 2026",
      title: "New Partnership with Tech Giants for Coding Curriculum",
      description:
        "Divine Lifting partners with leading tech companies to enhance our computer science program.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&h=300",
      featured: false,
    },
    {
      id: 5,
      type: "Event",
      date: "June 15, 2026",
      title: "Cultural Festival & Graduation Ceremony",
      description:
        "Celebrate diverse cultures and honor our graduating students with this grand ceremony.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&h=300",
      featured: false,
    },
    {
      id: 6,
      type: "News",
      date: "May 12, 2026",
      title: "Kindergarten Summer Reading Program Launched",
      description:
        "Exciting literacy initiative encouraging young learners to fall in love with reading.",
      image:
        "https://images.unsplash.com/photo-1507842119343-583f20270319?auto=format&fit=crop&w=500&h=300",
      featured: false,
    },
  ];

  const featured = newsEvents.filter((item) => item.featured);
  const regular = newsEvents.filter((item) => !item.featured);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
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
            News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Divine Lifting School
          </p>
        </motion.div>

        {/* Featured News */}
        {featured.length > 0 && (
          <>
            <h3 className="text-2xl font-serif font-bold text-[#1e3a8a] mb-8">
              Featured
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              {featured.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    {/* Badge & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#f97316]/20 text-[#f97316]">
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={14} />
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-serif font-bold text-[#1e3a8a] mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-[#f97316] font-bold text-sm transition-colors hover:text-[#ea580c]"
                    >
                      Read More <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* Regular News */}
        <h3 className="text-2xl font-serif font-bold text-[#1e3a8a] mb-8">
          Latest Updates
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {regular.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-50"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                {/* Badge & Date */}
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="inline-block px-2 py-1 rounded-full bg-[#fde047]/30 text-[#1e3a8a] font-bold">
                    {item.type}
                  </span>
                  <span className="text-gray-500">{item.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-serif font-bold text-[#1e3a8a] mb-2 line-clamp-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {item.description}
                </p>

                {/* CTA */}
                <motion.a
                  href="#"
                  whileHover={{ x: 2 }}
                  className="text-[#f97316] font-semibold text-xs transition-colors hover:text-[#ea580c]"
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
