import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#110f16] pt-20 px-4">
      <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-3xl bg-[#1a1924]">
        <div className="p-6">
          <div className="overflow-hidden rounded-lg">
            {/* Button with Tailwind Gradient */}
            <div className="w-full flex justify-center mb-6">
              <a
                href="https://chat.whatsapp.com/L68HsPj01krEqtL6fn1SjH"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-[length:200%_auto] hover:bg-[position:right_center] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
                style={{
                  maxWidth: "90%",
                }}
              >
                🚀 Join Our WhatsApp Group for Recruitment Updates 🚀
              </a>
            </div>
            {/* Embedded Google Form */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeKP8NTkHEDkH56f8SZaZEhdMksNoT4aQYIT2UifCPeVig1pg/viewform?embedded=true"
              width="640"
              height="900"
              className="w-full rounded-lg border border-gray-600 shadow-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
