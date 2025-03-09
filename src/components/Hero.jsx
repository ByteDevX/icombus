// components/Hero.jsx

export default function Hero() {
  return (
    <header className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center relative">
        {/* Dekorasi kiri */}
        <img
          src="/images/asset2.png"
          alt="Dekorasi kiri"
          // Contoh: letakkan di pojok kiri atas, dengan rotasi sekitar 10 derajat,
          // dan perbesar sedikit (width-48 = 12rem) supaya lebih mirip desain Figma
          className="hidden md:block absolute w-48 h-auto drop-shadow-4xl
                     -top+10 -left-60"
          style={{ transform: "rotate(90deg)" }}
        />

        {/* Dekorasi kanan */}
        <img
          src="/images/asset1.png"
          alt="Dekorasi kanan"
          // Contoh: letakkan di pojok kanan atas, rotasi -10 derajat
          className="hidden md:block absolute w-48 h-auto drop-shadow-4xl
                     -top-10 -right-24"
          style={{ transform: "rotate(-30deg)" }}
        />

        {/* Judul utama */}
        <h2 className="text-[48px] font-semibold text-[#365427]">
          ICOMBUS Conference 2025
        </h2>

        {/* Sub-judul */}
        <p className="mt-2 text-base md:text-lg text-gray-700">
          The 1st International Conference on Management and Business Strategy
        </p>

        {/* Judul tema */}
        <h1 className="mt-4 text-xl md:text-3xl font-bold max-w-3xl mx-auto text-black">
          "Global Perspectives on Management and Accounting: Driving Excellence
          in a Dynamic World"
        </h1>

        {/* Tombol */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="bg-gradient-to-r from-[#1F4923] to-[#558C3F] text-white px-6 py-2 rounded-full text-lg md:text-xl font-normal">
            Universitas Ciputra Surabaya
          </span>
          <div className="mt-8 flex flex-row items-center gap-4">
            <a
              href="https://forms.gle/uB9tQ4kUznuijfAv8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1F4923] to-[#558C3F] text-white px-6 py-2 rounded-full text-lg md:text-xl font-medium transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:[background-image:none] hover:bg-[#FFD449]"
            >
              CONFERENCE REGISTER
            </a>
            <a
              href="https://forms.gle/Jown4xr3Lp2wbTNM9 "
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1F4923] to-[#558C3F] text-white px-6 py-2 rounded-full text-lg md:text-xl font-medium transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:[background-image:none] hover:bg-[#FFD449]"
            >
              PRESENTER REGISTER
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
