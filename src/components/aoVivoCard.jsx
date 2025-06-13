import { useState } from "react";
import logoTvPajucara from "../assets/logo_tv_pajucara_horizontal.png";
import icons from "./icons";

function AoVivoCard() {
  const [isLive, setIsLive] = useState(true); // Estado para controlar se está ao vivo

  const handleToggleLive = () => {
    setIsLive((prev) => !prev);
  };

  return (
    <div>
      <div className="h-[58x] w-[100px] xl:h-[65px] xl:w-[155px] bg-begeTNH1 flex justify-center items-center rounded-t">
        <img className="h-[50px] w-[140px]" src={logoTvPajucara} alt="Logo TV Pajuçara" />
      </div>

      <button
        onClick={handleToggleLive}
        className={`xl:h-[26px] xl:w-[155px] flex justify-center items-center rounded-b gap-[10px] transition-colors duration-300 ${
          isLive ? "bg-vermelhoTNH1" : "bg-[#5E5E5E]"
        }`}
      >
        {isLive ? <icons.LiveIcon /> : <icons.GrayLiveIcon />}
        <a
          className={`font-bold ${
            isLive ? "text-[#F7EDE2]" : "text-[#9C9894]"
          }`}
        >
          AO VIVO
        </a>
      </button>
    </div>
  );
}

export default AoVivoCard;
