import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardNoticia from "../components/cardNoticia";
import CarrosselNoticias from "../components/carrosselNoticias";
import { TopNoticias } from "../components/topNoticias";
import AoVivoCard from "../components/aoVivoCard";
import OuvirCard from "../components/ouvirCard";
import RedLine from "../components/RedLine";
import CardExtendido from "../components/cardExtendido";
import CardReduzido from "../components/cardReduzido";

function Home() {
  const mockNews = [
    {
      id: 1,
      title:
        "Lorem ipsum quam amet est lectus nulla sagittis dolor augue sagittis varius cras mi.",
      link: "#",
    },
    {
      id: 2,
      title:
        "Lorem ipsum eget aliquam ac risus in magna vel tellus id nec dui malesuada.",
      link: "#",
    },
    {
      id: 3,
      title:
        "Lorem ipsum tempus pharetra mi leo nibh at nisl eget nulla purus convallis tristique.",
      link: "#",
    },
    {
      id: 4,
      title:
        "Lorem ipsum ut phasellus velit pellentesque interdum tincidunt sit tristique eu dui imperdiet.",
      link: "#",
    },
    {
      id: 5,
      title:
        "Lorem ipsum turpis nec viverra neque tempus egestas quis ultricies nisi pulvinar fermentum.",
      link: "#",
    },
    { id: 6, title: "Notícia extra para mostrar +5", link: "#" },
    { id: 7, title: "Outra notícia adicional.", link: "#" },
    { id: 8, title: "Outra notícia adicional.", link: "#" },
    { id: 9, title: "Outra notícia adicional.", link: "#" },
    { id: 10, title: "Outra notícia adicional.", link: "#" },
  ];

  return (
    <div className="flex flex-col justify-center items-center" >
      <Navbar></Navbar>
      <div className="flex mt-[100px] xl:hidden flex-row gap-[20px]">
        <AoVivoCard />
        <OuvirCard />
      </div>
      <div className=" w-max h-full pt-[130px] xl:grid xl:grid-flow-col xl:grid-rows-2 xl:gap-[10px] pb-[20px] ">
        <CarrosselNoticias></CarrosselNoticias>

        <div className="pt-[36px] grid grid-cols-1 xl:grid-cols-3 gap-[20px] w-full max-w-[980px] ">
          <CardNoticia
            title="Noticia"
            img="https://maceioalgovbr.dhost.cloud/uploads/imagens/Caminho-de-Moises-Ponta-Verde-SEMTUR-fotos-Jonathan-Lins-16.jpg"
          />
          <CardNoticia
            title="Noticia"
            img="https://www.viagensecaminhos.com/wp-content/uploads/2023/12/maceio-praia-de-pajucara.jpg"
          />
          <CardNoticia
            title="Noticia"
            img="https://maceioalgovbr.dhost.cloud/uploads/imagens/26-07-23-Ponta-Verde-Maceio-Orla-Praia-SEMTUR-foto-Jonathan-Lins-7.jpg"
          />
          <CardNoticia
            title="Noticia"
            img="https://uploads.grupodicas.com/2025/03/YHXsRMU2-noite-em-maceio-1-1024x576.webp"
          />
          <CardNoticia
            title="Noticia"
            img="https://www.agaxtur.com.br/portals/6/Images/destinos/Maceio.png"
          />
          <CardNoticia
            title="Noticia"
            img="https://i0.wp.com/www.maceioalagoas.com/wp-content/uploads/2022/06/maragogi.jpg?fit=1024%2C575&ssl=1"
          />
        </div>
        <div className="row-span-2 hidden xl:block">
          <div className="flex flex-row gap-[10px] justify-center">
            <AoVivoCard />
            <OuvirCard />
          </div>
          <TopNoticias news={mockNews} />
        </div>
      </div>

      <div className="w-full max-w-[1320px] px-4 mx-auto" >
        <a className="flex flex-row w-full max-w-[1320px] justify-center items-center text-[24px] mb-[20px]">
          Categorias
          <RedLine></RedLine>
        </a>
        <div className="flex flex-col w-full xl:grid xl:grid-flow-col xl:grid-rows-2 gap-[20px] ">
          <div className="row-span-3" >
            <CardExtendido
              img="https://maceioalgovbr.dhost.cloud/uploads/imagens/26-07-23-Ponta-Verde-Maceio-Orla-Praia-SEMTUR-foto-Jonathan-Lins-7.jpg"></CardExtendido>
          </div>


          <div className="flex flex-col xl:col-span-2  xl:flex-row gap-[20px]">
            <CardNoticia
              img="https://www.agaxtur.com.br/portals/6/Images/destinos/Maceio.png">
            </CardNoticia>

            <CardNoticia
              img="https://www.agaxtur.com.br/portals/6/Images/destinos/Maceio.png"></CardNoticia>
          </div>

          <div className="flex flex-col xl:flex-row gap-[20px]">
            <CardReduzido
              img="https://uploads.grupodicas.com/2025/03/YHXsRMU2-noite-em-maceio-1-1024x576.webp">
            </CardReduzido>

            <CardReduzido
              img="https://uploads.grupodicas.com/2025/03/YHXsRMU2-noite-em-maceio-1-1024x576.webp">
            </CardReduzido>
          </div>
        </div>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
