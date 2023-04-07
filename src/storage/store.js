import { configureStore } from "@reduxjs/toolkit";
import { loginUserAction, logoutUserAction, changeUserDataAction, setUserDataAction } from "./actions";
import { LOGIN, LOGOUT, CHANGEDATA, SETDATA } from "./types";

const defaultState = {
  auth: {
    isAuth: false,
    uid: '',
    email: '',
  },
  userData: null,
};

const authReducer = (state=defaultState.auth, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

const userDataReducer = (state=defaultState.userData, action) => {
  switch (action.type) {
    case SETDATA:
      return action.payload;
    case CHANGEDATA:
      return Object.assign(state||{}, action.payload);
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: userDataReducer,
  },
  preloadedState: defaultState,
});

export const mapStateToProps = (state) => ({
  ...state,
});

export const mapDispatchToProps = (dispatch) => ({
  loginUserAction: () => dispatch(loginUserAction),
  logoutUserAction: () => dispatch(logoutUserAction),
  setUserDataAction: () => dispatch(setUserDataAction),
  changeUserDataAction: () => dispatch(changeUserDataAction),
});
