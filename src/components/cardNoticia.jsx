import { useNavigate } from "react-router-dom";

function CardNoticia({
  title = "noticia",
  img = null,
  description = "descrição",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Noticia");
  };

  return (
    <div
      className="bg-cinzaClaroTNH1 w-full max-w-[313px] h-[287px] rounded flex flex-col justify-start items-center py-[6px] cursor-pointer transition-all hover:shadow-lg hover:underline hover:scale-105"
      onClick={handleClick}
    >
      <div className="bg-[#5E5E5E] rounded w-[301px] h-[169px] relative overflow-hidden">
        <img
          className="object-cover w-full h-full rounded"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 rounded shadow-[inset_0px_0px_8px_3px_rgba(0,_0,_0,_0.4)] pointer-events-none" />
      </div>


      <div className="flex flex-col justify-start items-start w-[301px] pt-[8px]">
        <h1 className="text-vermelhoTNH1 font-light text-[14px]">{title}</h1>
        <h1 className="text-begeTNH1 font-semibold text-[20px]">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default CardNoticia;
