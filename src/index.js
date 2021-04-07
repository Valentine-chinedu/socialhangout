import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./contextProviders/Auth";
import ModalProvider from "./contextProviders/ModalProvider";
import MessageProvider from "./contextProviders/MessageProvider";
import SideBarProvider from "./contextProviders/SideBarProvider";
import { ThemeProvider } from "./contextProviders/ThemeContext";

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<MessageProvider>
				<AuthProvider>
					<SideBarProvider>
						<ThemeProvider>
							<App />
						</ThemeProvider>
					</SideBarProvider>
				</AuthProvider>
			</MessageProvider>
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
