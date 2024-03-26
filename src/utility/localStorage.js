export const saveReadDataToLocal = (book) =>{
    let saveRead = JSON.parse(localStorage.getItem('books')) || [];

    const isExist = saveRead.find(read => read.bookId == book.bookId);
    if(isExist){
      alert('ghhh');
    }
    else{
      saveRead.push(book);
      localStorage.setItem('books', JSON.stringify(saveRead))
    }
}