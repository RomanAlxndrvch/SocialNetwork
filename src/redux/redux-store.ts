import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionCreatorType} from "./profile-reducer";
import dialogsReducer, {DialogActionsCreatorsType} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import userReducer, {UserActionCreatorType} from "./user-reducer";
import authReducer, {AuthActionCreatorType} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import appReducer, {AppActionType} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    sidebar: navbarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export type stateType = ReturnType<typeof rootReducer> // типизация того,что наш стор вернет
export type storeType = typeof store // типизация самого стора
export type dispatchType = typeof store.dispatch

type appActionType =
    AuthActionCreatorType
    | DialogActionsCreatorsType
    | ProfileActionCreatorType
    | UserActionCreatorType
    | AppActionType

export type AppDispatch<ReturnType = void> = ThunkDispatch<stateType, unknown, appActionType>

declare global {
    interface Window {
        store: any; // 👈️ turn off type checking
    }
}

window.store = store

export default store