const { Activity } = require("../db");

const getAllActivities = async () => {
    
        const allActivities = await Activity.findAll();

        return allActivities;
    
}

module.exports =  getAllActivities;