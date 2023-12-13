import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { PiHouseLineFill, PiHouseLine } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiMonitorPlay, PiMonitorPlayFill } from "react-icons/pi";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { RiGamepadFill, RiGamepadLine } from "react-icons/ri";
import "../../styles/mainNavShowTitle.css";
function MainNav(props) {
  const renderNavLinks = (iconBeforeActive, iconAfterActive, title, to) => {
    return (
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? { borderBottom: "5px solid blue   ", transition: "0.5s" }
            : { borderBottom: "5px solid transparent" };
        }}
        to={to}
        className="relative block text-blue-500 lg:py-4  py-3  lg:px-12 md:px-7   mt-1 text-gray-500 rounded-t hover:bg-gray-100      "
      >
        {({ isActive }) => {
          return (
            <Fragment>
              {isActive ? iconBeforeActive : iconAfterActive}
              <div className="absolute top-[115%] left-[25%] flex justify-center text-white bg-gray-800 text-xs items-center rounded-lg h-8 w-16 border border-black">
                {title}
              </div>
            </Fragment>
          );
        }}
      </NavLink>
    );
  };
  return (
    <div
      className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="mainNav"
    >
      <ul className="flex flex-col p-1 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-3 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        <li>
          {renderNavLinks(
            <PiHouseLineFill size={27} fill="blue" />,
            <PiHouseLine size={27} fill="blue" />,
            "Home",
            "/home"
          )}
        </li>
        <li>
          {renderNavLinks(
            <FaUserFriends size={27} fill="blue" />,
            <LiaUserFriendsSolid size={27} fill="blue" />,
            "Friends",
            "/friends"
          )}
        </li>
        <li>
          {renderNavLinks(
            <PiMonitorPlayFill fill="blue" size={27} />,
            <PiMonitorPlay size={27} fill="blue" />,
            "Videos",
            "/videos"
          )}
        </li>
        <li>
          {renderNavLinks(
            <HiUserGroup size={27} fill="blue" />,
            <HiOutlineUserGroup size={27} fill="blue" />,
            "Groups",
            "/groups"
          )}
        </li>
        <li>
          {renderNavLinks(
            <RiGamepadFill size={27} fill="blue" />,
            <RiGamepadLine size={27} fill="blue" />,
            "Gaming",
            "/gaming"
          )}
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
