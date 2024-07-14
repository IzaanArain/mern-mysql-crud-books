import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllBooks } from "../services/bookService";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const data = await fetchAllBooks();
        setBooks(data);
        setloading(false);
      } catch (err) {
        setError(err.message);
        setloading(false);
      }
    })();
  }, []);

  return (
    <>
      <div>
        <h1>Book shop</h1>
        <div className="books">
          {books.map((book, i) => {
            return (
              <div key={i} className="book">
                {book.cover && (
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${book.cover}`}
                    alt=""
                  />
                )}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <span>{book.price}</span>
              </div>
            );
          })}
        </div>
        <button>
          <Link to={"/add"}>Add new book</Link>
        </button>
      </div>
    </>
  );
};

export default Books;
