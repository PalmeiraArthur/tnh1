import { useNavigate } from "react-router-dom";

function CarrosselNoticias({
  title = "noticia",
  img = null,
  description = "descrição",
  link = "/",
}) {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-cinzaClaroTNH1 xl:w-[980px] xl:h-[600px] rounded flex flex-col justify-start items-center py-[6px] cursor-pointer transition-all hover:shadow-lg hover:underline hover:scale-105"
      onClick={() => navigate(link)}
    >


      <div className="flex flex-col justify-start items-start w-[301px] pt-[8px]">
        <h1 className="text-vermelhoTNH1 font-light text-[14px]">{title}</h1>
        <h1 className="text-begeTNH1 font-semibold text-[20px]">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default CarrosselNoticias;
