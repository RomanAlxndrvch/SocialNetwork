import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from './components/redux/state'
import store from './components/redux/state'


export const rerenderEntireThree = (state: RootStateType) => {
    console.log('App rendered')
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updatePostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)

