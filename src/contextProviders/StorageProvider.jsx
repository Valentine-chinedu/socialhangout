import React, { useState } from "react";
export const StorageContext = React.createContext();

const StorageProvider = (props) => {
	const [bgphoto, setBgPhoto] = useState("");

	return (
		<StorageContext.Provider value={{ bgphoto, setBgPhoto }}>
			{props.children}
		</StorageContext.Provider>
	);
};

export default StorageProvider;
