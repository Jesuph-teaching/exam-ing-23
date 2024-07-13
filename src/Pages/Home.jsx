

export default function Home() {
	return (
		<div>
			<h1>Welcome to our bookstore</h1>
			<p>Find your next favorite book here and enjoy reading!</p>
			<button onClick={() => window.location.href = '/books'}>Go to books</button>

		</div>
	);
}
