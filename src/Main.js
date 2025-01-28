import React from 'react';
import Top from './mainTop';
import Mid from './mainMid';
import Bot from './mainBot';
import Side from './sideBar';
import axios from 'axios';

const units = "metric";
const lang = "en";

function ParentComponent() {
  const menu = (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list hover:cursor-pointer" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </React.Fragment>
  );

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const [Format, setFormat] = React.useState(0);
  const [time, setTime] = React.useState(hours.toString() + ":" + minutes.toString());

  React.useEffect(() => {
    let formattedHours = Format ? hours : hours % 12 || 12;
    const amPm = hours >= 12 ? "PM" : "AM";
    let min = minutes;
    if (min < 10) {
      min = "0" + minutes;
    }
    if (formattedHours < 10) {
      formattedHours = "0" + formattedHours;
    }
    if (!Format) {
      setTime(formattedHours.toString() + ":" + min.toString() + " " + amPm);
    } else {
      setTime(formattedHours.toString() + ":" + min.toString());
    }
  }, [hours, minutes, Format]);

  const toggleTimeFormat = () => {
    setFormat((prevFormat) => !prevFormat);
  };

  const [isOpen, setisOpen] = React.useState(false);

  const [selectedCity, setSelectedCity] = React.useState("");

  const [weatherData, setWeatherData] = React.useState({});

  const { main, weather, wind } = weatherData;

  const highTemp = Math.ceil(main ? main.temp_max : null);
  const temp = Math.floor(main ? main.temp : null);
  const lowTemp = Math.floor(main ? main.feels_like : null);
  let condition = weather ? weather[0].main : 'clear';
  let description = weather ? weather[0].description : '';
  let pressure = main ? main.pressure : '';
  let humidity = main ? main.humidity : '';
  let windSpeed = wind ? wind.speed : '';

  const imageSrc = process.env.PUBLIC_URL + `/${condition}.jpg`;

  React.useEffect(() => {
    const fetchData = async () => {
      if (selectedCity) {
        try {
          const response = await axios.post('http://localhost:3001/api/weather', {
            city: selectedCity,
            units: units,
            lang: lang
          });
          setWeatherData(response.data);
        } catch (error) {
          console.log("Error Fetching Api Weather:", error);
        }
      }
    };

    fetchData();
  }, [selectedCity]);

  function handleCity(c) {
    setSelectedCity(c);
  }

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className='w-full h-screen bg-cover bg-center flex flex-col items-center' style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className='w-full flex h-full'>
        <div className="w-full h-full bg-cover bg-center flex flex-col justify-between">
          <div className=''>
            <div className='h-1/3 text-white grid grid-cols-3 bg-transparent bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>
              <Top
                Time={time}
                Name={selectedCity}
                img={menu}
                handleClick={toggleSidebar}
                isOpen={isOpen}
              />
            </div>
            <div className=''>
              <Mid
                temp={temp}
                ltemp={lowTemp}
                htemp={highTemp}
              />
            </div>
          </div>
          <div className=''>
            <Bot
              desc={description}
              pressure={pressure}
              humidity={humidity}
              windSpeed={windSpeed}
            />
          </div>
        </div>
      </div>
      {<Side
        isOpen={isOpen}
        toggleFormat={toggleTimeFormat}
        selectedCity={selectedCity}
        setSelectedCity={handleCity}
      />}
    </div>
  );
}

export default ParentComponent;
