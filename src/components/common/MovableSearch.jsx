import React from "react";
import {  FaSearch } from "react-icons/fa";
function MovableSearch({searchValue, onChange}) {
  return (
    <div className="relative overflow-hidden  bg-gray-200 flex  rounded-full">
      <input
        value={searchValue}
        onChange={onChange}
        id="navSearch"
        placeholder="Search Facebook"
        className="text-gray-600 text-sm w-[90%] relative transition-all duration-700 left-[10%] focus:left-0  focus:w-full outline-none  focus:outline-none inline-block bg-transparent  py-2 px-3 placeholder:text-xs "
        type="text"
      />{" "}
      <label
        className="absolute h-full left-[0px] top-0 mx-2 flex items-center justify-center"
        htmlFor="navSearch"
      >
        <FaSearch size={12} fill="rgba(90,90,90,1)" />
      </label>
    </div>
  );
}

export default MovableSearch;
