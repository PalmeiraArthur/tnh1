import icons from "./icons";

function Searchbar() {
    return (
        <div className="relative w-[195px] h-[40px]  xl:w-[450px]">
            <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full h-full pl-10 pr-4 bg-cinzaClaroTNH1 rounded outline-none"
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                <icons.SearchIcon />
            </div>

            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500">
                <icons.MicIcon />
            </div>
            
        </div>
    );
}

export default Searchbar;
