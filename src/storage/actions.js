import { LOGIN, LOGOUT } from "./types";

export const loginUserAction = (uid, email) => ({
    type: LOGIN,
    payload: {
        isAuth: (uid && email) || false,
        uid,
        email,
    }
});

export const logoutUserAction = () => ({
    type: LOGOUT,
    payload: {
        isAuth: false,
        uid: '',
        email: '',
    }
});