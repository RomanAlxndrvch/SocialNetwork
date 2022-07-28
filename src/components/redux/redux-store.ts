import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer
})

export type stateType = ReturnType<typeof reducers>
let store = createStore(reducers)
export type storeType = typeof store

export default store