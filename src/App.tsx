import React from 'react';
import {Redirect, Route, withRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderCont from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {stateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


type AppPropsType = {
    initializeAppTC: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        else return (
            <div className={'app-wrapper'}>
                <HeaderCont/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UserContainer/>}/>
                    <Route exact path={'/News'} render={() => <News/>}/>
                    <Route exact path={'/Music'} render={() => <Music/>}/>
                    <Route exact path={'/Settings'} render={() => <Settings/>}/>
                    <Route exact path={'/Login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

type appMapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: stateType): appMapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC, logout}))(App)



