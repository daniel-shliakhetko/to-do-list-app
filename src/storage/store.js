import { configureStore } from "@reduxjs/toolkit";
import { loginUserAction, logoutUserAction } from "./actions";
import { LOGIN, LOGOUT } from "./types";

const defaultState = {
  auth: {
    isAuth: false,
    uid: '',
    email: '',
  },
  app: null,
};

const authReducer = (state=defaultState.auth, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload)
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
  loginUserAction: () => dispatch(loginUserAction),
  logoutUserAction: () => dispatch(logoutUserAction),
});
