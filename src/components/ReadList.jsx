import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    console.log(readList);
  
    useEffect(() => {
      const getReadData = JSON.parse(localStorage.getItem("books")) || [];
      setReadList(getReadData);
    }, []);
    return (
        <div>
            {readList.map((book) => (
                <div className="p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800" key={book.bookId}>
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <div className="p-4 bg-pink-200 rounded-2xl">
                            <img
                                src={book.image}
                                alt=""
                                className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{book.bookName}</h2>
                            <span className="text-sm dark:text-gray-600">By: {book.author}</span>
                        </div>
                        <div className="flex justify-center items-center gap-4">
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
                        <div className="flex items-center gap-2 ">
                            <GoPeople />
                            {book.publisher}
                            <BsFileEarmarkBarGraph />
                            <p>Page {book.totalPages}</p>
                        </div>
                        <hr className="border border-dashed " />
                        <div className="space-y-1 flex items-center gap-4">
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