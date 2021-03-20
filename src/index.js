import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ModalProvider from "./contextProviders/ModalStateProvider";
import StorageProvider from "./contextProviders/StorageProvider";
import { AuthProvider } from "./contextProviders/Auth";

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<StorageProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</StorageProvider>
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
