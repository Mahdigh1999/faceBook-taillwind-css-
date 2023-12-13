import React from 'react';
import { FaFacebookMessenger } from "react-icons/fa";
function Messenger(props) {
    return (
        <div title='Messenger' className='h-11 w-11 rounded-full cursor-pointer flex items-center justify-center bg-gray-200'>
            < FaFacebookMessenger size={25} />
        </div>
    );
}

export default Messenger;