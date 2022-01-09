import {
  AUTHENTICATE,
  LOGOUT,
  UPDATEUSER,
  USER_BUY,
} from "../action/auth";

const initialState = {
  token: null,
  userId: null,
  userAdress: null,
  userName: null,
  userEmail: null,
  userFirstName: null,
  userLastname: null,
  userPhoneNumber: null,
  buyObjects: null,
  userBuy:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    /*case SET_USER:
      return {
        ...state,
        userAdress: action.user.Adress,
        userName: action.user.username,
        userEmail: action.user.email,
        userFirstName: action.user.name,
        userLastName: action.user.lastName,
        userPhoneNumber: action.user.phoneNumber,
      };*/
    case USER_BUY:
      return {
        ...state, userBuy: action.userBuy
      };
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        userAdress: action.userAdress,
        userName: action.userName,
        userEmail: action.userEmail,
        userLastName: action.userLastName,
        userFirstName: action.userFirstName,
        userPhoneNumber: action.userPhoneNumber,
      };
    case LOGOUT: {
      return initialState;
    }
    case UPDATEUSER: {
      return {
        ...state,
        userFirstName: action.userFirstName,
        userLastName: action.userLastName,
        userPhoneNumber: action.userPhoneNumber,
      };
    }
    default:
      return state;
  }
};
