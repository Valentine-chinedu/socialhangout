import React, { useState } from "react";
export const ModalContext = React.createContext();

const ModalProvider = (props) => {
	const [showModal, setShowModal] = useState(false);

	console.log(showModal);

	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
