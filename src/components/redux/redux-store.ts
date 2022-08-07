import {combineReducers, createStore} from "redux";
import profileReducer, {updateNewPostTextActionCreator} from "./profilePage-reducer";
import dialogsReducer, {updateNewMessageBodyCreator} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer
})

export type stateType = ReturnType<typeof reducers> // типизация того,что наш стор вернет
let store = createStore(reducers)
export type storeType = typeof store // типизация самого стора

export default store