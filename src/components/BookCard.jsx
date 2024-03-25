import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, image, tags, bookName, author, category, rating } = book;
  return (
    <div className="border rounded-2xl ">
      <Link
     to={`/book-details/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <div className="flex justify-center bg-[#1313130D] m-4 rounded-2xl ">
          <img
            role="presentation"
            className=" rounded h-44 dark:bg-gray-500 p-4"
            src={image}
          />
        </div>
        <div className="p-6 space-y-2">
          <span className="text-xs dark:text-gray-600 flex lg:text-base lg:font-medium text-[#23BE0A]">
            {tags.map((tag, index) => (
              <span key={index} className={`${index !== 0 ? "ml-10 border rounded-3xl p-2 bg-green-100 border-none" : "border rounded-3xl p-2 bg-green-100 border-none"}`}>
                {tag}
              </span>
            ))}
          </span>

          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline lg:text-2xl lg:font-bold ">
            {bookName}{" "}
          </h3>
          <p>By: {author}</p>

          <hr className="border border-dashed " />

          <div className="flex justify-between">
            <p>{category}</p>
            <p className="flex  items-center justify-between gap-2">
              {rating}  <span className="text-xl"><AiOutlineStar /></span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
