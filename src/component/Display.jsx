import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const DisplayRef = useRef();
  const location = useLocation();
  const isalbum = location.pathname.includes("album");
  const albumid = isalbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumid)].bgColor;
  useEffect(() => {
    if (isalbum) {
      DisplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      DisplayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={DisplayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/album/:id" element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
