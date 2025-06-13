import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Noticia() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Navbar></Navbar>
            <div className="h-screen my-[200px] w-[1320px] flex flex-col items-center gap-[20px] ">
                <h1 className="text-[38px] font-extrabold">
                    Titulo Noticias
                </h1>
                <h2 className="text-[20px] font-normal">
                    Publicado em 12/06/2025, às 16h02
                </h2>
                <img className="h-[1000px] rounded" src="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <h2 className="text-[20px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra dolor lacus, vitae gravida erat convallis a. Sed vestibulum placerat rutrum. Duis placerat urna nec nibh lacinia venenatis. Proin sollicitudin erat a dapibus posuere. Duis rutrum magna vitae egestas luctus. Etiam ligula libero, dignissim quis porta id, rutrum in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate at est at varius. Praesent malesuada non dui accumsan ultrices. Integer nisl velit, pellentesque et semper ut.
                </h2>
            </div>


            <Footer></Footer>

        </div>
    );
}

export default Noticia;