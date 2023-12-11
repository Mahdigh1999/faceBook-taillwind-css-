import React, { useState } from "react";
import LoginPageInput from "../common/LoginPageInput";
import RegisterHead from "./RegisterHead";
import RegisterForm from "./RegisterForm";

function Register({ onExit }) {
  const [registerClassName, setRegisterClassName] = useState(
    "fixed  left-0 top-0  w-full h-full border border-black  "
  );

  return (
    <div
      style={{ backgroundColor: "rgba(255,255,255,0.45 )" }}
      className={registerClassName}
    >
      <div className="absolute shadow-2xl  md:left-[50%] md:top-[10%] md:ml-[-250px] md:w-[500px] w-full  h-full  md:h-fit bg-white border rounded-lg border-gray-200  ">
        <RegisterHead onExit={onExit} />
        <RegisterForm />


      </div>
    </div>
  );
}

export default Register;
