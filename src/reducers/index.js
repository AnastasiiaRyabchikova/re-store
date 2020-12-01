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
            const basketItems = [ ...state.basketItems ];
            let indexInBasket = basketItems.findIndex(({ id }) => id === bookId);
            if (indexInBasket > -1) {
                const item = basketItems[indexInBasket];
                basketItems[indexInBasket].count += 1;
            }  else {
                const book = state.books.find(({ id }) => id === bookId);
                const newItem = {...book, count: 1};
                basketItems.push(newItem);
            }
            return {
                ...state,
                basketItems,
            }
        default : 
            return state;
    }
}

export default reducer;