export const booksLoaded = (newBooks) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
});

export const booksError = (error) => ({ type: 'FETCH_BOOKS_FAILURE', payload: error });

export const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch('FETCH_BOOKS_REQUAST');
    bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
}

export const bookAddToCart = (bookId) => ({ type: 'BOOK_ADD_TO_CART', payload: bookId});
export const bookDecrease = (bookId) => ({ type: 'BOOK_DECREASE', payload: bookId});
export const bookRemoveFromCart = (bookId) => ({ type: 'BOOK_REMOVE_FROM_CART', payload: bookId});
