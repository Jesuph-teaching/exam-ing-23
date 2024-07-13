// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
	const history = useHistory();

	const redirectToBooks = () => {
		history.push('/books');
	};

	return (
		<div className="container">
			<h1>Welcome to Our Bookstore!</h1>
			<p>Find your next favorite book here and enjoy reading!</p>
			<button className="btn btn-primary" onClick={redirectToBooks}>
				Get Started
			</button>
		</div>
	);
};

export default Home;
