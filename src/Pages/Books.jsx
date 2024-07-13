import useCart from '../Hooks/useCart';
import React from 'react';

const Books = () => {
  const { addToCart, books } = useCart();

  const handleAddToCart = (book) => {
    addToCart(book);
    alert(`Added "${book.title}" to cart!`);
  };

  return (
    <div>
      <h2>Books:</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
