const booksLoaded = (newBooks) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
});

const booksRequasted = () => ({ type: 'FETCH_BOOKS_REQUAST'});
const booksError = (error) => ({ type: 'FETCH_BOOKS_FAILURE', payload: error });

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequasted());
    bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
}

export { booksLoaded, booksRequasted, booksError, fetchBooks };