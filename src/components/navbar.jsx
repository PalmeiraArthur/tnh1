import React from "react";
import MenuDropdown from "./menuDropdown";
import Hamburgermenu from "./hamburguerMenu";
import Searchbar from "./searchBar";



function Navbar() {
    return (
        <div className="bg-cinzaEscuroTNH1 h-[70px] xl:h-[90px] drop-shadow-4xl backdrop:blur-md fixed top-0 left-0 w-full z-10">

            <div className="mx-[20px] xl:mx-[300px] flex justify-between items-center h-full">
                <svg className=" h-[30px] xl:h-[59px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 457 216">
                    <path fill="#F7EDE2" d="M349 0a108 108 0 1 1 0 216V0Zm37.6 59L364 84l12 12.8L386.6 85v72H409V59h-22.4ZM38.9 68.9h22v87.6h-22V68.9ZM0 59h99.6v19.5H0V59Zm190 83-7.7 1.1V59h21.4v97.5h-28l-62.3-84.1 7.5-1.2v85.3H99.6V59h28.6l61.7 83Zm33.6-83h22.1v97.5h-22V59Zm78 0h22.1v97.5h-22V59Zm-65.9 38.5h75.7v19.3h-75.7V97.5Z" />
                </svg>

                <Searchbar></Searchbar>


                <div className="block xl:hidden">
                    <Hamburgermenu></Hamburgermenu>
                </div>

                <div className="hidden xl:block">
                 <MenuDropdown></MenuDropdown>

                </div>
  

            </div>




        </div>
    );
}

export default Navbar;