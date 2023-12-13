import React from "react";

import MainNav from "./MainNav";
import SearchNav from "./SearchNav";
import MeMeNotAcc from "./MeMeNotAcc";

function NavBar(props) {
  return (
    <nav className="bg-white shadow-lg  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className=" flex flex-wrap items-center justify-between w-full ">
        <SearchNav />

        <MainNav />
        <MeMeNotAcc />
      </div>
    </nav>
  );
}

export default NavBar;
