import { Link } from "react-router-dom";
import radioPajucara from "../assets/RADIOPAJUCARA103_.png";
import icons from "./icons";

function OuvirCard() {
  return (
    <div>
      <div className="h-[58x] w-[100px] xl:h-[65px] xl:w-[155px] bg-begeTNH1 flex justify-center items-center rounded-t">
        <img className="h-[50px] w-[140px]" src={radioPajucara} alt="Logo TV Pajuçara" />
      </div>

      <Link to="/Radio">
        <button className="w-[100px] h-[26px] xl:h-[26px] xl:w-[155px] flex justify-center items-center bg-[#E97A05] rounded-b gap-[10px]">
          <span className="font-bold text-[12px] xl:text-[16px]">OUVIR AGORA</span>
        </button>
      </Link>
    </div>
  );
}

export default OuvirCard;
