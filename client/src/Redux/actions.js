
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const SORT_UP = "SORT_UP";

export const getCountries = () => {
  return function(dispatch){
    fetch('http://localhost:3001/countries')
    .then((response) => response.json())
    .then((data) => dispatch({type: GET_COUNTRIES, 
      payload: data}));
  };
};

export const getCountriesByName = (name) => {
  return {type: GET_COUNTRIES_BY_ID, 
      payload: name};
};

export const sort = (orden) => {
  return {type: SORT_UP,
  payload: orden};
}