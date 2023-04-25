import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";
import { getCountriesById } from "../../Redux/actions";
import styles from "../../css/cards.module.css";
import { Link } from "react-router-dom";
import Pagination from "./pagination";


const Cards = ({currentPage, setCurrentPage}) => {

const countries = useSelector((state) => state.countries);
const dispatch = useDispatch();

const totalCountries = countries.length;

const [countriesPerPage] = useState(10);

const lastIndex = currentPage * countriesPerPage;
const firstIndex = lastIndex - countriesPerPage;


const handleDetail = (e) => {
dispatch(getCountriesById(e.target.value))
}

    return(
        <div className={styles.cards}>
            {countries.map((char)=>(
                <div key = {char.id} className={styles.flipcard}>
                    <div className={styles.flipcardinner}>
                        <div className={styles.cardfront}>
                            <p>Name:{char.name}</p>
                            <p>Continent:{char.continents} </p>
                            <Link to={`/home/${char.id}`}>
                            <button value={char.id}
                            onClick={(e)=>handleDetail(e)}>details</button>
                            </Link>

                            <img className={styles.flags} src={char.flags} alt="flag"></img>
                        </div>
                        
                    </div>
                </div>
            )).slice(firstIndex, lastIndex)}
            <Pagination countriesPerPage={countriesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCountries={totalCountries}/>
        </div>
    );
};

export default Cards;