import React, { useState } from "react";
import Cards from "../cards/cards";
import Form from "./form";
import { useDispatch } from "react-redux";
import { getCountriesByName,
     getCountries,
      sortUp,
       sortDown,
        sortMore,
         sortLess,
          getByContinent,
           filterByActivity } from "../../Redux/actions";
import { useEffect } from "react";
import styles from "../../css/searchbar.module.css";
import LOGO from "../../assets/LOGO.png"
import lupa from "../../assets/lupa.png"
import { Link } from "react-router-dom";


const Home = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]); 

    const handleChange = (e) => {
        setName(e.target.value);
      };

    const handleSumit = () => {
        dispatch(getCountriesByName(name.toLocaleLowerCase()));
        setName("")
    };

    const handleRefresh = () => {
        dispatch(getCountries());
        setName("")
    };
    

    const handleSortByName = (e) => {
       if(e.target.value === "up"){
        dispatch(sortUp());
        if(!name){setName(" ")}
        else{setName("")}
       } else{
        dispatch(sortDown());
        if(!name){setName(" ")}
        else{setName("")};
       }
    }

    const handleSortByPopulation = (e) => {
        if(e.target.value === "more"){
            dispatch(sortMore());
            if(!name){setName(" ")}
            else{setName("")}
           } else{
            dispatch(sortLess());
            if(!name){setName(" ")}
            else{setName("")};
           }
    }

    const handleFilterByActivity = (e) => {

        dispatch(filterByActivity(e.target.value));
        setCurrentPage(1)
    }


    const handleFilterByContinent = (e) => {

        dispatch(getByContinent(e.target.value));
        setCurrentPage(1)
    }

    return(
<div className={styles.container}>    
    <div className={styles.navbar}>
       
    <img className={styles.logotipo} src={LOGO} alt="logotipo"></img>

        <div> 
            <input className={styles.searchbar} type="search"
                placeholder="               Search a country . . ." 
                value={name}
                onChange={handleChange}/>

            <button type= "button" 
                    className={styles.searchbtn} 
                    onClick={handleSumit}>
                    <img className={styles.lupa} src={lupa} alt="lupa"></img>
            </button>

        </div>
            <button className={styles.btn} 
                    onClick={(e) => handleRefresh(e)}>REFRESH
            </button>

        <div className={styles.body}>
            
            <div className={styles.select}>
                <select name="format" id="format" onChange={(e) => handleSortByName(e)}>
                    <option selected disabled>SORT BY NAME</option>
                    <option value="up">UP</option>
                    <option value="down">DOWN</option>
                </select>
            </div>
            <div className={styles.select}>
                <select name="format" id="format" onChange={(e) => handleSortByPopulation(e)}>
                    <option selected disabled>SORT BY POPULATION</option>
                    <option value="more">LESS</option>
                    <option value="less">MORE</option>
                </select>
            </div>
            <div className={styles.select}>
                <select name="format" id="format" onChange={(e) => handleFilterByActivity(e)}>
                    <option selected disabled>FILTER BY ACTIVITY</option>
                    <option value="Museums">MUSEUMS</option>
                    <option value="Trekking">TREKKING</option>
                    <option value="Scuba diving">SCUBA DIVING</option>
                    <option value="Sky">SKY</option>
                    <option value="Surf">SURF</option>
                    <option value="Gastronomy">GASTRONOMY</option>
                    <option value="Rafting">RAFTING</option>
                    <option value="Ruins">RUINS</option>
                    <option value="Camping">CAMPING</option>
                    <option value="Wine tourism">WINE TOURISM</option>
                </select>
            </div>
            <div className={styles.select}>
                <select name="format" id="format" onChange={(e) => handleFilterByContinent(e)}>
                    <option selected disabled>FILTER BY CONTINENT</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
            </div>
            <div> 
                <Link to="/create">
                    <button  className={styles.create}>CREATE</button>
                </Link>
                
            </div>
        </div>


    </div>
   <div><Cards  currentPage={currentPage} 
   setCurrentPage = {setCurrentPage}/></div>
    
    
</div>

    )
}
export default Home;