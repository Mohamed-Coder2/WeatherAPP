import React from "react";

export default function Top(props){
  

  return(
    <>

      <div className={`absolute top-2 left-2 px-4 py-2 hover:cursor-pointer text-white bg-blue-500 rounded-md hover:bg-blue-600 transform transition-transform 
        ${props.isOpen ? 'translate-x-60' : 'translate-x-0'}`}
        onClick={props.handleClick}
      >{props.img}</div>
      <div></div>
      <div className="p-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">{props.Name ? props.Name : "-"}</div>
      <div className="p-2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-right">{props.Time}</div>

    </>
  )
}