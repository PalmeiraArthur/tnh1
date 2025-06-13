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
    <div className="flex flex-col justify-center items-center" >
      <Navbar></Navbar>
       <div className="flex mt-[100px] xl:hidden flex-row gap-[20px]">
        <AoVivoCard />
        <OuvirCard />
       </div>
      <div className=" w-max h-full pt-[130px] xl:grid xl:grid-flow-col xl:grid-rows-2 xl:gap-[20px] mx-auto pb-[20px] ">
        <div>
          <CarrosselNoticias></CarrosselNoticias>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full max-w-[980px] mx-auto px-4">
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
        <div className="row-span-2 hidden xl:block">
          <div className="flex flex-row gap-[10px] justify-center">
            <AoVivoCard />
            <OuvirCard />
          </div>
          <TopNoticias news={mockNews} />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
