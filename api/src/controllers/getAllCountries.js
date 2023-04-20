const { Country } = require("../db");

const getAllCountries = async () => {
    
        const allCountries = await Country.findAll();

        return allCountries;
    
};

module.exports =  getAllCountries;