const booksLoaded = (newBooks) => ({
        type: 'BOOKS_LOADED',
        payload: newBooks
});

const booksRequasted = () => ({ type: 'BOOKS_REQUASTED'});

export { booksLoaded, booksRequasted };