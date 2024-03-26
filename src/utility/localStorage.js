export const saveReadDataToLocal = (book) => {
  let saveRead = JSON.parse(localStorage.getItem("books")) || [];

  const isExist = saveRead.find((read) => read.bookId == book.bookId);
  if (isExist) {
    alert("ghhh");
  } else {
    saveRead.push(book);
    localStorage.setItem("books", JSON.stringify(saveRead));
  }
};

export const saveWishlistDataToLocal = (book) => {
  let saveWish = JSON.parse(localStorage.getItem("wish")) || [];

  const isExist = saveWish.find((read) => read.bookId == book.bookId);
  if (isExist) {
    alert("ghhh");
  } else {
    saveWish.push(book);
    localStorage.setItem("wish", JSON.stringify(saveWish));
  }
};
