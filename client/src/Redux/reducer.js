import { GET_COUNTRIES } from "./actions";
import { GET_COUNTRIES_BY_ID } from "./actions";
import { SORT_UP } from "./actions";

const initialState = {
  countries: [],
}

const rootReducer = (state = initialState, action) => {
switch(action.type){

  case GET_COUNTRIES:
    return {...state, countries: action.payload};

  case GET_COUNTRIES_BY_ID:
      return{...state, countries: state.countries.filter(
      (char) => char.name === action.payload.charAt(0).toUpperCase() + action.payload.slice(1))};

  case SORT_UP:
    if (action.payload === "asc") {
      let countriesAsc = state.countries.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return {
        ...state,
        countries: countriesAsc,
      };
    } else {
      let countriesDes = state.countries.sort((b, a) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return {
        ...state,
        countries: countriesDes,
      };
    }
    
  default:
    return{...state};
}
};

export default rootReducer;