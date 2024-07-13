import React from 'react';

const Home = () => {
	return (
		<div class="container flex h-full flex-wrap items-center justify-between gap-4 p-4">
			<div class="flex flex-col gap-4 p-4">
				<h1 class="max-w-[12ch] text-7xl font-bold">Welcome to our bookstore</h1>
				<p>Find your next favorite book here and enjoy reading!</p>
				<button
					class="btn btn-primary mr-auto"
					onClick={() => {
						window.location.href = '/books';
					}}
				>
					Get Started
				</button>
			</div>
			<div class="w-full xl:w-2/5">
				<img src="/books.jpg" alt="Book" class="h-full w-full object-cover"></img>
			</div>
		</div>
	);
};

export default Home;
