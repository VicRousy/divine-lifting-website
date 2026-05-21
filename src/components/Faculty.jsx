import { motion } from "framer-motion";
import { Award, BookOpen, Heart } from "lucide-react";

export default function Faculty() {
  const faculty = [
    {
      id: 1,
      name: "Dr. Folake Okafor",
      position: "Principal",
      qualification: "Ph.D. Education Management",
      bio: "Lead with vision and integrity",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
      specialties: ["Academic Excellence", "Leadership"],
    },
    {
      id: 2,
      name: "Mr. Chidiebere Eze",
      position: "Head of Academics",
      qualification: "M.Ed. Curriculum Design",
      bio: "Inspiring minds through innovative teaching",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      specialties: ["STEM", "Curriculum"],
    },
    {
      id: 3,
      name: "Mrs. Aisha Mohammed",
      position: "Head of Primary",
      qualification: "B.Ed. Primary Education",
      bio: "Building strong foundations for success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
      specialties: ["Child Development", "Literacy"],
    },
    {
      id: 4,
      name: "Mr. Tunde Adeyemi",
      position: "Head of Secondary",
      qualification: "M.Sc. Science Education",
      bio: "Preparing scholars and leaders",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400",
      specialties: ["Science", "WAEC Prep"],
    },
    {
      id: 5,
      name: "Miss Chioma Nwankwo",
      position: "English Department Head",
      qualification: "M.A. English Literature",
      bio: "Cultivating communicators and thinkers",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      specialties: ["Literature", "Communication"],
    },
    {
      id: 6,
      name: "Prof. Kayode Okonkwo",
      position: "Mathematics Department Head",
      qualification: "M.Ph. Mathematics",
      bio: "Making mathematics accessible and engaging",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400",
      specialties: ["STEM", "Problem Solving"],
    },
  ];

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
            Our Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced educators dedicated to nurturing excellence and
            character development
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {faculty.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-6">
                {/* Name & Position */}
                <h3 className="text-xl font-serif font-bold text-[#1e3a8a] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#f97316] mb-2">
                  {member.position}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  {member.qualification}
                </p>

                {/* Bio */}
                <p className="text-gray-700 text-sm mb-4 italic">
                  "{member.bio}"
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#fde047]/20 text-[#1e3a8a] px-2 py-1 rounded-full font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
