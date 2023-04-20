const { Router } = require('express');
const getAllCountries = require("../controllers/getAllCountries.js");
const getCountryById = require("../controllers/getCountryById.js");
const getCountryByName = require("../controllers/getCountryByName.js");
const getAllActivities = require("../controllers/getAllActivities.js");
const addNewActivity = require("../controllers/saveActivitiestoDB.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/activities", async (req, res) => {
    try{
        const activities = await getAllActivities();
        res.status(200).json(activities);
    }
    catch(error){
        console.log(error);
        res.status(404).json({error: error.message})
    }
})


router.post("/activities", async (req, res) => {

    try{
        const { nombre, dificultad, duracion, temporada, countries } = req.body;

        const newActivity = await addNewActivity({
            nombre, 
            dificultad, 
            duracion, 
            temporada, 
            countries,
        });
        res.status(200).json(newActivity);
    } catch(error){
        res.status(404).json({ error: error.message });
    }
});

router.get("/countries/:idPais", async(req, res)=>{

    const {idPais} = req.params;
    try{
        const  getcountrbyid = await getCountryById(idPais);
        console.log(getcountrbyid);
        res.status(200).json(getcountrbyid);
    }
    catch(error){
        res.status(404).json({error: error.message})
    }
});

router.get('/countries', async (req, res) => {

    const { name } = req.query;

    try{
        if(name) {
            const  queryname = await getCountryByName(name);              
            console.log(queryname);
            res.status(200).json(queryname);
        } else {
            const allcountries = await getAllCountries();
            res.status(200).json(allcountries);
        }
        }

    catch(error){
        res.status(404).json("{error: error.message}")
    }}
);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
