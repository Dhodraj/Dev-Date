import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import "./index.css";
import reducer, {initialState} from "./reducer"
import {StateProvider} from "./StateProvider"


ReactDOM.render(
  <BrowserRouter>
  <StateProvider initialState={initialState}
  reducer={reducer} >
    <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);



