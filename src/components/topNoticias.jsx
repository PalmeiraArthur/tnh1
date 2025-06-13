import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const TopNoticias = ({ news }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [open, setOpen] = useState(false);

  // toggle para abrir e fechar as noticias +lidas
  const handleToggleDrawer = () => {
    setOpen((prev) => !prev);
    setVisibleCount((prev) => (prev === 5 ? news.length : 5));
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 md:static md:mx-auto w-full max-w-sm">
      {/* Drawer Content */}
      <div
        className={`bg-gray-800 rounded-t-lg md:rounded-lg p-4 text-white shadow-lg transition-transform duration-300 md:translate-y-0 md:static w-full max-w-sm mx-auto
          ${open ? "translate-y-0" : "translate-y-full"}
          fixed bottom-0 left-0 right-0 md:relative md:block
        `}
        style={{ minHeight: open ? "300px" : "0", maxHeight: "90vh" }}
      >
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold pb-2 mb-0 flex items-center">
            +LIDAS
          </h2>
          <div className="h-1 w-full bg-red-500 rounded ml-3" />
        </div>

        <div className="space-y-0 divide-y divide-white/30">
          {news.slice(0, visibleCount).map((item, idx) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start bg-gray-700 rounded-md p-3 hover:bg-gray-600 transition first:mt-0 mt-2"
            >
              <span className="text-red-500 font-bold mr-2">{item.id}</span>
              <span className="text-sm">{item.title}</span>
            </a>
          ))}
        </div>

        <button
          onClick={handleToggleDrawer}
          className="w-full mt-4 flex justify-center items-center py-2 bg-gray-700 rounded-md hover:bg-gray-600 "
          aria-label={open ? "Fechar" : "Abrir"}
        >
          {open ? (
            <BiChevronUp size={18} className="mr-2" />
          ) : (
            <BiChevronDown size={18} className="mr-2" />
          )}
          {open ? "Fechar" : "Ver mais"}
        </button>
      </div>
    </div>
  );
};
