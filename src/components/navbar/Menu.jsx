import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import "../../styles/MeMeNotAcc.css";

function Menu(props) {

    const [openMenu, setOpenMenu] = useState(false);
    const [menuContentClicked,setMenuContentClicked] =useState(false);
    const [documentClicked,setDocumentClicked] = useState(false)
    let menuRef = useRef();
    useEffect(()=>{
        document.addEventListener("mousedown", (event) =>{
            if(!menuRef.current.contains(event.target)){
                setOpenMenu(false)
            }
                })
    })
    

//     doc.onClick = function documentClick(e) {
//     if(e.target.id !== 'MenuInside'){
//         setOpenMenu(false);}
//     else{
//         setOpenMenu(true);
//     }
//   };

  return (
    <div ref={menuRef} className="h-11 w-11  bg-gray-200 rounded-full flex items-center justify-center">
      <div
      id='menu'
        onClick={() => setOpenMenu((openMenu)=>(!openMenu))}
        title="Menu"
        className="cursor-pointer h-11 w-11 flex items-center justify-center"
      >
        <CgMenuGridO size={30} />
      </div>{" "}
      {openMenu && (
        <div
        
        id="MenuInside"
            
          title=""
          className="cursor-default absolute top-full custom-shadow-lg  right-2 h-[300px] w-[300px]"
        >
          this is menu
        </div>
      )}
    </div>
  );
}

export default Menu;
