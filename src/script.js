const fs = require('fs');
const { Country, City } = require('country-state-city');

// Retrieve all countries
const countries = Country.getAllCountries();

// Create an object to store the country data
const countryData = {};

// Iterate through each country
countries.forEach(country => {
  // Retrieve the cities for the current country
  const cities = City.getCitiesOfCountry(country.isoCode);

  // Create an object representing the country
  const countryObj = {
    cities: cities.map(city => city.name),
    capital: cities[0]?.name // Assuming the first city in the list is the capital
  };

  // Add the country object to the countryData object
  countryData[country.name] = countryObj;
});

// Convert the object to JSON format
const jsonData = JSON.stringify(countryData, null, 2);

// Save the JSON data to a file
fs.writeFile('countries.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing to JSON file:', err);
  } else {
    console.log('Data successfully saved to countries.json');
  }
});
