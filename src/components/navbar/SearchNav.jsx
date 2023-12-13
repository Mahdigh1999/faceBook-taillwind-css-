import React, { useState } from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../../styles/searchNav.css";

import UserSearchBox from "./UserSearchBox";
function SearchNav(props) {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([
    { name: "Mahdi", lastName: "ghaffari", image: "" },
    { name: "Alirezaa", lastName: "Amiri", image: "" },
    { name: "Arash", lastName: "mahdavi", image: "" },
    { name: "mahdis", lastName: "allahyari", image: "" },
  ]);
  let [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const search = () => {
    if (!searchValue) {
      return null;
    }
    const result = users.filter(
      (user) =>
        user.name.trim().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        user.lastName.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    return result;
  };
  const closeOpenSearch = () => {
    setSearchBoxOpen(!searchBoxOpen);
  };
  const handleSearchChange = (e) => {
    const searchStatment = e.target.value;
    setSearchValue(searchStatment);
  };
  return (
    <div className="relative flex items-center ml-2 md:mt-0 mt-3 space-x-3 rtl:space-x-reverse">
      <a href="https://facebook.com/">
        <FaFacebook fill="blue" size={45} />
      </a>
      <div
        onClick={closeOpenSearch}
        className="cursor-pointer h-12 w-12 mr-2 rounded-full flex items-center justify-center bg-gray-100"
      >
        <FaSearch fill="rgba(90,90,90,1)" />
      </div>
      {searchBoxOpen && (
        <UserSearchBox
          searchBoxOpen={searchBoxOpen}
          onOpen={closeOpenSearch}
          searchValue={searchValue}
          onChange= {handleSearchChange}
          search ={search}
        />
      )}
    </div>
  );
}

export default SearchNav;
