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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e3a8a] mb-4">
            Our Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500">
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
                    <span className="font-medium">Image Placeholder</span>
                  )}
                </div>

                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4 inline-block p-3 rounded-lg bg-[#f97316]/10 hover:scale-110 transition-transform duration-200">
                    <Icon size={28} className="text-[#f97316]" />
                    </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#1e3a8a] mb-3">
                    {facility.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                  </div>
                );
          })}
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-16">
          <span
            className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-lg font-bold text-lg opacity-70 cursor-not-allowed"
          >
            Virtual Tour (Coming Soon)
          </span>
        </div>
      </div>
    </section>
  );
}
