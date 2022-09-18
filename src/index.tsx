import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from './redux/store'
import store from './redux/redux-store'
import {Provider} from "react-redux";
import {sendMessageActionCreator} from "./redux/dialogs-reducer";


/*
export const rerenderEntireThree = (state: RootStateType) => {
    console.log('App rendered')
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}
*/

/*
rerenderEntireThree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
})

*/


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);