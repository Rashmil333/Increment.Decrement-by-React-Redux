import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Dwebsite from "./Dwebsite";
import Websocket from "./Websocket";
import Dtestchat from "./Dtestchat";
import Dreactreduxapp from "./Dreactreduxapp";
import store from "./store";
import {Provider} from "react-redux";

store.subscribe(()=>console.log(store.getState()));
	// <BrowserRouter>
	// 	<Dwebsite/>
	// </BrowserRouter>

ReactDOM.render(<>
	<Provider store={store}>
		<Dreactreduxapp/>
	</Provider>
	</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
