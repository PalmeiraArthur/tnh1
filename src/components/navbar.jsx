import React from "react";
import SearchBar from "./searchBar";

function Navbar(){
    return(
        <nav className="bg-cinzaEscuroTNH1 h-[90px] flex items-center">
            <svg className="h-[59px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 457 216">
            <path fill="#F7EDE2" d="M349 0a108 108 0 1 1 0 216V0Zm37.6 59L364 84l12 12.8L386.6 85v72H409V59h-22.4ZM38.9 68.9h22v87.6h-22V68.9ZM0 59h99.6v19.5H0V59Zm190 83-7.7 1.1V59h21.4v97.5h-28l-62.3-84.1 7.5-1.2v85.3H99.6V59h28.6l61.7 83Zm33.6-83h22.1v97.5h-22V59Zm78 0h22.1v97.5h-22V59Zm-65.9 38.5h75.7v19.3h-75.7V97.5Z"/>
            </svg>
            <SearchBar />
        </nav>
    );
}

export default Navbar;