import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Garis hijau di bagian atas */}
      <div style={{ backgroundColor: "#1F4923", height: "4px" }} />

      <div className="container mx-auto p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Hosted by</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Universitas Ciputra Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logoUC.png"
              alt="Universitas Ciputra"
              width={350}
              height={100}
              priority
            />
          </div>

          {/* Student Union Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logoSU.png"
              alt="Student Union International Business Management"
              width={250}
              height={100}
              priority
            />
          </div>
        </div>

        {/* Contact Information */}
        <div
          className="mt-8 rounded-full py-4 px-8 text-white text-center max-w-lg mx-auto"
          style={{
            background: "linear-gradient(to right, #1F4923, #558C3F)",
          }}
        >
          <p className="font-medium">Contact Person:</p>
          <p className="font-bold">Jean (WA: +62 822 2897 1236)</p>
          <p className="font-bold">Jonathan (WA: +62 857 9588 2313)</p>
          <p className="font-bold">Email: icombus@ciputra.ac.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
