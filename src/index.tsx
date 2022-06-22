import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePostText, subscribe, RootStateType} from './components/redux/state'
import state from './components/redux/state'


export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(state)
subscribe(rerenderEntireThree)