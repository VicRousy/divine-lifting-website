import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, FileText, Calendar, Users, Zap } from "lucide-react";
import schoolImg from "../assets/school3.jpg.jpeg";

export default function Admissions() {
  const requirements = [
    {
      program: "Kindergarten",
      age: "Ages 3-5",
      requirements: [
        "Birth certificate",
        "Proof of immunization",
        "Recent passport photograph",
        "Parent/Guardian identification",
        "School readiness assessment",
      ],
      tuition: "₦450,000/year",
    },
    {
      program: "Primary School",
      age: "Ages 6-11",
      requirements: [
        "Birth certificate",
        "Previous school records",
        "English & Math assessment",
        "Parent/Guardian identification",
        "Medical report",
      ],
      tuition: "₦550,000/year",
    },
    {
      program: "Secondary School",
      age: "Ages 12-18",
      requirements: [
        "JAMB/School entrance exam",
        "Previous academic records",
        "English & Math entrance exams",
        "Parent/Guardian identification",
        "Medical & psychological assessment",
      ],
      tuition: "₦750,000/year",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Inquiry & Registration",
      description:
        "Contact our admissions office or fill the online inquiry form.",
    },
    {
      step: "2",
      title: "Submit Application",
      description: "Submit completed application form with required documents.",
    },
    {
      step: "3",
      title: "Assessment & Interview",
      description: "Participate in entrance exams and interviews.",
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Receive admission outcome within 2 weeks.",
    },
    {
      step: "5",
      title: "Registration",
      description: "Complete registration and pay enrollment fees.",
    },
    {
      step: "6",
      title: "Orientation",
      description: "Attend school orientation and begin your journey.",
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={schoolImg} alt="School Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Admissions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Admissions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3a8a] mb-4">
              Admissions Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome applications from students of all backgrounds who are
              committed to academic excellence
            </p>
          </motion.div>

          {/* Requirements by Program */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {requirements.map((req, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#374155] rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    {req.program}
                  </h3>
                  <p className="text-sm text-gray-300 font-semibold">
                    {req.age}
                  </p>
                  <p className="text-lg text-[#f97316] font-bold mt-2">
                    {req.tuition}
                  </p>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="font-bold text-white mb-3 text-sm">
                    Required Documents:
                  </h4>
                  <ul className="space-y-2">
                    {req.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="text-[#f97316] flex-shrink-0 mt-1"
                        />
                        <span className="text-sm text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#apply"
                  className="block text-center bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-2 rounded-lg transition-colors duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3a8a] mb-4">
              Admissions Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A smooth and transparent journey from inquiry to enrollment
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {/* Connector Line */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[90%] h-1 bg-gradient-to-r from-[#f97316] to-transparent"></div>
                )}

                <div                 className="bg-[#374155] rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center h-full">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-full bg-[#f97316] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4"
                  >
                    {item.step}
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3a8a] mb-4">
              Important Dates 2026
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { date: "March 1 - April 30", event: "Application Window Opens" },
              { date: "May 15 - June 15", event: "Entrance Examinations" },
              { date: "June 30", event: "Admission Results Released" },
              { date: "July 1 - 15", event: "Registration & Payment" },
              { date: "August 1 - 7", event: "School Orientation" },
              { date: "August 10", event: "School Resumption" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-[#374155] rounded-lg p-6"
              >
                <Calendar size={32} className="text-[#f97316] flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-lg">
                    {item.date}
                  </p>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section
        id="apply"
        className="py-12 bg-[#34d399]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Take the first step towards joining Divine Lifting School. Our
                admissions team is ready to help you through the process.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-[#fbbf24] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
              >
                Contact Admissions
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Users, text: "500+ Students" },
                { icon: FileText, text: "Easy Application" },
                { icon: Calendar, text: "Fast Processing" },
                { icon: Zap, text: "Quality Support" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-[#fbbf24] to-[#d97706] rounded-lg p-6 text-center shadow-md"
                  >
                    <Icon size={32} className="text-white mx-auto mb-2" />
                    <p className="text-white font-bold">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
