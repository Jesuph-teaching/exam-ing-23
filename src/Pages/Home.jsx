import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
	return (
		<div className="home_page">
			<p className="text-6xl font-bold">Welcome to our bookstore</p>
			<div>
				<button className="books_btn font-bold">
					<Link to="books">BOOKS</Link>
				</button>
			</div>
		</div>
	);
}

export default Home;
