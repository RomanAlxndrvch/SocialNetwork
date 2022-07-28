import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from './components/redux/store'
import store from './components/redux/redux-store'


export const rerenderEntireThree = (state: RootStateType) => {
    console.log('App rendered')
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}

            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
})

