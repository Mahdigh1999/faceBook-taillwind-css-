import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import RegisterPageInput from "../common/RegisterPageInput";
import { Link } from "react-router-dom";
import _ from "lodash";
import BirthDaySelects from "../common/BirthDaySelects";
import GenderBox from "../common/GenderBox";
function RegisterForm(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];
  const days = _.range(1, 32);
  const years = _.range(1900, 2024).reverse();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registered");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <div className="w-[95%] mx-auto grid grid-cols-2 gap-4 mt-2">
        <RegisterPageInput type="text" placeholder="First Name" />
        <RegisterPageInput type="text" placeholder="Last Name" />
        <RegisterPageInput
          size="2x"
          type="text"
          placeholder="Mobile number or email"
        />
        <RegisterPageInput size="2x" type="text" placeholder="New password" />
        <BirthDaySelects days={days} years={years} months={months} />
        <GenderBox />
        <p className="w-full col-span-2 break-words  mx-auto text-xs text-gray-600">
          People who use our service may have uploaded your contact information
          to Facebook.{" "}
          <a href="#" className="text-blue-700 no-underline hover:underline">
            Learn more
          </a>
          .
        </p>
        <p className="w-full col-span-2 break-words  mx-auto text-xs text-gray-600">
          By clicking Sign Up, you agree to our 
          <Link to="/terms" className="text-blue-700 no-underline hover:underline">Terms</Link>,{" "}
          <Link to="/privacy-policy " className="text-blue-700 no-underline hover:underline">Privacy Policy</Link> ,{" "}
          and Cookies Policy. You may
          receive SMS Notifications from us and can opt out any time. to
          Facebook.{" "}
        </p>
        </div>
        <button  className="block my-3 bg-lime-600 mx-auto rounded-lg px-12 py-1.5 text-white" >Sign up</button>
      </form>
    </div>
  );
}

export default RegisterForm;
