import React, { useState } from "react";
export const StorageContext = React.createContext();

const StorageProvider = (props) => {
	const [image, setImage] = useState("");

	return (
		<StorageContext.Provider value={{ image, setImage }}>
			{props.children}
		</StorageContext.Provider>
	);
};

export default StorageProvider;
