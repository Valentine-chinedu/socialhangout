import React, { useContext } from "react";
import { SideBarContext } from "../../contextProviders/SideBarProvider";
import SubmitForm from "../form/SubmitForm";
import Posts from "../posts/Posts";

function Home() {
	const { setShowSideBar } = useContext(SideBarContext);

	return (
		<div
			onClick={() => setShowSideBar(false)}
			className="lg:w-4/12 lg:mr-8 lg:mb-40 w-full lg:border-r lg:border-l border-primary overflow-y-scroll scrollbar-hide"
		>
			<SubmitForm />
			<Posts />
		</div>
	);
}

export default Home;
