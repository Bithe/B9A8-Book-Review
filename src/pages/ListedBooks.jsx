import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ReadBookCard from "../components/ReadBookCard";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [readList, setReadList] = useState([]);
  console.log(readList);

  useEffect(() => {
    const getReadData = JSON.parse(localStorage.getItem("books")) || [];
    setReadList(getReadData);
  }, []);

  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
      <div className="bg-[#1313130D] container mx-auto space-y-6 sm:space-y-12 border text-center font-extrabold p-8 lg:text-3xl rounded-2xl ">
        <h1>Books</h1>
      </div>

      {/*  */}
      <button>sort by</button>

      {/* TABS */}
      <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        {/* CONTENT */}
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounder-t-lg dark:border-gray-600 dark:text-gray-600`}
        >
       
          <span>Read Books</span>
        </Link>

        {/* AUTHOR */}
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
         
          <span>Wishlist Books</span>
        </Link>
      </div>
      {/*  */}

      <Outlet></Outlet>

      {/* READ BOOKS */}
      <div className=" p-8 sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
        {readList.map((readBook) => (
          <ReadBookCard
            key={readBook.bookId}
            readBook={readBook}
          ></ReadBookCard>
        ))}
      </div>


      
    </div>
  );
};

export default ListedBooks;
