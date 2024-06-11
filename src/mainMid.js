import React from "react";

export default function Mid(props){
  
  return(
    <>
      <div className="w-full flex items-center justify-end">
        <div className="text-white w-1/4 flex items-center justify-center">
          <div className="m-4 mr-6">
            <span className=" text-9xl">{props.temp ? props.temp : "-"}</span><span className="text-8xl"><sup>{props.temp ? "°" : ""}</sup></span><span className="text-3xl">{props.temp ? "C" : ""}</span>
            <div className="flex justify-between">
              <span className="text-xl">low: {props.ltemp ? props.ltemp : "-"}</span>
              <span></span>
              <span className="text-xl">high: {props.htemp ? props.htemp : "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}