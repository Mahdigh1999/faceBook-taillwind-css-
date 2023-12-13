import React from 'react';
import { RiNotification2Fill } from "react-icons/ri";
function Notification(props) {
    return (
        <div title='Notification' className='h-11 w-11  rounded-full  flex items-center justify-center bg-gray-200 cursor-pointer'>
            <RiNotification2Fill size={25} /> 
        </div>
    );
}

export default Notification;