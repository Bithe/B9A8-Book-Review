import toast from "react-hot-toast";

export const saveReadDataToLocal = (book) => {
  let saveRead = JSON.parse(localStorage.getItem("books")) || [];

  const isExist = saveRead.find((read) => read.bookId == book.bookId);
  if (isExist) {
    toast.error("This book is already in your Read list.");
  } else {
    saveRead.push(book);
    localStorage.setItem("books", JSON.stringify(saveRead));
    toast.success('Added to the Read list successfully');
  }
};

export const saveWishlistDataToLocal = (book) => {
  let saveWish = JSON.parse(localStorage.getItem("wish")) || [];
  let saveRead = JSON.parse(localStorage.getItem("books")) || [];


  const isExistInWishlist = saveWish.find((wish) => wish.bookId === book.bookId);
  const isExistInRead = saveRead.find((read) => read.bookId === book.bookId);

  if (isExistInWishlist) {
    toast.error('This book is already in your wishlist.')
  } else if (isExistInRead) {
    toast.error("You already read the book, you can not add it to the wishlist");
  } else {
    saveWish.push(book);
    localStorage.setItem("wish", JSON.stringify(saveWish));
    toast.success('Added to the wish list successfully');
  }
};