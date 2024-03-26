import { useLoaderData, useParams } from "react-router-dom";
import {
  saveReadDataToLocal,
  saveWishlistDataToLocal,
} from "../utility/localStorage";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const { bookId } = useParams();

  const idInt = parseInt(bookId);

  const book = bookDetails.find((book) => book.bookId === idInt);

  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  // console.log(bookDetails, bookId);
  // console.log(book);

  // READ BUTTON

  const handleRead = () => {
    saveReadDataToLocal(book);
  };

  // WISHLIST BUTTON
  const handleWishlist = () => {
    saveWishlistDataToLocal(book);
  };

  return (
    <div className="dark:bg-gray-100 dark:text-gray-900 container mx-auto space-y-6 sm:space-y-12 border ">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 m-8 bg-[#1313130D] rounded-2xl align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 p-8 lg:h-auto">
          <img className=" h-full" src={book.image} alt="" />
        </div>

        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold lg:text-5xl pb-4 ">{bookName}</h1>
            <span className=" text-xl font-medium">By: {author}</span>

            <p className="lg:text-xl lg:font-medium">{category}</p>
            <p>
              <span className="font-bold">Review: </span>
              {review}
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
            >
              {/* TAGS */}
              <p className="font-bold py-2">Tag: </p>
              <span className="text-xs dark:text-gray-600 flex lg:text-base lg:font-medium text-[#23BE0A]">
                {tags.map((tag, index) => (
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

              {/*  */}
            </a>

            <hr className="border border-dashed " />
            {/*  */}

            <div>
              <div className="py-8">
                <p className="py-1">
                  Number of Pages:{" "}
                  <span className=" font-semibold ">{totalPages}</span>{" "}
                </p>
                <p className="py-1">
                  Publisher:{" "}
                  <span className=" font-semibold ">{publisher}</span>{" "}
                </p>
                <p className="py-1">
                  Year of Publishing:{" "}
                  <span className=" font-semibold ">{yearOfPublishing}</span>
                </p>
                <p className="py-1">
                  Rating: <span className=" font-semibold ">{rating}</span>
                </p>
              </div>
              <div className="gap-8 flex">
                <button onClick={handleRead} className="btn text-lg font-bold">
                  Read
                </button>
                <button
                  onClick={handleWishlist}
                  className="btn text-lg font-bold"
                >
                  Wishlist
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
