import React, { useState } from "react";
import logo_radio_paju from "../assets/imgs/RADIOPAJUCARA103_.png";

const OuvirCard = ({ onClick }) => {

  return (
    <button
      className="w-full max-w-xs mx-auto flex flex-col items-center bg-begeTNH1 rounded shadow-lg transition transform hover:scale-105 focus:outline-none cursor-pointer"
      style={{ minHeight: "60px", maxWidth: "220px" }}
    >
      <div className="bg-begeTNH1 rounded mb-2">
        <img
          src={logo_radio_paju}
          alt="logo tv pajuçara"
          className="object-contain"
        />
      </div>
      <h2
        className={`flex items-center justify-center text-center text-base font-bold px-4 py-2 rounded-b duration-300 w-full
        `}
      >
        OUVIR
      </h2>
    </button>
  );
};

export default OuvirCard;
