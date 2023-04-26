import { GET_COUNTRIES,
   GET_COUNTRIES_BY_NAME,
    SORT_UP, SORT_DOWN,
     SORT_MORE, SORT_LESS,
      GET_BY_COUNTINENT,
       FILTER_ACTIVITY, GET_COUNTRIES_BY_ID
       } from "./actions";

const initialState = {
  countries: [],
  copy:[],
  detail:[],
 
}

const rootReducer = (state = initialState, action) => {
switch(action.type){

  case GET_COUNTRIES:
    return {...state, countries: action.payload, copy: action.payload};

  case GET_COUNTRIES_BY_NAME:
      return{...state, countries: state.copy.filter(
      (char) => char.name.toLowerCase().includes(action.payload))};

  case SORT_UP:
      let countriesAsc = state.countries.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return {
        ...state,
        countries: countriesAsc
    }
  case SORT_DOWN:
    let countriesDes = state.countries.sort((b, a) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    return {
          ...state,
          countries: countriesDes,
        };
  case SORT_MORE:
    let countriesMore = state.countries.sort((a, b) =>
        a.poblacion > b.poblacion ? 1 : a.poblacion < b.poblacion ? -1 : 0
      );
      return {
        ...state,
        countries: countriesMore};
  case SORT_LESS:
    let countriesLess = state.countries.sort((b, a) =>
        a.poblacion > b.poblacion ? 1 : a.poblacion < b.poblacion ? -1 : 0
      );
      return {
        ...state,
        countries: countriesLess};
  case FILTER_ACTIVITY:
    const filtro = action.payload;
    const resultado = state.copy.filter(objeto => objeto.activities.some(nombre => nombre.nombre === filtro)
      );
      return{...state, countries: resultado };
  
  case GET_BY_COUNTINENT:
      return{...state,
         countries: state.copy.filter((e) => e.continents === action.payload)};
  case GET_COUNTRIES_BY_ID:
      return{
        ...state,
        detail: action.payload,
      }

    default:
    return{...state};
}
};

export default rootReducer;