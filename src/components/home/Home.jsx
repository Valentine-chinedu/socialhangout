import React from "react";
import SubmitForm from "../form/SubmitForm";
import Posts from "../posts/Posts";

function Home() {
	return (
		<div className="lg:w-5/12 lg:mr-8 w-full border-r border-l border-primary overflow-y-scroll scrollbar-hide">
			<SubmitForm />
			<Posts />
		</div>
	);
}

export default Home;
