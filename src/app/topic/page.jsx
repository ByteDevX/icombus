import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const topics = [
  "Business Sustainability",
  "Business Ethics",
  "Business Innovation",
  "Multimedia and Digital Learning",
  "International Business Management",
  "Digital Transformation and Technology Management",
  "Entrepreneurship Management",
  "Economic Management",
  "Management Issues in Accounting and Finance",
  "Human Capital and Leadership",
  "Marketing Management",
  "Customer Relationship Management",
  "Operational and Quality Management",
  "Strategic Management",
  "Management Information System",
  "Creative Industry Management",
  "Taxation",
  "Tourism and Hospitality",
];

const Topic = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-[28px] font-semibold mb-4 text-[#365427]">
          The 1st International Conference on Management and Business Strategy
        </h1>
        <h2 className="text-[20px] font-semibold mb-4 text-[#365427]">
          List of Topics
        </h2>
        <table className="w-full mx-auto content-center">
          <tbody>
            {topics.map((topic, index) => (
              <tr key={index} className="border-b-5 border-[#1F4923]">
                <td className="py-2 px-2 text-[14px] sm:text-[16px] md:text-[20px] font-normal text-black">
                  {index + 1}.{" "}
                </td>
                <td className="py-2 text-[14px] sm:text-[16px] md:text-[20px] font-normal text-left text-black">
                  {topic}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Topic;
