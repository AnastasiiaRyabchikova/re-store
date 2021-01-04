const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shopingCart: {
        cartItems: [],
        total: 1400,
    },
};

const updateOrderItems = (state, goodId, value) => {
    const { bookList: { books }, shopingCart: { cartItems } } = state;
    let indexInBasket = cartItems.findIndex(({ id }) => id === goodId);
    let newListOfItems = [];
    if (indexInBasket > -1) {
        newListOfItems = [
            ...cartItems.slice(0, indexInBasket),
            {
                ...cartItems[indexInBasket],
                count: cartItems[indexInBasket].count + value,
            },
            ...cartItems.slice(indexInBasket+1),
        ];
    } else {
        const newItemIndex = books.findIndex(({ id }) => id === goodId);
        newListOfItems = [
            ...cartItems,
            {
                ...books[newItemIndex],
                count: 1,
            }
        ];
    }
    return {
        cartItems: newListOfItems.filter(({ count }) => count > 0),
    };
};

const updateBookList = (state, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUAST' : 
            return {
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS' : 
            return {
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE' : 
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        default : 
            return state.bookList;
    }
};

const updateShopingCart = (state, action) => {
    switch (action.type) {
        case 'BOOK_ADD_TO_CART' :
            return updateOrderItems(state, action.payload, 1);
        case 'BOOK_DECREASE' :
            return updateOrderItems(state, action.payload, -1);

        case 'BOOK_REMOVE_FROM_CART' :
            return {
                cartItems: [...state.shopingCart.cartItems].filter(({ id }) => id !== action.payload),
            }
        default :
            return state.shopingCart;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUAST' : 
        case 'FETCH_BOOKS_SUCCESS' : 
        case 'FETCH_BOOKS_FAILURE' : 
            return {
                ...state,
                bookList: updateBookList(state, action),
            };
        case 'BOOK_ADD_TO_CART' :
        case 'BOOK_DECREASE' :
        case 'BOOK_REMOVE_FROM_CART' :
            return {
                ...state,
                shopingCart: updateShopingCart(state, action),
            };
        default : 
            return state;
    }
}

export default reducer;