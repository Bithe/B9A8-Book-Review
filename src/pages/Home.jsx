import { NavLink } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";

const Home = () => {
  // const books = useLoaderData();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then(data => setBooks(data));
  }, []);
  // console.log(books[0]);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container p-6 mx-auto space-y-6 sm:space-y-12 border ">
      {/* BANNER */}
      <div className="border flex bg-[#1313130D] rounded-3xl">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <div className="lg:p-20 space-y-2 lg:col-span-7 border justify-center items-center py-8">
            <h3 className="text-2xl lg:text-6xl py-4 font-semibold sm:text-4xl py-8 ">
              Books to freshen up your bookshelf{" "}
            </h3>
            <NavLink to="/listedBooks" className="">
              <button className="btn text-xl font-bold bg-[#23BE0A] text-white">View The List</button>
            </NavLink>{" "}
          </div>
          {books.length > 0 && (
              <img
                src={books[0].image}
                alt=""
                className=" lg:h-64 rounded lg:col-span-5 dark:bg-gray-500 text-center items-center  justify-center border m-2 "
              />
            )}
        </a>
      </div>

      {/*  */}

      {/* CARDS */}
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Home;
