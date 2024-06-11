import React from "react";

export default function Top(props){
  

  return(
    <>

      <div className={`absolute top-2 left-2 px-4 py-2 hover:cursor-pointer text-white bg-blue-500 rounded-md hover:bg-blue-600 transform transition-transform 
        ${props.isOpen ? 'translate-x-60' : 'translate-x-0'}`}
        onClick={props.handleClick}
      >{props.img}</div>
      <div></div>
      <div className="m-4 text-4xl text-center">{props.Name ? props.Name : "-"}</div>
      <div className="m-4 text-3xl text-right">{props.Time}</div>

    </>
  )
}