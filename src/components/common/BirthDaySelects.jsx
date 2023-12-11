import React, { Fragment } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
function BirthDaySelects({ days, months, years }) {
  return (
    <Fragment>
      
      <div className="col-span-2">
      <span className="text-sm text-gray-600">
        BirthDay <BsFillQuestionCircleFill className="inline-block mb-[1px] cursor-pointer" />
      </span>
      <div className="mt-0 pt-0  flex grid grid-cols-3 gap-3">
        <select
          id="months"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        >
          {months.map((month) => (
            <option key={month}>{month}</option>
          ))}
        </select>
        <select
          id="days"
          className="bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        >
          {days.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </select>
        <select
          id="years"
          className="bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        >
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </div>
      </div>
    </Fragment>
  );
}

export default BirthDaySelects;
