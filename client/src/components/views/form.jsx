import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/actions";
import styles from "../../css/form.module.css";
import mapa from "../../assets/mapa.png"

const validate = (form, setErrors, errors) => {
if(!form.name) setErrors({...errors, name: "💢 Empty name"});
else {if(/^[A-Z][a-z]/.test(form.name)) setErrors({...errors, name: "💚"});
else setErrors({...errors, name: "❗Must start with a capital letter ❗"})} ;
{}
};


const Form = () => {

const dispatch = useDispatch();

useEffect(()=>{dispatch(getCountries())}, [])

const countries = useSelector((state) => state.countries);

const [searcher, setSearcher] = useState();

console.log(searcher);
console.log(countries);



const[form, setForm]=useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    search:""
})

const[errors, setErrors]=useState({
    name: "",
    dificulty: "",
    duration: "",
    season: ""
})

const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

setForm({...form, [property]: value})
validate({...form, [property]: value}, setErrors, errors)
}
const arr = [];
const countryPush = (e) => {
    if(arr.includes(e.target.value)){return arr} else{arr.push(e.target.value)}
 
 console.log(arr)
}


const handleSubmit = (event) => {
    event.preventDefault();


}

    return(
        <div>
            <h1 className={styles.encabezado}>In this secction you will be able to create a 
            new activity and 
                link them to the countries where we can take them.</h1>
                <div >
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.left}>
                            <div className={styles.label}>
                                <label htmlFor="name"
                                    className={styles.lbl}
                                    >Name:</label>
                                    <input type="text"
                                    name="name"
                                    placeholder="Ex: Dancing"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={errors.name !== "💚" ? styles.inp : styles.inpok}
                                    ></input>
                            </div>
                                <div>
                                <label className={styles.label}>{errors.name}</label>
                                </div>
                            <div>
                                <label htmlFor="dificulty"
                                    className={styles.lbl}>Dificulty:</label>
                                    <input type="text"
                                    name="dificulty"
                                    placeholder="Ex: 2"
                                    value={form.dificulty}
                                    onChange={handleChange}
                                    className={errors.dificulty !== "💚" ? styles.inp : styles.inpok}
                                ></input>
                            </div>
                                <div>
                                <label>{errors.dificulty}</label>
                                </div>
                            <div>
                                <label htmlFor="duration"
                                    className={styles.lbl}>Duration:</label>
                                    <input type="text"
                                    name="duration"
                                    placeholder="Ex: 2"
                                    value={form.duration}
                                    onChange={handleChange}
                                    className={errors.duration !== "💚" ? styles.inp : styles.inpok}
                                ></input>
                            </div>
                                <div>
                                <label>{errors.duration}</label>
                                </div>
                            <div>
                                <label htmlFor="season"
                                    className={styles.lbl}>Season:</label>
                                    <input type="text"
                                    name="season"
                                    placeholder="Ex: Summer"
                                    value={form.season}
                                    onChange={handleChange}
                                    className={errors.season !== "💚" ? styles.inp : styles.inpok}
                                ></input>
                            </div>
                                <div>
                                <label>{errors.season}</label>
                                </div>
                        </div>
                        <div>
                            <img src={mapa}></img>
                        </div>
                        <div className={styles.rigth}>
                            
                            <div>
                            <label className={styles.lbl}>Search:</label>
                                <input  placeholder="Type a country ;)"
                                name="search:" 
                                type="search"
                                onChange={(e)=>{setSearcher(e.target.value)}}
                                className={styles.inp}
                                ></input>
                                
                            </div>
                            <div>
                                <button className={styles.btn}>CREATE</button>
                            </div>
                            <div className={styles.search}>
                                {countries.filter((char) => char.name.toLowerCase()
                                .includes(searcher))
                                .map((item) => (
                                <div key={item.id}
                                className={styles.module}>
                                    <p>{item.name}</p>
                                    <button className={styles.add}
                                    value = {item.id} 
                                    onClick={countryPush}>Add</button>
                                </div>
                                ))}
                            </div>
                        
                        </div>
        </form>
        
        
        </div>
        </div>
    );
};

export default Form;