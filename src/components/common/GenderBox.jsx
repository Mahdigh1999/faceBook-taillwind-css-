import React, { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import LoginPageInput from "./LoginPageInput";
import RegisterPageInput from "./RegisterPageInput";
function GenderBox(props) {
  const [customIsOpen, setCustomIsOpen] = useState(false);
  const pronouns = [
    { He: `"Wish him a happy Birthday!"` },
    { She: `"Wish her a happy Birthday!"` },
    { Them: `"Wish them a happy Birthday!"` },
  ];

  const handleChange = (e) => {
    let customSatus = e.target.id === "custom" ? true : false;

    console.log(customSatus);
    setCustomIsOpen(customSatus);
  };
  return (
    <div className="col-span-2">
      <span className=" p-0 m-0 text-sm text-gray-600">
        Gender{" "}
        <BsFillQuestionCircleFill className="inline-block mb-[1px] cursor-pointer" />
      </span>
      <div className="grid grid-cols-3 gap-3 ">
        <div className=" flex items-center border border-gray-300 rounded-lg ">
          <label
            htmlFor="female"
            className="w-full py-2.5 font-semibold ms-2 text-sm font-medium  text-gray-900"
          >
            Female
          </label>
          <input
            id="female"
            type="radio"
            onChange={handleChange}
            name="gender"
            className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 focus:ring-blue-500 "
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg ">
          <label
            htmlFor="male"
            className="w-full py-2.5 font-semibold ms-2 text-sm font-medium  text-gray-900"
          >
            Male
          </label>
          <input
            id="male"
            type="radio"
            onChange={handleChange}
            name="gender"
            className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 focus:ring-blue-500 "
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg ">
          <label
            htmlFor="custom"
            className="w-full py-2.5 font-semibold ms-2 text-sm font-medium  text-gray-900"
          >
            Custom
          </label>
          <input
            id="custom"
            type="radio"
            onChange={handleChange}
            name="gender"
            className="w-4 h-4 text-blue-600 mr-3  bg-gray-100 border-gray-300 focus:ring-blue-500 "
          />
        </div>
        {customIsOpen && <div className="col-span-3 py-2">
          <select className="bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
            <option className="disable">select your pronoun</option>
            {pronouns.map((pronoun) => (
              <option key={Object.keys(pronoun)[0]}>
                {Object.entries(pronoun)[0][0] +
                  " : " +
                  Object.entries(pronoun)[0][1]}
              </option>
            ))}
          </select>
          <p className="my-2 ml-2 text-gray-600 text-xs italic">Your Pronoun is visible for everyone</p>
        <RegisterPageInput  type="text" placeholder="Gender (Optional)"/>
        </div>}
        
      </div>
    </div>
  );
}

export default GenderBox;
