import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./contextProviders/Auth";
import ModalProvider from "./contextProviders/ModalProvider";
import MessageProvider from "./contextProviders/MessageProvider";

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<MessageProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</MessageProvider>
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
