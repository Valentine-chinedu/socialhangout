import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import StorageProvider from "./contextProviders/StorageProvider";
import { AuthProvider } from "./contextProviders/Auth";

ReactDOM.render(
	<React.StrictMode>
		<StorageProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</StorageProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
