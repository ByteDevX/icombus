import Image from "next/image";

export default function RegistrationFee() {
  return (
    <section className="relative bg-[#B19726] py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 h-full">
        <Image
          src="/images/asset3.png"
          alt="Triangular design element"
          width={300}
          height={300}
          className="object-contain drop-shadow-2xl transform -rotate-12"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Judul Section */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
          REGISTRATION FEE
        </h2>

        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Fee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
            {/* National Fee */}
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-3xl md:text-4xl text-center font-semibold text-[#365427] mb-6">
                National
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Participant */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-t from-[#1F4923] to-[#558C3F] p-3 md:p-4 text-center text-white">
                    <p className="font-semibold text-lg md:text-xl">
                      Participant
                    </p>
                  </div>
                  <div className="bg-white p-3 md:p-4 text-center">
                    <p className="text-lg md:text-xl font-bold text-black">
                      Rp. 100.000
                    </p>
                  </div>
                </div>
                {/* Presenter */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-t from-[#1F4923] to-[#558C3F] p-3 md:p-4 text-center text-white">
                    <p className="font-semibold text-lg md:text-xl">
                      Presenter
                    </p>
                  </div>
                  <div className="bg-white p-3 md:p-4 text-center">
                    <p className="text-lg md:text-xl font-bold text-black">
                      Rp. 400.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white/40 p-3 rounded-lg text-center text-[#365427]">
                <p className="font-medium">
                  For National participants, please pay using Bank BCA transfer
                </p>
              </div>
            </div>

            {/* International Fee */}
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-3xl md:text-4xl text-center font-semibold text-[#365427] mb-6">
                International
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Participant */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-t from-[#1F4923] to-[#558C3F] p-3 md:p-4 text-center text-white">
                    <p className="font-semibold text-lg md:text-xl">
                      Participant
                    </p>
                  </div>
                  <div className="bg-white p-3 md:p-4 text-center">
                    <p className="text-lg md:text-xl font-bold text-black">
                      USD 7
                    </p>
                  </div>
                </div>
                {/* Presenter */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-t from-[#1F4923] to-[#558C3F] p-3 md:p-4 text-center text-white">
                    <p className="font-semibold text-lg md:text-xl">
                      Presenter
                    </p>
                  </div>
                  <div className="bg-white p-3 md:p-4 text-center">
                    <p className="text-lg md:text-xl font-bold text-black">
                      USD 30
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white/40 p-3 rounded-lg text-center text-[#365427]">
                <p className="font-medium">
                  For International participants, please pay using PayPal
                </p>
              </div>
            </div>
          </div>

          {/* Transfer Information */}
          <div className="flex flex-col space-y-8 items-center w-full max-w-3xl">
            {/* Bank BCA Transfer */}
            <div className="bg-gradient-to-r from-[#1F4923] to-[#558C3F] text-white rounded-full py-6 px-8 md:px-10 shadow-xl w-full">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Transfer to:
                </h3>
                <p className="font-medium text-xl md:text-2xl">Bank BCA</p>
                <p className="text-lg md:text-xl">
                  Account Name: Nikita Bella Angelina
                </p>
                <p className="text-lg md:text-xl">
                  As Student Union's Treasurer
                </p>
                <p className="text-lg md:text-xl">
                  Account Number: 8630 481 741
                </p>
                <p className="mt-2 text-sm italic">For National Participants</p>
              </div>
            </div>

            {/* PayPal Transfer */}
            <div className="bg-gradient-to-r from-[#1F4923] to-[#558C3F] text-white rounded-full py-6 px-8 md:px-10 shadow-xl w-full">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Transfer to:
                </h3>
                <p className="font-medium text-xl md:text-2xl">Paypal</p>
                <p className="text-lg md:text-xl">Account Name: SUIBM</p>
                <p className="text-lg md:text-xl">
                  Account Link:{" "}
                  <a
                    href="https://paypal.me/SUIBM"
                    className="underline text-white hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paypal.me/SUIBM
                  </a>
                </p>
                <p className="mt-2 text-sm italic">
                  For International Participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
