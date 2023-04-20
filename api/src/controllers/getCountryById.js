const { Country, Activity } = require("../db");

getCountryById = async (id) => {
    
        const countryById = await Country.findByPk(id, {
            include: {
                model: Activity,
                attributes: ["nombre"],
                through: {
                    attributes: [],
                },
            },
        });
        
        return countryById;
    
};

module.exports = getCountryById;