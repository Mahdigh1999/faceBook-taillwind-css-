import React from "react";
import { NavLink } from "react-router-dom";
import { PiHouseLineFill, PiHouseLine } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiMonitorPlay, PiMonitorPlayFill } from "react-icons/pi";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { RiGamepadFill, RiGamepadLine } from "react-icons/ri";
function MainNav(props) {
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-6 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "5px solid blue   ", transition: "0.5s" }
                : { borderBottom: "5px solid transparent" };
            }}
            to="/home"
            className="block text-blue-500 py-4 lg:px-12 md:px-8   mt-1 text-gray-500  rounded-t hover:bg-gray-100   "
            aria-current="page"
          >
            {({ isActive }) => {
              return isActive ? (
                <PiHouseLineFill size={25} />
              ) : (
                <PiHouseLine size={25} />
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "5px solid blue ", transition: "0.5s" }
                : { borderBottom: "5px solid transparent" };
            }}
            to="/friends"
            className="block text-blue-500  py-4 lg:px-12 md:px-8   mt-1 text-gray-500 rounded-t hover:bg-gray-100      "
          >
            {({ isActive }) => {
              return isActive ? (
                <FaUserFriends size={25} />
              ) : (
                <LiaUserFriendsSolid size={25} />
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "5px solid blue   ", transition: "0.5s" }
                : { borderBottom: "5px solid transparent" };
            }}
            to="/video"
            className="block text-blue-500  py-4 lg:px-12 md:px-8   mt-1 text-gray-500 rounded-t hover:bg-gray-100      "
          >
            {({ isActive }) => {
              return isActive ? (
                <PiMonitorPlayFill size={25} />
              ) : (
                <PiMonitorPlay size={25} />
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "5px solid blue   ", transition: "0.5s" }
                : { borderBottom: "5px solid transparent" };
            }}
            to="/groups"
            className="block text-blue-500  py-4 lg:px-12 md:px-8   mt-1 text-gray-500 rounded-t hover:bg-gray-100      "
          >
            {({ isActive }) => {
              return isActive ? (
                <HiUserGroup size={25} />
              ) : (
                <HiOutlineUserGroup size={25} />
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "5px solid blue   ", transition: "0.5s" }
                : { borderBottom: "5px solid transparent" };
            }}
            to="/gaming"
            className="block text-blue-500  py-4 lg:px-12 md:px-8   mt-1 text-gray-500 rounded-t hover:bg-gray-100      "
          >
            {({ isActive }) => {
              return isActive ? (
                <RiGamepadFill size={25} />
              ) : (
                <RiGamepadLine size={25} />
              );
            }}
          </NavLink>
        </li>
      </ul>

    </div>

  );
}

export default MainNav;
        //   <button
        //     data-collapse-toggle="navbar-sticky"
        //     type="button"
        //     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        //     aria-controls="navbar-sticky"
        //     aria-expanded="false"
        //   >
        //     <span className="sr-only">Open main menu</span>
        //     <svg
        //       className="w-5 h-5"
        //       aria-hidden="true"
        //       xmlns="http://www.w3.org/2000/svg"
        //       fill="none"
        //       viewBox="0 0 17 14"
        //     >
        //       <path
        //         stroke="currentColor"
        //         stroke-linecap="round"
        //         stroke-linejoin="round"
        //         stroke-width="2"
        //         d="M1 1h15M1 7h15M1 13h15"
        //       />
        //     </svg>
        //   </button>