import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();
	return (
		<div className="container mx-6 flex flex-row items-center justify-between">
			<div className="flex w-full flex-col gap-4">
				<h1 className="w-2/3 text-6xl font-bold">Welcome to our bookstore</h1>
				<p>Find your next favorite book here and enjoy reading!</p>
				<button
					className="btn btn-primary w-1/4"
					onClick={() => {
						navigate('/books');
					}}
				>
					Go to books
				</button>
			</div>
			<div className="w-3/4">
				<img src="books.jpg" className="" lt="book" />
			</div>
		</div>
	);
}
