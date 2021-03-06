import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider, useSelector} from 'react-redux';
// import {store} from "./redux/store"
import loggedinslice from "./redux/logininfo"
import messageslice from './redux/message';
import { configureStore } from '@reduxjs/toolkit';
const store=configureStore({
  reducer:{
      //all reducers go here
      log:  loggedinslice,
      message:messageslice
  }
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

