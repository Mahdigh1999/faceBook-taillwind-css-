import React from 'react';

function LoginPageInput({type , name ,placeholder ,onChange , value , errors}) {

    return (
        <div className="w-full  ">

        <input
          className="m-auto  block w-[95%]  text-gray-700 border border-gray-400 rounded py-3 px-4 my-3 leading-tight focus:outline-none  focus:ring focus:ring-blue focus:border-blue-900"
          id={name}
          value={value}
          type={type}
          name={name}
          placeholder= {placeholder}
          onChange={onChange}
        />
        {errors[name] &&  <p className="ml-2 text-gray-600 text-xs italic">
          <mark>{name}</mark> is empty write someThing
        </p>}
      </div>
    );
}

export default LoginPageInput;