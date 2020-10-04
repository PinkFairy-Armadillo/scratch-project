// import * as types from "../constants/actionTypes";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 18393c05b4ee1a1aff8c5f66f74a3d46b8d625b2
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
<<<<<<< HEAD
=======
// const initialState = {
//   city: 'NYC',
//   lat: '',
//   long: '',
//   countryCode: '',
//   currentUser: ''
// };

// const informationReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case types.ADD_CITY: 
//       return {
//         ...state,
//         city: action.payload.city,
//         lat: action.payload.lat,
//         long: action.payload.long,
//         countryCode: action.payload.countryCode,
//       };
//     default:
//       return state;
//   }
// }
>>>>>>> 97d55cff9cba30c585375f8c7d68909ae0efdc87

=======
>>>>>>> 18393c05b4ee1a1aff8c5f66f74a3d46b8d625b2
// export default informationReducer;
