import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AbstractFormat = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      {/* Header dengan asset.jpg */}
      <header className="relative w-full h-64 md:h-96">
        <Image
          src="/images/asset.jpg"
          alt="Header Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gelap untuk meningkatkan kontras teks */}
        <div className="absolute inset-0 bg-black opacity-40" />
        {/* Teks overlay pada header */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Abstract Format
          </h1>
        </div>
      </header>

      {/* Konten utama */}
      <main className="max-w-4xl mx-auto px-4 py-8 -mt-10 md:-mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="mb-4 leading-relaxed">
            You are invited to submit your abstract to the 1st International
            Conference on Management and Business Strategy, May 30, 2025 in
            Surabaya, Indonesia. Please send your abstract for evaluation by the
            organizing Scientific Committee and if the abstract is accepted, the
            author(s) can register for the Conference. After the conference, the
            full paper will be requested for subsequent publication
            opportunities. Otherwise, your abstract only will be published in
            the Proceeding.
          </p>
          <p className="mb-4 leading-relaxed">
            Download the abstract template for submission details:
            <br />
            <a
              href="https://docs.google.com/uc?export=download&id=1PxE4SIlx8it9pyBk-_sfntnf0dIGMRtR"
              className="inline-block bg-[#FFD449] text-[#1F4923] font-semibold px-4 py-2 rounded hover:opacity-90 mt-2"
            >
              ICOMBUS-Abstract-Format.docx
            </a>{" "}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AbstractFormat;
