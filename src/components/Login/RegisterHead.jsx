import React from 'react';
import {IoClose} from 'react-icons/io5'
function RegisterHead({onExit}) {
    return (
        <div className="w-full flex border-b-2  border-gray-300 h-24 justify-between">
          <div className="w-fit ml-3 ">
            <h3 className="font-bold text-4xl my-2">Sign Up</h3>
            <p className="text-gray-600 text-lg">it's quick and easy.</p>
          </div>
          <div onClick={onExit} className="cursor-pointer mt-2 mr-2 w-6 h-6">
            <IoClose fill="gray" className="w-full  h-full" />
          </div>
        </div>
    );
}

export default RegisterHead;