import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>We are in Home</h1>
			<Link to="/books">Books</Link>
		</div>
	);
}
