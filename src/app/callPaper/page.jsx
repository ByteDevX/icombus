import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const CallPaper = () => {
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
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black opacity-40" />
        {/* Teks judul */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Call for Papers
          </h1>
        </div>
      </header>

      {/* Konten utama */}
      <main className="max-w-4xl mx-auto px-4 py-8 -mt-10 md:-mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Section 1: Deskripsi Umum */}
          <section className="mb-8">
            <p className="mb-4">
              The 1st International Conference on Management and Business
              Strategy which will be held online on <strong>30 May 2025</strong>{" "}
              in Surabaya, Indonesia, is the premier forum for the presentation
              of new advances and research results in education theory and
              practice.
            </p>
            <p className="mb-4">
              This conference is a prestigious event, organized to provide an
              international platform for academicians, researchers, managers,
              industrial participants, and students to share their research
              findings with global experts. All full paper submissions will be
              peer-reviewed and evaluated based on originality, technical and/or
              research depth, accuracy, and relevance to conference themes and
              topics.
            </p>
          </section>

          {/* Section 2: Important Deadlines */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Important Deadlines</h2>
            <p className="mb-4">
              Authors will be notified of Abstract acceptance within 7 to 14
              days. The optional full paper submission, including detailed
              guidelines for publication in Conference Proceedings,
              peer-reviewed journals, or as a Monograph, will be emailed within
              a few weeks after the conference.
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Extended Abstract Submission Deadline:</strong> 5 April,
                2025
              </li>
              <li>
                <strong>Abstract Notification of Acceptance:</strong> 16 April,
                2025
              </li>
              <li>
                <strong>Payment Deadline:</strong> 20 April, 2025
              </li>
              <li>
                <strong>Full Paper Submission Deadline:</strong> 25 April, 2025
              </li>
              <li>
                <strong>Presentation Material Submission Deadline:</strong>
                10 May, 2025
              </li>
              <li>
                <strong>Conference Dates:</strong> 30 May, 2025
              </li>
            </ul>
          </section>

          {/* Section 3: Topik dan Kriteria */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="mb-4">
              The conference is seeking submissions related to the following
              conference topics:{" "}
              <strong>Management, Economics, Business, Finance</strong>. Other
              related tracks and topics will also be considered.
            </p>
            <p className="mb-4">
              Submitted abstracts will be evaluated by the Scientific Committee.
              All submissions should report original and previously unpublished
              research results no matter the type of research paper you are
              presenting. Manuscripts should meet the format set by the
              Conference committee and are subject to review. Detailed
              instructions and full paper submission guidelines will be emailed
              within a few weeks following the conference.
            </p>
          </section>

          {/* Section 4: Submission Info */}
          <section className="mb-8">
            <ul className="list-disc ml-6 mb-4">
              <li>
                Please submit your abstract papers via the{" "}
                <a
                  href="https://forms.gle/Jown4xr3Lp2wbTNM9 "
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ONLINE SUBMISSION FORM
                </a>
                .
              </li>
              <li>
                For more information about the conference, you are welcome to
                contact the organizing committee directly via{" "}
                <a
                  href="mailto:icombus@ciputra.ac.id"
                  className="text-blue-600 underline"
                >
                  icombus@ciputra.ac.id
                </a>
                .
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CallPaper;
