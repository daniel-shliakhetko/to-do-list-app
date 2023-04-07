import { LOGIN, LOGOUT, SETDATA, CHANGEDATA } from "./types";

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

export const setUserDataAction = (userData) => ({
    type: SETDATA,
    payload: userData,
})

export const changeUserDataAction = (changes) => ({
    type: CHANGEDATA,
    payload: changes,
})