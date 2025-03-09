import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const FullPaperFormat = () => {
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
            Full Paper Format
          </h1>
        </div>
      </header>

      {/* Konten utama */}
      <main className="max-w-4xl mx-auto px-4 py-8 -mt-10 md:-mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Section: Penerimaan Paper */}
          <section className="mb-6">
            <p className="mb-4">
              We accept the submission of high-quality papers describing
              original and unpublished results of conceptual, constructive,
              experimental and theoretical work or research in all of the topic
              areas mentioned. Submission of a manuscript implies that it is not
              under consideration for publication elsewhere.
            </p>
          </section>

          {/* Section: Guidelines & Reviewing */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Full paper guidelines &amp; Reviewing Process
            </h2>
            <p className="mb-4">
              All manuscripts will be subjected to double-blind peer-review and
              are expected to meet the scientific criteria of novelty and
              academic excellence. The submitting author is responsible for
              ensuring that the article’s publication has been approved by all
              other co-authors and takes responsibility for the paper during
              submission and peer review. The publisher will not be held legally
              responsible should there be any claims for compensation.
            </p>
          </section>

          {/* Section: Language */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Language</h2>
            <p className="mb-4">
              The text should be in English, American or British usage is
              accepted, but not a mixture of both. Authors who feel their
              English language manuscript may require editing to eliminate
              possible grammatical or spelling errors and to conform to correct
              scientific English may wish to use relevant editing apps or
              service.
            </p>
          </section>

          {/* Section: Paper Structure */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Paper Structure</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Purpose/Objectives</li>
              <li>Methodology/Approach</li>
              <li>Findings/Results</li>
              <li>Conclusion/Implications/Recommendations</li>
              <li>Acknowledgements (when appropriate)</li>
              <li>References</li>
              <li>Appendices (when appropriate)</li>
            </ul>
          </section>

          {/* Section: Presentation & Publication */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Presentation &amp; Publication
            </h2>
            <p className="mb-4">
              Full paper will be requested after the conference for publication
              opportunities.
            </p>
          </section>

          {/* Section: File format */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">File format</h2>
            <p className="mb-4">MS Word-compatible file</p>
          </section>

          {/* Section: Academic Ethics */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Academic Ethics</h2>
            <p className="mb-4">
              Articles submitted to the conference should report original and
              previously unpublished findings. Following the ethical conduct is
              very critical in the academic world. Hence, any act of plagiarism
              cannot be tolerated. If an author is found to commit an act of
              plagiarism, the submission will be automatically dismissed.
            </p>
            <p className="mb-4">
              <a
                href="https://docs.google.com/uc?export=download&id=1utNO2u_RSXbss8x4CMLfntE1n_V10G4O"
                className="inline-block bg-[#FFD449] text-[#1F4923] font-semibold px-4 py-2 rounded hover:opacity-90 mt-2"
              >
                ICOMBUS-Fullpaper-Format.docx
              </a>{" "}
            </p>
          </section>

          {/* Section: Submission Method */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Submission Method</h2>
            <p className="mb-4">
              Please send your paper via the{" "}
              <a
                href="https://forms.gle/Jown4xr3Lp2wbTNM9 "
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ONLINE SUBMISSION FORM
              </a>
              . Should you have any questions about the submission, please
              contact us at{" "}
              <a
                href="mailto:icombus@ciputra.ac.id"
                className="text-blue-600 underline"
              >
                icombus@ciputra.ac.id
              </a>
              .
            </p>
          </section>

          {/* Section: Instructions for the Oral Presentation */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Instructions for the Oral Presentation
            </h2>
            <p className="mb-4">
              The length of the presentation should be around 15 minutes. You
              can use any form of presentation you wish, we provide you with the
              necessary equipment upon request. Make sure you attend the
              conference a bit earlier to prepare the props.
            </p>
          </section>

          {/* Section: Evaluation Process */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Evaluation Process</h2>
            <p className="mb-4">
              All papers will be subjected to double blind peer-reviews.
              Relevancy, structure, research method, ethical conducts, language
              standard, innovativeness, references, hypothesis, result
              presentation, proficiency, format, amongst many other factors are
              considered for the evaluation process.
            </p>
            <p className="mb-4">
              Papers that are accepted will be published in the Conference
              Proceedings.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FullPaperFormat;
