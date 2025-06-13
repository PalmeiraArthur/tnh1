import React, { useState } from "react";

export const TopNoticias = ({ news }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 w-full max-w-sm mx-auto text-white">
      <h2 className="text-lg font-semibold border-b border-red-500 pb-2 mb-4">+LIDAS</h2>

      <div className="space-y-2">
        {news.slice(0, visibleCount).map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start bg-gray-700 rounded-md p-3 hover:bg-gray-600 transition"
          >
            <span className="text-red-500 font-bold mr-2">{item.id}</span>
            <span className="text-sm">{item.title}</span>
          </a>
        ))}
      </div>

      {visibleCount < news.length && (
        <button
          onClick={handleShowMore}
          className="w-full mt-4 flex justify-center items-center py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
        >
            -
        </button>
      )}
    </div>
  );
};
