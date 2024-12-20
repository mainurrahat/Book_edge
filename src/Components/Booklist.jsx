import { Link, useLoaderData } from "react-router-dom";

const Booklist = () => {
  const books = useLoaderData(); // Access data from the loader
  //   const books = data.docs || []; // Assuming `docs` contains the book list
  console.log(books);
  return (
    <div className="grid grid-cols-10 gap-4">
      {/* Sidebar */}
      <div className="col-span-2 bg-blue-200 p-4">
        <ul className="space-y-3">
          <li className="text-lg font-bold">
            My <span className="text-red-400">Book</span> Shelf
          </li>
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="hover:text-blue-600">
              Search
            </Link>
          </li>
          <li>
            <Link to="/myshelf" className="hover:text-blue-600">
              My Shelf
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="hover:text-blue-600">
              Favourite
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="col-span-8 bg-green-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Book List</h2>
        <ul>
          {books.map((book) => (
            <li key={book.index} className="mb-2">
              <strong>{book.title}</strong> by {book.author_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booklist;
