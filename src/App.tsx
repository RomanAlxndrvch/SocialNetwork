import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
    newPostText: string
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
type FriendsPageType = {
    friends: Array<FriendsType>
}
type StatePropsType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: FriendsPageType
}
type AppPropsType = {}


function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route exact path={'/News'} render={() => <News/>}/>
                <Route exact path={'/Music'} render={() => <Music/>}/>
                <Route exact path={'/Settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;


