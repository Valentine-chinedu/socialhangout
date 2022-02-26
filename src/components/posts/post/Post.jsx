import React from 'react';
import { FaRegThumbsUp, FaRegCommentAlt } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

const Post = ({ avatar, image, username, timestamp, message }) => {
	return (
		<div className='relative'>
			<div className='flex h-auto lg:w-4/6 justify-start pl-4 py-4 border-b border-gray-800 hover:bg-gray-50'>
				<div className='h-14'>
					<img
						className='h-12 w-14 md:h-14 md:w-16 lg:h-20 lg:w-24 rounded-full object-cover'
						src={avatar}
						alt=''
					/>
				</div>
				<div className='w-full ml-4'>
					<div className='flex flex-col md:items-center md:flex-row mb-2'>
						<h3 className='mr-2 text-sm md:text-lg lg:text-lg text-primary font-bold'>
							{username}
						</h3>
						<p className='mr-2 opacity-70 lg:mt-1 text-xs md:text-base'>
							{new Date(timestamp?.toDate()).toUTCString()}
						</p>
					</div>
					<div className='mr-2 mb-2 text-primary text-sm lg:text-lg lg:mb-4'>
						<p className='md:text-lg'>{message}</p>
					</div>

					{image ? (
						<div className='mr-2'>
							<img
								className='object-cover object-center rounded-3xl h-64 md:h-96  w-full'
								src={image}
								alt=''
							/>
						</div>
					) : (
						console.log('no image')
					)}

					<div className='flex justify-around mt-4 pr-4'>
						<button className='focus:outline-none'>
							<FaRegThumbsUp className='lg:text-2xl text-secondary hover:text-purple-700' />
						</button>
						<button className='focus:outline-none'>
							<FaRegCommentAlt className='lg:text-2xl text-secondary hover:text-purple-700' />
						</button>
						<button className='focus:outline-none'>
							<FiShare2 className='lg:text-2xl text-secondary hover:text-purple-700' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
