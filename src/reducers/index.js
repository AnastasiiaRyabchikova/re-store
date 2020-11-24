const initialState = {
    books: [],
    loading: true,
    error: null,
    basketItems: [],
    basketTotal: 1400,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUAST' : 
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS' : 
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE' : 
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADD_TO_CART' :
            const bookId = action.payload;
            const book = state.books.find(book => book.id === bookId);
            const itemInBasket = {...book, count: 1};
            return {
                ...state,
                basketItems: [
                    ...state.basketItems,
                    itemInBasket,
                ],
            }
        default : 
            return state;
    }
}

export default reducer;