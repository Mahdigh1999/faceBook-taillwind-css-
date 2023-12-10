import React, { useState } from 'react';
import facebook from '../../images/facebook.svg'
function LoginHeader({errors}) {
    const divClassName = !Object.keys(errors).length ?'  sm:basis-7/12 my-auto' : ' ';
    const imageClassName = !Object.keys(errors).length ?'  w-72' : ' w-72 mx-auto';
    return (
        <div className={divClassName}>
            <img src={facebook} alt="no-image" className={imageClassName}/>
            {!Object.keys(errors).length && <h2 className='ml-7 breack-all text-2xl '>Connect with friends and the world around you on Facebook.</h2>}
        </div>
    );
}

export default LoginHeader;