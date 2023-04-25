const { Country, Activity } = require("../db");

const getAllCountries = async () => {
    
        const allCountries = await Country.findAll({
                include: {
                        model: Activity,
                        attributes: ["nombre"],
                        through: {
                                attributes: [],
                        },
                },
        });

        return allCountries;
    
};

module.exports =  getAllCountries;