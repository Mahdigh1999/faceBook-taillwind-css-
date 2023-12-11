import React from 'react';
import {FaCircleExclamation} from 'react-icons/fa6'
function RegisterPageInput(props) {
    const {placeholder,type,size} = props;

    let divClassname =  "relative "
    if (size === '2x')
        divClassname = divClassname + ' col-span-2 '
    
    return (
        <div className={divClassname}>

        <input
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
        />
        {true && <div className="absolute  inset-y-0 end-0 flex items-center px-3 pointer-events-none">
          <FaCircleExclamation className="w-full text-red-600"  />
        </div>}
      </div>
    );
}

export default RegisterPageInput;