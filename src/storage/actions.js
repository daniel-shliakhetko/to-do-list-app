import { LOGIN, LOGOUT } from "./types";

export const loginUser = (uid, email) => ({
    type: LOGIN,
    payload: {
        isAuth: true,
        uid,
        email,
    }
});

export const logoutUser = (uid, email) => ({
    type: LOGOUT,
    payload: {
        isAuth: false,
        uid: null,
        email: null,
    }
});