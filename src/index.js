import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";


const usersReducer = (state = {users: [], isUsersLoading: true}, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {...state, users: action.payload};
        case 'START_USER_LOADING':
            return {...state, isUsersLoading: true}
        case 'END_USER_LOADING':
            return {...state, isUsersLoading: false}
    }
    return state;
}

const postsReducer = (state = {posts: [], isPostsLoading: true}, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {...state, posts: action.payload};
        case 'START_POSTS_LOADING':
            return {...state, isPostsLoading: true}
        case 'END_POSTS_LOADING':
            return {...state, isPostsLoading: false}
    }
    return state;
}


let reducers = combineReducers({usersReducer, postsReducer});

const log = (store) => (next) => (action) => {
    console.log(store);
    next();
};

const pass = (store) => (next) => (action) => {
    console.log('pass');
    next();

};


let store = createStore(reducers, applyMiddleware(log, pass));


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter></Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

