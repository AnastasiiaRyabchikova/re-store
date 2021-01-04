const initialState = {
    books: [],
    loading: true,
    error: null,
    basketItems: [],
    basketTotal: 1400,
};

const updateOrderItems = (state, goodId, value) => {
    const items = state.basketItems;
    let indexInBasket = state.basketItems.findIndex(({ id }) => id === goodId);
    let newListOfItems = [];
    if (indexInBasket > -1) {
        newListOfItems = [
            ...items.slice(0, indexInBasket),
            {
                ...items[indexInBasket],
                count: items[indexInBasket].count + value,
            },
            ...items.slice(indexInBasket+1),
        ];
    } else {
        const newItemIndex = state.books.findIndex(({ id }) => id === goodId);
        newListOfItems = [
            ...items,
            {
                ...state.books[newItemIndex],
                count: 1,
            }
        ];
    }
    console.log({newListOfItems});
    return {
        ...state,
        basketItems: newListOfItems.filter(({ count }) => count > 0),
    };
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
            return updateOrderItems(state, action.payload, 1);
        case 'BOOK_DECREASE' :
            return updateOrderItems(state, action.payload, -1);

        case 'BOOK_REMOVE_FROM_CART' :
            return {
                ...state,
                basketItems: [...state.basketItems].filter(({ id }) => id !== action.payload),
            }
        default : 
            return state;
    }
}

export default reducer;