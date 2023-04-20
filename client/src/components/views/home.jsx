import React, { useState } from "react";
import Cards from "../cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName, getCountries, sort } from "../../Redux/actions";
import { useEffect } from "react";

const Home = () => {

    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);
    
    
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
      };

    const handleSumit = (e) => {
        e.preventDefault();
        dispatch(getCountriesByName(name));
        setName("")
    };
        
    const handleRefresh = (e) => {
        e.preventDefault();
        dispatch(getCountries());
        setName("")
    };

    const handleSelectAlfabetico = (e) => {
        
        dispatch(sort(e.target.value));
        return true;
      }

    return(
<div>
    <input type="search"
    placeholder="Search a country" 
    value={name}
    onChange={(e) => handleChange(e)}/>

    <button onClick={(e) => handleSumit(e)}>Search</button>
    <button onClick={(e) => handleRefresh(e)}>refrescar</button>
    
        <button value="des" onClick={(e) => handleSelectAlfabetico(e)}>des</button>
        <button value="asc" onClick={(e) => handleSelectAlfabetico(e)}>asc</button>
    

    <Cards/>
    
</div>
    )
}
//onClick={searchById}
export default Home;