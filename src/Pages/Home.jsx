import React from 'react';

export default function Home() {
	return (
		<>
			<h1>Welcome to our bookstore</h1>
			<p>Find your next favorite book here and enjoy reading!</p>
			<Link to="/books">Get started</Link>
		</>
	);
}
