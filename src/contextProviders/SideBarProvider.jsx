import React, { useState } from "react";
export const SideBarContext = React.createContext();

const SideBarProvider = (props) => {
	const [showSideBar, setShowSideBar] = useState(false);

	return (
		<SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
			{props.children}
		</SideBarContext.Provider>
	);
};

export default SideBarProvider;
