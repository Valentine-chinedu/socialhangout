import React, { useState } from "react";
import { GoFileMedia } from "react-icons/go";

const FileUpload = () => {
	// eslint-disable-next-line no-unused-vars
	const [image, setImage] = useState(null);

	const hiddenFileInput = React.useRef(null);

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};
	return (
		<div>
			<button onClick={handleClick}>
				<GoFileMedia size={24} className="text-purple-500" />
			</button>

			<input
				className="hidden"
				type="file"
				ref={hiddenFileInput}
				onChange={handleChange}
			/>
		</div>
	);
};

export default FileUpload;
