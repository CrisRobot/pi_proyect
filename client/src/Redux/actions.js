
import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const SORT_UP = "SORT_UP";
export const SORT_DOWN = "SORT_DOWN";
export const SORT_MORE = "SORT_MORE";
export const SORT_LESS = "SORT_LESS";
export const GET_BY_COUNTINENT = "GET_BY_COUNTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const GET_COUNTRIES_BY_ID ="GET_COUNTRIES_BY_ID";
export const UP_DATE_CURRENT_PAGE = "UP_DATE_CURRENT_PAGE";

export const getCountries = () => {
  return async function(dispatch){
    await fetch('http://localhost:3001/countries')
    .then((response) => response.json())
    .then((data) => dispatch({type: GET_COUNTRIES, 
      payload: data}));
  };
};

export const getCountriesByName = (name) => {
  return {type: GET_COUNTRIES_BY_NAME, 
      payload: name};
};

export const sortUp = () => {
  return {type: SORT_UP};
}

export const sortDown = () => {
  return {type: SORT_DOWN};
}

export const sortMore = () => {
  return {type: SORT_MORE};
}

export const sortLess = () => {
  return {type: SORT_LESS};
}

export const filterByActivity = (value) => {
  return{type: FILTER_ACTIVITY,
  payload: value}
}

export const getByContinent = (value) => {
  return{type: GET_BY_COUNTINENT,
  payload: value}
}

export const getCountriesById =  (id) => {
  return async function(dispatch){
    await axios(`http://localhost:3001/countries/${id}`)
    .then((data) => dispatch({type: GET_COUNTRIES_BY_ID, 
      payload: data.data}));
  };
}
