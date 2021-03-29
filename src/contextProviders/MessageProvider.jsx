import React, { useState } from "react";
export const MessageContext = React.createContext();

const MessageProvider = (props) => {
	const [showMessageForm, setShowMessageForm] = useState(false);

	return (
		<MessageContext.Provider value={{ showMessageForm, setShowMessageForm }}>
			{props.children}
		</MessageContext.Provider>
	);
};

export default MessageProvider;
