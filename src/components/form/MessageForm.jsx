/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { GoFileMedia } from 'react-icons/go';
import TextareaAutosize from 'react-textarea-autosize';
import firebase from 'firebase';
import db from '../../firebase';
import { storageRef } from '../../firebase';
import { AuthContext } from '../../contextProviders/Auth';
import ElegentReactTooltip from 'elegant-react-tooltip';
import { MessageContext } from '../../contextProviders/MessageProvider';

const SubmitForm = () => {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [imagePreview, setImagePreview] = useState(null);
	const { currentUser } = useContext(AuthContext);
	const { showMessageForm, setShowMessageForm } = useContext(MessageContext);

	const hiddenFileInput = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		setShowMessageForm(false);

		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: currentUser.photoURL,
			username: currentUser.displayName,
			image: imageUrl,
		});

		setImageUrl('');
		setInput('');
	};

	// const savePost = async (postData) => {
	// 	await axios.post("/upload/post", postData).then((resp) => {
	// 		console.log(resp);
	// 	});
	// };

	const handleClick = (e) => {
		e.preventDefault();
		hiddenFileInput.current.click();
	};

	const handleFileChange = async (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setImageUrl(await fileRef.getDownloadURL());
		setImagePreview(await fileRef.getDownloadURL());
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='hidden mr-2 w-full lg:pt-11 border-b lg:flex pb-2'>
					<img
						className='object-cover rounded-full w-[2.4rem] h-10 ml-4 mt-3'
						src={currentUser.photoURL}
						alt=''
					/>
					<div className='flex flex-col mt-5 pl-1 w-full relative'>
						<div className='mb-2 border-b border-primary mr-4 pb-4'>
							<TextareaAutosize
								className='pl-2 w-full h-auto text-lg text-gray-700 placeholder:text-gray-600 placeholder:text-lg focus:outline-none resize-none lg:mb-2'
								autoFocus
								autoComplete='true'
								placeholder="What's happening?"
								name='creator'
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<div
								className={`relative ${imagePreview === null ? 'hidden' : ''}`}
							>
								<div
									onClick={() => setImagePreview(null)}
									className='text-xl text-gray-300 mb-2 absolute lg:left-36 lg:bottom-14 cursor-pointer'
								>
									X
								</div>
								<img
									className={`h-full w-full mb-2 ml-2 ${
										imagePreview === null ? 'hidden' : ''
									}`}
									src={imagePreview}
									alt=''
								/>
							</div>

							<div
								className={`flex pl-2 items-center space-x-1 text-blue-500 ${
									input ? '' : 'invisible'
								}`}
							>
								<svg
									className='h-4 text-blue-500'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<g>
										<path
											d='M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z'
											fill='#258bff'
										></path>
									</g>
								</svg>
								<h3 className='text-sm font-semibold'>Everyone can reply</h3>
							</div>
						</div>

						<div className='flex pl-2  items-center justify-between'>
							<div className='flex items-center space-x-3.5'>
								<button className='focus:outline-none' onClick={handleClick}>
									{/* <ElegentReactTooltip label='Upload media'> */}
									<svg viewBox='0 0 24 24' aria-hidden='true' className='h-5'>
										<g>
											<title>Upload media</title>
											<path
												fill='#258bff'
												d='M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z'
											></path>
											<circle
												fill='#258bff'
												cx='8.868'
												cy='8.309'
												r='1.542'
											></circle>
										</g>
									</svg>
									{/* </ElegentReactTooltip> */}
								</button>

								<input
									className='hidden'
									type='file'
									ref={hiddenFileInput}
									onChange={handleFileChange}
								/>
								<svg viewBox='0 0 24 24' aria-hidden='true' className='h-4'>
									<g>
										<path
											fill='#258bff'
											d='M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z'
										></path>
										<path
											fill='#258bff'
											d='M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z'
										></path>
									</g>
								</svg>
								<svg viewBox='0 0 24 24' aria-hidden='true' className='h-4'>
									<g>
										<path
											fill='#258bff'
											d='M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z'
										></path>
									</g>
								</svg>
								<svg viewBox='0 0 24 24' aria-hidden='true' className='h-4'>
									<g>
										<path
											fill='#258bff'
											d='M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z'
										></path>
										<path
											fill='#258bff'
											d='M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z'
										></path>
										<circle
											fill='#258bff'
											cx='14.738'
											cy='9.458'
											r='1.478'
										></circle>
										<circle
											fill='#258bff'
											cx='9.262'
											cy='9.458'
											r='1.478'
										></circle>
									</g>
								</svg>
								<svg viewBox='0 0 24 24' aria-hidden='true' className='h-4'>
									<g>
										<path
											fill='#258bff'
											d='M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z'
										></path>
										<path
											fill='#258bff'
											d='M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z'
										></path>
										<path
											fill='#258bff'
											d='M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z'
										></path>
										<path
											fill='#258bff'
											d='M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z'
										></path>
									</g>
								</svg>
								<svg viewBox='0 0 24 24' aria-hidden='true' className='h-4'>
									<g>
										<path
											fill='#7fb8fa'
											d='M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z'
										></path>
										<path
											fill='#7fb8fa'
											d='M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z'
										></path>
									</g>
								</svg>
							</div>
							<button
								className={`focus:outline-none rounded-3xl bg-blue-500 mr-8 py-1.5 px-4 text-sm font-medium text-gray-50 ${
									!imageUrl && !input ? 'disabled:opacity-50' : ''
								}`}
								onClick={() => setImagePreview(null)}
								type='submit'
								disabled={!imageUrl && !input}
							>
								Tweet
							</button>
						</div>
					</div>
				</div>
				{/* message form for small and medium screen */}
			</form>
			{showMessageForm ? (
				<>
					<div className='justify-center items-center flex flex-col mx-4 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div
							onClick={() => setShowMessageForm(false)}
							className='text-3xl md:text-4xl text-gray-300 mb-8'
						>
							X
						</div>
						<form onSubmit={handleSubmit}>
							<div className='rounded-md flex pt-8 px-10 w-96 md:w-full md:h-80 md:pt-20 bg-gray-800'>
								<img
									className='object-cover rounded-full w-16 h-16 md:w-20 md:h-20 ml-2 md:ml-5 mt-3'
									src={currentUser.photoURL}
									alt=''
								/>
								<div className='flex flex-col mt-7 pl-2 w-full relative'>
									<div>
										<TextareaAutosize
											className='pl-2 w-64 bg-gray-800 text-gray-300 h-auto focus:outline-none resize-none pb-7 md:pb-4 mb-6 md:mb-4 md:mr-8 md:w-80 md:text-xl'
											autoFocus
											autoComplete='true'
											placeholder="what's on your mind?"
											name='creator'
											value={input}
											onChange={(e) => setInput(e.target.value)}
										/>
									</div>
									<div
										className={`relative ${
											imagePreview === null ? 'hidden' : ''
										}`}
									>
										<div
											onClick={() => setImagePreview(null)}
											className='text-xs md:text-lg text-gray-300 mb-2 absolute right-32 bottom-16 md:right-56 md:bottom-14 cursor-pointer'
										>
											X
										</div>
										<img
											className='object-fill h-16 w-24 mb-2 ml-2'
											src={imagePreview}
											alt=''
										/>
									</div>

									<div className='flex items-center pl-2 mb-8 md:mb-4 border-t pt-4 md:pt-0'>
										<button
											className='focus:outline-none mr-12'
											onClick={handleClick}
										>
											<GoFileMedia
												size={25}
												className='text-purple-500 md:h-32'
											/>
										</button>

										<input
											className='hidden'
											type='file'
											ref={hiddenFileInput}
											onChange={handleFileChange}
										/>
										<button
											className={`focus:outline-none rounded-3xl bg-purple-800 mr-8 px-4 tracking-wide text-gray-200 ${
												!imageUrl && !input ? 'disabled:opacity-50' : ''
											}`}
											type='submit'
											disabled={!imageUrl && !input}
										>
											POST
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					{/* empty div to give the modal a dark background */}
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
};

export default SubmitForm;
