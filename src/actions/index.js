const booksLoaded = (newBooks) => ({
    type: 'BOOKS_LOADED',
    payload: newBooks
});

const booksRequasted = () => ({ type: 'BOOKS_REQUASTED'});
const booksError = (error) => ({ type: 'BOOKS_ERROR', payload: error });

export { booksLoaded, booksRequasted, booksError };