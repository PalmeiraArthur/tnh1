import React, { useState } from "react";
import logo_tv_paju from "../assets/imgs/RADIOPAJUCARA103_.png";
import { BsBroadcast } from "react-icons/bs";

const AoVivoCard = ({ onClick }) => {
  const [active, setActive] = useState(false);

  const handleOnLive = () => {
    setActive((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleOnLive}
      className="w-full max-w-xs mx-auto flex flex-col items-center bg-begeTNH1 rounded shadow-lg transition transform hover:scale-105 focus:outline-none"
      style={{ minHeight: "60px", maxWidth: "220px" }}
    >
      <div className="bg-begeTNH1 rounded mb-2">
        <img
          src={logo_tv_paju}
          alt="logo tv pajuçara"
          className="object-contain"
        />
      </div>
      <h2
        className={`flex items-center justify-center text-center text-base font-bold px-4 py-2 rounded-b transition-colors duration-300 w-full
          ${
            active
              ? "bg-vermelhoTNH1 text-begeTNH1"
              : "bg-cinzaEscuroTNH1 text-cinzaClaroTNH1"
          }
        `}
      >
        <span className="mr-2 flex items-center">
          <BsBroadcast size={18} />
        </span>{" "}
        AO VIVO
      </h2>
    </button>
  );
};

export default AoVivoCard;
