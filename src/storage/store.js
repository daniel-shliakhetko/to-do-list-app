import { configureStore } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./actions";
import { LOGIN, LOGOUT } from "./types";

const defaultState = {
  auth: {
    isAuth: false,
    uid: null,
    email: null,
  },
  app: null,
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

const appReducer = (state=defaultState.app, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
  preloadedState: defaultState,
});

export const mapStateToProps = (state) => ({
  ...state,
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: () => dispatch(loginUser),
  logoutUser: () => dispatch(logoutUser),
});
