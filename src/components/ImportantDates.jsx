import Image from "next/image";

const importantDates = [
  {
    date: "5th April 2025",
    description: "Extended Abstract Submission Deadline",
  },
  {
    date: "16th April 2025",
    description: "Abstract Notification of Acceptance",
  },
  {
    date: "20th April 2025",
    description: "Payment Deadline",
  },
  {
    date: "25th April 2025",
    description: "Full Paper Submission Deadline",
  },
  {
    date: "10th May 2025",
    description: "Presentation Material Submission Deadline",
  },
  {
    date: "30th May 2025",
    description: "Conference Date",
  },
];

export default function ImportantDates() {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Event logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Event Logo" width={500} height={200} />
        </div>

        {/* Header */}
        <h2
          className="text-3xl font-bold text-center mb-12 py-4"
          style={{ color: "#365427" }}
        >
          IMPORTANT DATES
        </h2>

        <div className="relative">
          {/* Vertical Timeline Bar (Mobile & Desktop) */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
            style={{
              background: "linear-gradient(to bottom, #214B23, #FFD449)",
              zIndex: 1,
            }}
          ></div>

          {/* Timeline Items */}
          <div className="relative">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center mb-8 last:mb-0"
              >
                {/* Circle Marker */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#FFD449",
                    border: "4px solid #214B23",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: "#214B23" }}
                  ></div>
                </div>

                {/* Date and Description Container */}
                <div
                  className={`
                    w-full py-4 rounded-lg text-center
                    ${
                      // Jika item di sisi kiri (index genap)
                      index % 2 === 0
                        ? "md:text-left pl-8 pr-4"
                        : // Jika item di sisi kanan (index ganjil)
                          "md:text-right pl-4 pr-8"
                    }
                  `}
                  style={{
                    marginLeft: index % 2 === 0 ? "50px" : "auto",
                    marginRight: index % 2 === 0 ? "auto" : "50px",
                    maxWidth: "calc(50% - 50px)",
                    backgroundColor: "rgba(255, 212, 73, 0.2)",
                    borderLeft: index % 2 === 0 ? "4px solid #214B23" : "none",
                    borderRight: index % 2 !== 0 ? "4px solid #214B23" : "none",
                  }}
                >
                  <p className="font-bold text-lg text-[#214B23]">
                    {item.date}
                  </p>
                  <p className="text-base text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
