import Navbar from "../components/navbar";
import Footer from "../components/footer";
import radioPajucara from "../assets/radioPajucaraBranca.png";
import bgRadio from "../assets/bgRadio.jpg";


function Radio() {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Background da página com filtro */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={bgRadio}
                    alt="Background Radio"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#E97A05] opacity-70"></div>
            </div>


            <Navbar />


            <main className="flex-grow flex flex-col items-center justify-center gap-[0px] py-10">

                <div className="flex-grow flex flex-row items-center justify-center gap-6 py-10">
                    <img className="h-auto " src={radioPajucara} alt="Logo Rádio Pajuçara" />
                    <div className="bg-[#FFAE00] h-[2px] w-[400px]">

                    </div>
                    <div>
                        <h1 className="text-[40px] font-extrabold">OUÇA AGORA</h1>
                        <h1>@PAJUCARAFM103</h1>
                    </div>
                </div>



                <iframe
                    title="deezer-widget"
                    src="https://widget.deezer.com/widget/dark/playlist/5311994366"
                    width="400"
                    height="450"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="encrypted-media; clipboard-write"
                />




            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Radio;
