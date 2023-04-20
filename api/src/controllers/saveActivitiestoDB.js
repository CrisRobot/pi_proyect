const { Activity } = require("../db.js");

const addNewActivity = async ({
    nombre, 
    dificultad, 
    duracion, 
    temporada, 
    countries,
}) => {
    const newActivity = await Activity.create({
                nombre, 
                dificultad, 
                duracion, 
                temporada,
            });
            newActivity.addCountries(countries);
            
            return newActivity;    
        };

  module.exports = addNewActivity;