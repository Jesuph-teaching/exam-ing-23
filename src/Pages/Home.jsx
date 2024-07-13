
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to our Bookstore</h1>
      <button onClick={() => navigate('/books')}>View Books</button>
    </div>
  );
};

export default Home;