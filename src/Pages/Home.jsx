import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Welcome to our bookstore</h1>
            <p>Find your next favorite book here and enjoy reading!</p>
			<Link to="/books">Books</Link>
		</div>
	);
}
