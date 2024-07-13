import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const redirectToBooksPage = () => {
    history.push('/books');
  };

  return (
    <div>
      <h1>Welcome to our Bookstore!</h1>
      <button onClick={redirectToBooksPage}>Go to Books</button>
    </div>
  );
};

export default Home;
