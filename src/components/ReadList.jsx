import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  console.log(readList);

  // DISPLAY BOOKS
  const [displayBooks, setDisplayBooks] = useState([]);

  const handleReadListFilter = (filter) => {
    if (filter === "all") {
      setDisplayBooks(readList);
    } else if (filter === "category") {
      const sortedBooks = readList.slice().sort((a, b) => {
        return b.category.localeCompare(a.category);
      });
      setDisplayBooks(sortedBooks);
    } else if (filter === "rating") {
      const sortBooks = readList.slice().sort((a, b) => {
        return b.rating - a.rating; // Assuming rating is a numerical value
      });
      setDisplayBooks(sortBooks);
    }
  };

  // LOAD DATA FROM LOCAL STORAGE
  useEffect(() => {
    const getReadData = JSON.parse(localStorage.getItem("books")) || [];
    setReadList(getReadData);
    setDisplayBooks(getReadData);
  }, []);

  return (
    <div className="">
      {/* SORTING BUTTON */}{" "}
      <div className="flex justify-center items-center py-8 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white text-lg font-semibold ">
          Sort By <AiOutlineArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                handleReadListFilter("all");
              }}
            >
              <a>All</a>
            </li>
            <li onClick={() => handleReadListFilter("category")}>
              <a>Category</a>
            </li>
            <li onClick={() => handleReadListFilter("rating")}>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}

      {displayBooks.map((book) => (
        <div
          className="p-8 lg:flex space-x-6 dark:bg-gray-50 dark:text-gray-800 border"
          key={book.bookId}
        >
          <div className="flex-shrink-0 w-full sm:w-32 mb-10 border">
            <div className="p-4 bg-[#1313130D] rounded-2xl items-center justify-center flex ">
              <img
                src={book.image}
                alt=""
                className="object-cover object-center lg:w-full lg:h-full rounded dark:bg-gray-500"
              />
            </div>
          </div>
          <div className="space-y-4 border py-8">
            <div>
              <h2 className="text-2xl font-semibold">{book.bookName}</h2>
              <span className="text-sm dark:text-gray-600">
                By: {book.author}
              </span>
            </div>
            <div className="lg:flex justify-center items-center gap-4">
              <p className="font-bold py-2">Tag: </p>
              <span className="text-xs dark:text-gray-600 flex lg:text-base lg:font-medium text-[#23BE0A]">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`${
                      index !== 0
                        ? "ml-10 border rounded-3xl p-2 font-medium bg-green-100 border-none"
                        : "border rounded-3xl p-2 bg-green-100 border-none font-medium"
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </span>
              <CiLocationOn />
              <p>Year of Publishing: {book.yearOfPublishing}</p>
            </div>
            <div className="lg:flex items-center gap-2 ">
              <GoPeople />
              {book.publisher}
              <BsFileEarmarkBarGraph />
              <p>Page {book.totalPages}</p>
            </div>
            <hr className="border border-dashed " />
            <div className="space-y-1 lg:flex items-center gap-4">
              <p className=" border rounded-3xl p-2 font-medium text-[#328EFF] bg-[#328EFF1A] border-none">
                Category: {book.category}
              </p>
              <p className=" border rounded-3xl p-2 font-medium text-[#FFAC33] bg-[#FFAC331A] border-none">
                Rating: {book.rating}
              </p>
              <button className="btn">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadList;
