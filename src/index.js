import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "react";
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
