import { LOGIN_STORE, AUTH_USER } from "../actions/types";
// const initialState = {
//   user: {},
//   isLoggedIn: false,
// };

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_STORE:
      return {
        ...state,
        // user: action.payload,
      };
      break;

    case AUTH_USER:
      return { ...state, storeData: action.payload };
      break;

    default:
      return state;
  }
}
