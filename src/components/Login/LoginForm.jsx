import React from "react";
import LoginPageInput from "../common/LoginPageInput";
import { Link } from "react-router-dom";
function LoginForm({ onChange, account, onSubmit, errors ,onClick}) {
  const render = !Object.keys(errors).length;
  const divClassName = render
    ? "shadow-2xl bg-white rounded-md lg:basis-5/12 md:basis-5/12 w-fit mx-auto pb-1"
    : "shadow-2xl bg-white rounded-md  w-fit mx-auto pb-1";
  console.log(errors);
  return (
    <div className={divClassName}>
      <form onSubmit={onSubmit} className="w-full max-w-lg mx-auto border border-gray-100">
        {!render && (
          <div className="mx-auto border rounded-lg border-red-500  w-[92%] mt-3">
            <h4 className="mx-auto w-fit font-extrabold">Wrong Credentials</h4>
            <p className="indent-[25%]">invalid username and password</p>
          </div>
        )}
        <div className="flex flex-wrap mx-2  ">
          <LoginPageInput
            errors={errors}
            value={account.username}
            type="text"
            name="username"
            placeholder="Email or Number"
            onChange={onChange}
          />
          <LoginPageInput
            errors={errors}
            value={account.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
          <button className="w-full mx-2.5 font-semibold text-white  py-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm   my-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Log In
          </button>
          <Link
            to="/"
            className="block m-auto text-blue-800 hover:underline mb-3"
          >
            Forget password
          </Link>
          <hr className="w-[95%] m-auto border border border-gray-300" />
        </div>
      </form>
      {render && (
        <button
          onClick={onClick}
          type="button"
          className="font-semibold    block my-3 mx-auto p-3 text-white   bg-lime-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm    "
        >
          Create new account
        </button>
      )}
    </div>
  );
}

export default LoginForm;
