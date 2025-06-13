import { useNavigate } from "react-router-dom";

function CarrosselNoticias() {
  return (
    <div>
      <div className="carousel w-[303px] h-[191px] xl:h-[600px] xl:w-[980px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://harus.ind.br/wp-content/uploads/2023/02/5-praias-brasileiras.jpg"
            className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://maceioalgovbr.dhost.cloud/uploads/imagens/Caminho-de-Moises-Ponta-Verde-SEMTUR-fotos-Jonathan-Lins-16.jpg"
            className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://media.staticontent.com/media/pictures/88836def-639e-414a-83e8-3fcaa3d74fa8"
            className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://maceioalgovbr.dhost.cloud/uploads/imagens/06-12-2021-Praia-Ponta-Verde-Turismo-SEMTEL-Foto-Emile-Valoes-3.jpg"
            className="w-full" />
        </div>
      </div>
      <div className="flex  justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );

};

export default CarrosselNoticias;
