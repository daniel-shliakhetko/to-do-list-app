import { LOGIN, LOGOUT } from "./types";

export const loginUserAction = (uid, email) => ({
    type: LOGIN,
    payload: {
        isAuth: true,
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