const axios = require('axios');
const { Country } = require("../db.js");

const countryShape = (data) => {
            return{
                id: data.cca3,
                name: data.name.common,
                ccn3: data.ccn3,
                flags: data.flags[0],
                continents: data.continents[0],
                region: data.region,
                capital: data.capital !== undefined ? data.capital[0] : 'This country does not have a defined capital',
                subregion: data.subregion !== undefined ? data.subregion : 'This country does not have a defined subregion',
                area: data.area,
                poblacion: data.population,
                
            }
  };

  const saveCountrytoDB = async () => {
    try{
    const allcountries = await axios.get(`https://restcountries.com/v3/all`);
    const response = allcountries.data;
    const createCountries = response.map((data) => countryShape(data));
    await Country.bulkCreate(createCountries);

    } catch(error){
        console.error('Error:',error)
    }
  };

  module.exports = { saveCountrytoDB };

