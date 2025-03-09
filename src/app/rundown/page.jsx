import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const rundownData = [
  {
    start: "08:30",
    end: "09:00",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "Open gate",
  },
  {
    start: "09:00",
    end: "09:05",
    duration: "0:05:00",
    venue: "Main Room",
    activity: "Opening",
  },
  {
    start: "09:05",
    end: "09:08",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Opening Prayer",
  },
  {
    start: "09:08",
    end: "09:11",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Singing National Anthem",
  },
  {
    start: "09:11",
    end: "09:14",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Singing Hymne UC",
  },
  {
    start: "09:14",
    end: "09:17",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "The head of ICOMBUS speech",
  },
  {
    start: "09:17",
    end: "09:20",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "President of IBM Student Union speech",
  },
  {
    start: "09:20",
    end: "09:23",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Vice Head Department of IBM Major speech",
  },
  {
    start: "09:23",
    end: "09:26",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Rundown reading",
  },
  {
    start: "09:26",
    end: "09:29",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "09:29",
    end: "09:59",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "First Speaker session",
  },
  {
    start: "09:59",
    end: "10:14",
    duration: "0:15:00",
    venue: "Main Room",
    activity: "QnA",
  },
  {
    start: "10:14",
    end: "10:17",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Speaker Documentation",
  },
  {
    start: "10:17",
    end: "10:20",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "10:20",
    end: "10:50",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "Second Speaker session",
  },
  {
    start: "10:50",
    end: "11:05",
    duration: "0:15:00",
    venue: "Main Room",
    activity: "QnA",
  },
  {
    start: "11:05",
    end: "11:08",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Speaker Documentation",
  },
  {
    start: "11:08",
    end: "11:11",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "11:11",
    end: "11:41",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "Third Speaker session",
  },
  {
    start: "11:41",
    end: "11:56",
    duration: "0:15:00",
    venue: "Main Room",
    activity: "QnA",
  },
  {
    start: "11:56",
    end: "11:59",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Speaker Documentation",
  },
  {
    start: "11:59",
    end: "12:02",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "12:02",
    end: "12:32",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "Fourth Speaker session",
  },
  {
    start: "12:32",
    end: "12:47",
    duration: "0:15:00",
    venue: "Main Room",
    activity: "QnA",
  },
  {
    start: "12:47",
    end: "12:50",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Speaker Documentation",
  },
  {
    start: "12:50",
    end: "12:53",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "12:53",
    end: "14:13",
    duration: "1:20:00",
    venue: "Main Room",
    activity: "Break",
  },
  {
    start: "14:13",
    end: "14:16",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "14:16",
    end: "17:16",
    duration: "3:00:00",
    venue: "Break Out Room",
    activity: "Break out room session",
  },
  {
    start: "17:16",
    end: "17:19",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "MC Time",
  },
  {
    start: "17:19",
    end: "17:24",
    duration: "0:05:00",
    venue: "Main Room",
    activity: "Closing",
  },
  {
    start: "17:24",
    end: "17:27",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Documentation",
  },
  {
    start: "17:27",
    end: "17:30",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Closing Prayer",
  },
];

const Rundown = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bagian judul & info */}
        <div className="text-left mb-8">
          <a
            href="https://docs.google.com/uc?export=download&id=1rTsyl-Y6MsOUB16EEXcfWe2RIkvmsZg2"
            className="inline-block bg-gradient-to-r from-[#345327] to-[#A3953B] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90"
          >
            Download ICOMBUS Rundown
          </a>

          {/* Logo */}
          <div className="py-4">
            <Image
              src="/logo.png"
              alt="ICOMBUS logo"
              width={200}
              height={50}
              priority
            />
          </div>

          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#345327]">
            Rundown
          </h1>
          <p className="text-gray-600 font-semibold">Online: Zoom</p>
          <p className="text-gray-600 font-semibold mb-4">Date: 30 May 2025</p>
        </div>

        {/* Tabel rundown */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#1F4923] text-left text-xs sm:text-sm md:text-base">
            <thead className="bg-[#1F4923] text-white">
              <tr>
                <th className="p-3 border-r border-[#1F4923]">Start</th>
                <th className="p-3 border-r border-[#1F4923]">End</th>
                <th className="p-3 border-r border-[#1F4923]">Duration</th>
                <th className="p-3 border-r border-[#1F4923]">Venue</th>
                <th className="p-3">Activity</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {rundownData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.start}
                  </td>
                  <td className="p-3 border-b border-[#1F4923]">{item.end}</td>
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.duration}
                  </td>
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.venue}
                  </td>
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.activity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Rundown;
