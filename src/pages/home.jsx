import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardNoticia from "../components/cardNoticia";
import CarrosselNoticias from "../components/carrosselNoticias";
import { TopNoticias } from "../components/topNoticias";
import AoVivoCard from "../components/aoVivoCard";
import OuvirCard from "../components/ouvirCard";
import RedLine from "../components/RedLine";

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
    <div>
      <Navbar></Navbar>
      <div className="bg-begeTNH1 w-max h-full bg-opacity-5 py-[130px] xl:grid xl:grid-flow-col xl:grid-rows-2 xl:gap-[20px] mx-auto p-5">
        <div>
          <CarrosselNoticias></CarrosselNoticias>
        </div>

        <div className="grid grid-cols-3 gap-[20px] px-[0px] w-[980px]">
          <CardNoticia
            title="Noticia"
            img="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardNoticia
            title="Noticia"
            img="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardNoticia
            title="Noticia"
            img="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardNoticia
            title="Noticia"
            img="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardNoticia
            title="Noticia"
            img="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardNoticia
            title="Noticia"
            img="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="row-span-2">
          <div className="flex flex-row gap-3 justify-center">
            <AoVivoCard />
            <OuvirCard />
          </div>
          <TopNoticias news={mockNews} />
        </div>
      </div>
      
      <div>
        <h2>Colunistas <RedLine /></h2>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
