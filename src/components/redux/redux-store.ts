import {combineReducers, createStore} from "redux";
import profileReducer, {updateNewPostTextActionCreator} from "./profilePage-reducer";
import dialogsReducer, {updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import userReducer from "./user-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    sidebar: navbarReducer
})

let store = createStore(rootReducer)

export type stateType = ReturnType<typeof rootReducer> // типизация того,что наш стор вернет
export type storeType = typeof store // типизация самого стора


export default store