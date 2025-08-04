 import bookRepositories from "../repositories/book.repositories.js";

 async function createBookService(newBook, userId) {
    const createBook = await bookRepositories.createBookRepository(
        newBook,
        userId
    );
    if (!createBook) throw new Error("Error creating book!");
    return createBook;
 }

async function findAllBooksService(){
    const books = await bookRepositories.findAllBooksRepository();
    return books;
}

async function findBookByIdService(bookId) {
  const book = await bookRepositories.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  return book;
}

async function updateBookService(updatedBook, bookId, userId) {
  const book = await bookRepositories.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  if (book.userId !== userId) throw new Error("Unauthorized");
  const response = await bookRepositories.updateBookRepository(
    updatedBook,
    bookId
  );
  return response;
}

async function deleteBookService(bookId, userId) {
  const book = await bookRepositories.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  if (book.userId !== userId) throw new Error("Unauthorized");
  const response = await bookRepositories.deleteBookRepository(bookId);
  return response;
}

async function searchBooksService(search) {
  if (!search) return await bookRepositories.findAllBooksRepository();
  const books = await bookRepositories.searchBooksRepository(search);
  return books;
}

 export default {
    createBookService,
    findAllBooksService,
    findBookByIdService,
    updateBookService,
    deleteBookService,
    searchBooksService,
 }