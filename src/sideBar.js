import React from "react";

import CitySelector from "./city";

export default function Side(props){


  return(
    <>
      <div 
        className={`text-white fixed inset-y-0 left-0 w-60 bg-transparent bg-opacity-20 backdrop-blur-lg drop-shadow-lgnpm start shadow-lg transform transition-transform ${
                  props.isOpen ? 'translate-x-0' : '-translate-x-full'
                  }`}
        >
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-between w-full h-4/5">
            <div className="w-full h-3/5">
              <div className="w-full flex items-center justify-center"><h3 className="border-b-4 w-3/5 text-center text-3xl">Location</h3></div>
              <div className="w-full h-full mt-4 flex items-center">
                <CitySelector 
                  setSelectedCity = {props.setSelectedCity}
                  selectedCity = {props.selectedCity}
                />
              </div>
            </div>
            
            <div className="w-3/5 text-center">
              <h3 className="border-b-4 w-full text-center text-2xl">Time Format</h3>
              <div className="mt-4 flex items-center">
                <span>12 H &nbsp;</span>  
                <label className="switch">
                  <input type="checkbox" onClick={props.toggleFormat}/>
                  <span className="slider"></span>
                </label>
                <span>&nbsp; 24 H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}