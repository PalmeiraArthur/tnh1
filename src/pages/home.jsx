import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardNoticia from "../components/cardNoticia";
import CarrosselNoticias from "../components/carrosselNoticias";
import TopNoticias from "../components/topNoticias";

function Home() {

    return (
        <div >
            <Navbar></Navbar>
            <div className="bg-begeTNH1 w-max h-full bg-opacity-5 py-[130px] xl:grid xl:grid-flow-col xl:grid-rows-2 xl:gap-[20px] mx-auto">

                <CarrosselNoticias></CarrosselNoticias>


                <div className="grid grid-cols-3 gap-[20px] px-[0px] w-[980px]">
                    <CardNoticia title='Pinto' img='https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <CardNoticia title='Pinto' img='https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <CardNoticia title='Pinto' img='https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <CardNoticia title='Pinto' img='https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <CardNoticia title='Pinto' img='https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <CardNoticia title='Pinto' img='https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </div>
                <div className="row-span-2">
                    <TopNoticias></TopNoticias>

                </div>

            </div>

            <Footer></Footer>

        </div>

    );
}

export default Home;