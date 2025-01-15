import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-[#110f16] pt-20">
      <div className="shadow-md rounded-lg overflow-hidden w-full max-w-3xl">
        <div className="p-6">
          <div className="overflow-hidden rounded-lg">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKP8NTkHEDkH56f8SZaZEhdMksNoT4aQYIT2UifCPeVig1pg/viewform?embedded=true" onSubmit={console.log("DONE")} width="640" height="900" className="w-full">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
