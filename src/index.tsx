import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HttpAPIInfrastructure} from "./infrastructure/HttpAPI";
import {HttpAPIDataRepository} from "./repository/DataRepository";

const httpAPI = new HttpAPIInfrastructure("https://jsonplaceholder.typicode.com")
const dataRepository = new HttpAPIDataRepository(httpAPI)

ReactDOM.render(
  <React.StrictMode>
    <App dataRepository={dataRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
