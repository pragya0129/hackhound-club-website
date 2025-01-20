import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#110f16] pt-20 px-4">
      <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-3xl bg-[#1a1924]">
        <div className="p-6">
          <div className="overflow-hidden rounded-lg">
            {/* Message about recruitment */}
            <div className="w-full text-center mb-6">
              <h2 className="text-3xl text-white font-semibold mb-4">Recruitment is Closed</h2>
              <p className="text-lg text-gray-300 mb-4">
                Sorry, the recruitment process is currently closed. Please stay tuned for future updates.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Follow us on social media for the latest news and updates!
              </p>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://twitter.com/hackhound2k24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-all duration-300"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
               
                <a
                  href="https://instagram.com/hack.hound"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition-all duration-300"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/hackhound/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-all duration-300"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
