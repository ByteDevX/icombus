// components/ConferenceCountdown.jsx
"use client";

import Countdown from "./Countdown";

const ConferenceCountdown = () => {
  return (
    <section className="py-8" style={{ backgroundColor: "#1F4522" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Bagian Teks */}
        <div className="text-center">
          <h3 className="font-bold text-[48px] text-white">Conference Day:</h3>
          <p className="text-[32px] font-bold text-white">30 May 2025</p>
          <p className="text-[32px] font-bold text-white">08.30 WIB</p>
          <p className="text-[32px] font-bold text-white">
            Indonesia/Jakarta Time (GMT+7)
          </p>
        </div>

        {/* Bagian Countdown Timer */}
        <div className="mt-4 md:mt-0 md:ml-10">
          <Countdown textColor="#FFD449" />
        </div>
      </div>
    </section>
  );
};

export default ConferenceCountdown;
