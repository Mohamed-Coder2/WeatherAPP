import React, { useState } from "react";
import citiesData from './countries.json';

const CitySelector = ({selectedCity, setSelectedCity}) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showCountryList, setShowCountryList] = useState(false);
  const [showCityList, setShowCityList] = useState(false);
  const [dropdownFocused, setDropdownFocused] = useState(false);

  const handleCountryInputChange = (event) => {
    const { value } = event.target;
    setSelectedCountry(value);

    // Filter countries based on input value
    const filteredCountries = Object.keys(citiesData).filter(country =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
    setShowCountryList(true);
  };

  const handleCityInputChange = (event) => {
    const { value } = event.target;
    setSelectedCity(value);

    // Filter cities based on input value within the selected country
    const selectedCountryData = citiesData[selectedCountry];
    const filteredCities = selectedCountryData?.cities.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filteredCities);
    setShowCityList(true);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setSelectedCity("");
    setFilteredCities([]);
    setShowCountryList(false);
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setShowCityList(false);
  };

  const handleDropdownBlur = () => {
    setTimeout(() => {
      if (!dropdownFocused) {
        setShowCountryList(false);
        setShowCityList(false);
      }
    }, 200);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <input
          className="w-3/4 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 text-center break-normal m-4 ml-8 rounded-md hover:cursor-text"
          type="text"
          placeholder="Select a country"
          value={selectedCountry}
          onChange={handleCountryInputChange}
          onClick={() => setShowCountryList(true)}
          onBlur={handleDropdownBlur}
        />

        {selectedCountry && (
          <input
            className="w-3/4 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 text-center break-normal m-4 ml-8 rounded-md hover:cursor-text"
            type="text"
            placeholder="Select a city"
            value={selectedCity}
            onChange={handleCityInputChange}
            onClick={() => setShowCityList(true)}
            onBlur={handleDropdownBlur}
          />
        )}

        {showCountryList && (
          <div className="bg-black p-3 absolute z-10 top-72 left-16 bg-opacity-50 w-1/2 max-h-40 overflow-auto text-white" onFocus={() => setDropdownFocused(true)} onBlur={() => setDropdownFocused(false)}>
            <ul>
              {filteredCountries.map((country) => (
                <li 
                  className=" hover:cursor-pointer hover:underline"
                  key={country} onClick={() => handleCountrySelection(country)}>
                  {country}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showCityList && (
          <div className="bg-black p-3 absolute z-10 top-72 left-16 bg-opacity-50 w-1/2 max-h-40 overflow-auto text-white" onFocus={() => setDropdownFocused(true)} onBlur={() => setDropdownFocused(false)}>
            <ul>
              {filteredCities.map((city) => (
                <li 
                  className=" hover:cursor-pointer hover:underline"
                  key={city} onClick={() => handleCitySelection(city)}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CitySelector;
