import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // ou '/css/skyblue' para tema diferente

function CarrosselNoticias() {
  const imagens = [
    "https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.viagensecaminhos.com/wp-content/uploads/2023/12/maceio-praia-de-pajucara.jpg",
    "https://maceioalgovbr.dhost.cloud/uploads/imagens/26-07-23-Ponta-Verde-Maceio-Orla-Praia-SEMTUR-foto-Jonathan-Lins-7.jpg",
    "https://uploads.grupodicas.com/2025/03/YHXsRMU2-noite-em-maceio-1-1024x576.webp",
    "https://www.agaxtur.com.br/portals/6/Images/destinos/Maceio.png",
  ];

  return (
    <div className=" w-[313px] h-[287px] xl:w-[980px] xl:h-[600px]">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
        aria-label="Carrossel de Imagens"
        style={{ height: '100%' }}
      >
        {imagens.map((url, index) => (
          <SplideSlide key={index}>
            <img
              src={url}
              alt={`Imagem ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-md rounded"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );

};

export default CarrosselNoticias;
