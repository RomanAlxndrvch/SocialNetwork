import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    sidebar: navbarReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export type stateType = ReturnType<typeof rootReducer> // типизация того,что наш стор вернет
export type storeType = typeof store // типизация самого стора
export type dispatchType = typeof store.dispatch

declare global {
    interface Window {
        store: any; // 👈️ turn off type checking
    }
}

window.store = store

export default store