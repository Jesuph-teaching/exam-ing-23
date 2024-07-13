import BookCard from '../Components/BookCard';
import books from '../Data/books';

export default function Books() {
	
	// replace with useCart hook
 
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{books.map((book) => (
				<BookCard
					key={book.id}
					title={book.title}
					price={book.price}
					image={book.image}
					id={book.id}
				/>
			))}
		</div>
	);
}
