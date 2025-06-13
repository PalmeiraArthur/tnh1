import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import icons from './icons';

function MenuDropdown() {
    return (
        <Menu>
            {({ open }) => (
                <>
                    <MenuButton className=" z-50  h-[40px] w-[160px] flex flex-row items-center justify-center gap-[5px] bg-cinzaClaroTNH1  rounded font-normal text-[15px] outline-none hover:bg-hover transition-all">
                        <icons.CategoryIcon></icons.CategoryIcon>
                        Categorias
                        <span
                            className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                                }`}
                        >
                            <icons.SetaDownIcon />
                        </span>
                    </MenuButton>


                    <MenuItems className="z-50 mt-[10px] h-[auto] w-[160px] focus:outline-none bg-cinzaClaroTNH1 rounded text-center shadow-[0px_0px_7px_1px_rgba(0,_0,_0,_0.3)]" anchor="bottom end">
                        <div className='my-[10px] flex flex-col gap-[5px]'>
                            <MenuItem>
                                <a className="flex items-center gap-[15px] font-medium hover:bg-hover cursor-pointer py-[7px] rounded mx-[5px] transition-all">
                                    <icons.UltimasIcon /> Últimas
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="flex items-center gap-[15px] font-medium hover:bg-hover cursor-pointer py-[7px] rounded mx-[5px] transition-all">
                                    <icons.MaceioIcon /> Maceió
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="flex items-center gap-[15px] font-medium hover:bg-hover cursor-pointer py-[7px] rounded mx-[5px] transition-all">
                                    <icons.AlagoasIcon /> Alagoas
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="flex items-center gap-[15px] font-medium hover:bg-hover cursor-pointer py-[7px] rounded mx-[5px] transition-all">
                                    <icons.PoliciaIcon /> Polícia
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="flex items-center gap-[15px] font-medium hover:bg-hover cursor-pointer py-[7px] rounded mx-[5px] transition-all">
                                    <icons.BlogsIcon /> Blogs
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="flex items-center gap-[15px] font-medium hover:bg-hover cursor-pointer py-[7px] rounded mx-[5px] transition-all">
                                    <icons.BrasilIcon /> Brasil
                                </a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </>
            )}
        </Menu>
    );
}

export default MenuDropdown;
