import React from "react";

const RedLine = ({ height = "2px", color = "bg-vermelhoTNH1", className = "" }) => (
  <div
    className={`flex-1 ml-3 mb-2 rounded w-auto ${color} ${className}`}
    style={{ height }}
  ></div>
);

export default RedLine;
