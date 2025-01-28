import React from "react";

export default function Mid(props){
  
  return(
    <>
      <div className="flex items-center justify-end pt-4">
        <div className="text-white flex items-center justify-center">
          <div className="">
            <span className="text-xl sm:text3xl md:text-5xl lg:text-7xl xl:text-9xl">{props.temp ? props.temp : "-"}</span><span className="text-lg sm:text2xl md:text-4xl lg:text-6xl xl:text-8xl"><sup>{props.temp ? "°" : ""}</sup></span><span className="text-lg sm:text2xl md:text-4xl lg:text-6xl xl:text-8xl">{props.temp ? "C" : ""}</span>
            <div className="flex justify-between">
              <span className="text-sm pr-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">low: {props.ltemp ? props.ltemp : "-"}</span>
              <span></span>
              <span className="text-sm pr-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">high: {props.htemp ? props.htemp : "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}