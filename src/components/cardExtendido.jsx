import { useNavigate } from "react-router-dom";

function CardExtendido({
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
      className="bg-cinzaClaroTNH1 w-[313px] h-[300px] xl:w-[647px] xl:h-[475px] rounded flex flex-col justify-start items-center py-[12px] cursor-pointer transition-all hover:shadow-lg hover:underline"
      onClick={handleClick}
    >
      <div className="bg-[#5E5E5E] rounded xl:w-[621px] xl:h-[349px] relative overflow-hidden">
        <img
          className="object-cover w-full h-full rounded"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 rounded shadow-[inset_0px_0px_8px_3px_rgba(0,_0,_0,_0.4)] pointer-events-none" />
      </div>

      <div className="flex flex-col justify-start items-start w-[313px] xl:w-[621px] pt-[8px]">
        <h1 className="text-vermelhoTNH1 font-light xl:text-[14px]">{title}</h1>
        <h1 className="text-begeTNH1 font-semibold text-[20px]">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default CardExtendido;
