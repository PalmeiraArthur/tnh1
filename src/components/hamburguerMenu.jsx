import React, { useState } from "react";
import icons from "./icons";

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="p-2 rounded focus:outline-none text-white transition-all z-50 relative"
            >
                {isOpen ? <icons.XIcon /> : <icons.HambuguerMenuIcon />}
            </button>

            {/* Sidebar lateral */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex justify-end">

                    {/* Sidebar lateral direita */}
                    <div className=" w-[180px] h-screen mt-[70px] p-2 bg-cinzaClaroTNH1 shadow-lg">

                            <div className='my-[10px] flex flex-col items-end gap-[20px]'>

                                <a className=" text-[20px] w-full flex items-center justify-end gap-[15px] font-regular hover:bg-hover cursor-pointer py-[7px] rounded transition-all ">
                                    Últimas <icons.UltimasIcon />
                                     
                                </a>

                                <a className="text-[20px] w-full flex items-center justify-end gap-[15px] font-regular hover:bg-hover cursor-pointer py-[7px] rounded transition-all">
                                    Maceió <icons.MaceioIcon /> 
                                </a>

                                <a className="text-[20px] w-full flex items-center justify-end gap-[15px] font-regular hover:bg-hover cursor-pointer py-[7px] rounded transition-all">
                                    Alagoas <icons.AlagoasIcon /> 
                                </a>

                                <a className="text-[20px] w-full flex items-center justify-end gap-[15px] font-regular hover:bg-hover cursor-pointer py-[7px] rounded transition-all">
                                    Polícia <icons.PoliciaIcon/> 
                                </a>

                                <a className="text-[20px] w-full flex items-center justify-end gap-[15px] font-regular hover:bg-hover cursor-pointer py-[7px] rounded transition-all">
                                    Blogs <icons.BlogsIcon /> 
                                </a>

                                <a className="text-[20px] w-full flex items-center justify-end gap-[15px] font-regular hover:bg-hover cursor-pointer py-[7px] rounded transition-all">
                                    Brasil<icons.BrasilIcon /> 
                                </a>

                                <div className="bg-vermelhoTNH1 h-[1px] w-full">

                                </div>

                            </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default HamburgerMenu;
