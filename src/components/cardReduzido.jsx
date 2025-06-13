import { useNavigate } from "react-router-dom";

function CardReduzido({
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
      className="bg-cinzaClaroTNH1 max-w-[313px] xl:w-[313px] xl:h-[110px] rounded flex flex-row items-center gap-4 px-4 cursor-pointer transition-all hover:shadow-lg hover:underline"
      onClick={handleClick}
    >
      {/* Imagem com sombra inset */}
      <div className="bg-[#5E5E5E] rounded w-[82px] h-[82px] relative overflow-hidden shrink-0">
        <img
          className="object-cover w-full h-full rounded"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 rounded shadow-[inset_0_0_8px_3px_rgba(0,0,0,0.4)] pointer-events-none" />
      </div>

      {/* Texto ao lado da imagem */}
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-vermelhoTNH1 font-light text-[12px] leading-tight">
          {title.toUpperCase()}
        </h1>
        <h2 className="text-begeTNH1 font-semibold text-[16px] leading-tight">
          {description}
        </h2>
      </div>
    </div>
  );
}

export default CardReduzido;
