import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer
})

export type storeType = ReturnType<typeof reducers>
let store = createStore(reducers)

export default store