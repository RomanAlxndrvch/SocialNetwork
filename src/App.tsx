import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


type DialogsType = {
    id: number,
    name: string,
    avatar: string
}
type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type MessagesType = {
    id: number,
    message: string
}
type FriendsType = {
    id: number,
    name: string
    avatar: string
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type FriendsPageType = {
    friends: Array<FriendsType>
}
type StatePropsType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: FriendsPageType
}
type AppPropsType = {
    state: StatePropsType,
    addPost: (postMessage: string) => void
}


function App(props: AppPropsType) {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route exact path={'/News'} render={() => <News/>}/>
                <Route exact path={'/Music'} render={() => <Music/>}/>
                <Route exact path={'/Settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;


