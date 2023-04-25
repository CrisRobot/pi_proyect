import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../css/card.module.css"
import { getCountriesById } from "../../Redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  console.log(detail);
  return (
    <div className={styles.card}>
      <div className={styles.Cardinner}>
      <p>ID: {detail.id} </p>
      <p>Name: {detail.name} </p>
      <p>Continent: {detail.continents} </p>
      <p>Capital: {detail.capital} </p>
      <p>Subregion: {detail.subregion} </p>
      <p>Area: {detail.area} </p>
      <p>Population: {detail.poblacion} </p>
      <img src={detail.flags} alt='flag'/>
      
      </div>
      
    </div>
    
  )
}
  

export default Detail;