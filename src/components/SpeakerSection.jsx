// components/SpeakerSection.jsx

import Image from "next/image";

const speakers = [
  {
    name: "Prof. Dennis Cheek, BA, BS, MA, PhD, PhD, FRSA, AAAS.",
    title:
      "Dean, School of Entrepreneurship & Humanities Universitas Ciputra Surabaya",
    image: "/speaker1.jpg",
  },
  {
    name: "Prof. Harry Patria",
    title:
      "PhD Researcher at Hunter Centre for Entrepreneurship, Strategy and Innovation, Strathclyde Business School, UK",
    image: "/speaker2.jpeg",
  },
  {
    name: "Dr. Miguel Angel Esquivias Padilla IE., M.SE.",
    title: "Regional Economic Development Institute (REDI)",
    image: "/speaker3.jpg",
  },
  {
    name: "Dr. Nor’ain Abdullah",
    title: "Management and Science University (MSU), Malaysia",
    image: "/speaker4.jpg",
  },
];

const SpeakerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#365427" }}
        >
          Speakers
        </h2>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-xs"
              style={{
                background: "linear-gradient(to bottom, #558C3F, #1F4923)",
              }}
            >
              {/* Image Section */}
              <div
                className="relative"
                style={{ height: "280px", width: "100%" }}
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="p-6 text-white" style={{ height: "280px" }}>
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-l mb-4">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
