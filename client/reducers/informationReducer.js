// import * as types from "../constants/actionTypes";
const initialState = {
  city: 'NYC',
  lat: '40.712775',
  long: '-74.005973',
  countryCode: 'US',
  currentUser: ''
};

const informationReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_CITY: 
      return {
        ...state,
        city: action.payload.city,
        lat: action.payload.lat,
        long: action.payload.long,
        countryCode: action.payload.countryCode,
      };
      case types.ADD_USER: 
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}

// export default informationReducer;
