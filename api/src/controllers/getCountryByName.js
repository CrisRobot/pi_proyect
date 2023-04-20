const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {
    
        const findCountryByName = await Country.findAll({
            where: { 
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {
                model: Activity,
                attributes: ["nombre"],
                through: {
                    attributes: [],
                },
            },
        });

        if(findCountryByName.length > 0){
            return findCountryByName
        } return 'No se encontro el pais';
        
    
};

module.exports = getCountryByName;