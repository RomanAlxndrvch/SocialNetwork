import {AppDispatch, dispatchType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetUserDataAcType = {
    type: 'SET_USER_DATA',
    payload: {
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

export type AuthActionCreatorType = SetUserDataAcType

let InitialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
export const authReducer = (state: AuthPageType = InitialState, action: AuthActionCreatorType): AuthPageType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload, isAuth: action.payload.isAuth}
        }

        default: {
            return state
        }
    }
}

export const SetAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataAcType => {
    return {
        type: 'SET_USER_DATA' as const,
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    }
}

export const getAuthUserData = () => (dispatch: dispatchType) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(SetAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            dispatch(stopSubmit('login', {_error: res.data.messages.length > 0 ? res.data.messages[0] : 'Wrong email or password'}))
        }
    })
}

export const logout = () => (dispatch: AppDispatch) => {
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(SetAuthUserDataAC(null, null, null, false))
        }
    })
}

export default authReducer