import React from "react";

export default function Bot(props) {

  return(
    <>
      <div className="w-full bg-black bg-opacity-25 text-white flex flex-col justify-between">
        <div className="flex items-center justify-between p-2">
          <span className="ml-4 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"><span>Description:</span> {props.desc}</span><span className="mr-4 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"><span>Pressure:</span>{props.pressure} hPa</span>
        </div>
        <div className="flex items-center justify-between p-2">
          <span className="ml-4 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"><span>Wind Speed:</span> {props.windSpeed} m/s</span><span className="mr-4 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"><span>Humidity:</span> {props.humidity}%</span>
        </div>
      </div>
    </>
  )
}