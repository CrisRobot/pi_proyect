import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { useEffect } from "react";
import { getCountries } from "../../Redux/actions";
import styles from "../../css/cards.module.css";

const Cards = (props) => {

const countries = useSelector((state) => state.countries);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCountries());
}, [dispatch]);

    return(
        <div>
            <div className={styles.cards}>
            {countries.map((char)=>{
                return <Card id={char.id}
                name = {char.name}
                continent = {char.continents} 
                flags = {char.flags} />
            })}
            </div>
        </div>
    );
};

export default Cards;