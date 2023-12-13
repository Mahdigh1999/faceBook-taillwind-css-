import React from 'react';
import {  FaSearch } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MovableSearch from '../common/MovableSearch';
function UserSearchBox({onOpen,searchValue,onChange,search}) {
    return (
        (
            <div
              className='absolute left-[-20px] top-[-8px] w-64 shadow-xl bg-white'
            >
              <div className={`pl-2  flex space-x-2 items-center`}>
                <div
                  onClick={onOpen}
                  className={`h-8 my-3 w-8 cursor-pointer
                  rounded-full hover:bg-gray-100 flex items-center
                  justify-center`}
                >
                  <FaArrowLeftLong fill="rgba(150,150,150,1)" />
                </div>
                <MovableSearch searchValue = {searchValue} onChange={onChange}/>
              </div>
              <div id="resultNavSearch" className="  w-full px-2">
                {!search() && <h3 className="text-center italic text-semibold text-gray-700">no result for you</h3>}
                
                {search() && search().map((user) => (
                  <Link
                    key={user.name + user.image + user.lastName}
                    className="text-sm hover:bg-gray-200 h-10 rounded-xl flex pl-3 items-center my-1"
                  >
                    <div
                      key={user.name + user.image + user.lastName}
                      className=" h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center mr-5"
                    >
                      {" "}
                      {user.image && <img src={user.image} alt={""} />}{" "}
                      {!user.image && <FaSearch fill="#555" />}
                    </div>
    
                    {user.name + " " + user.lastName}
                  </Link>
                ))}
              </div>
            </div>
          )
    );
}

export default UserSearchBox;