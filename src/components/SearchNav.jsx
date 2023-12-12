import React from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
function SearchNav(props) {
  let searchBoxOpen = false;
  const closeOpenSearch = () => {
    searchBoxOpen = !searchBoxOpen;
  };
  return (
    <div className="relative flex items-center  space-x-3 rtl:space-x-reverse">
      <a href="https://facebook.com/">
        <FaFacebook fill="blue" size={45} />
      </a>
      <div
        onClick={closeOpenSearch}
        className="cursor-pointer h-12 w-12 rounded-full flex items-center justify-center bg-gray-100"
      >
        <FaSearch fill="rgba(90,90,90,1)" />
      </div>
      <div
        className={`absolute left-[-12px] top-[-8px] h-24 w-64 border border-black bg-white`}
      >
        <div className="border pl-2 h-12 border-black flex items-center">
          <div className="h-8 w-8 cursor-pointer  rounded-full hover:bg-gray-100 flex items-center justify-center">
            <FaArrowLeftLong fill="rgba(150,150,150,1)" />
          </div>
          <div className="bg-gray-200 flex border border-black rounded-full">
            <label cla htmlFor="navSearch"></label>
            <input 
            id='navSearch'
            placeholder="Search Facebook"
            className="w-[90%] inline-block bg-transparent  p-1  placeholder:text-xs"
            type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchNav;
