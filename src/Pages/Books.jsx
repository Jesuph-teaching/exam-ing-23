// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookCard from '../Components/BookCard';
import { useCart } from '../hooks/useCart'; 
import { books } from '../Data/books';

const Books = () => {
	const { addToCart } = useCart(); 
	return (
		<div className="container mx-auto py-8">
			<h1 className="mb-4 text-3xl font-bold">Books</h1>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{books.map((book) => (
					<BookCard
						key={book.id}
						title={book.title}
						price={book.price}
						image={book.image}
						id={book.id}
						addToCart={addToCart} 
					/>
				))}
			</div>
		</div>
	);
};

export default Books;
