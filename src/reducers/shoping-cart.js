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
        ].filter(({ count }) => count > 0);
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
        cartAmount: newListOfItems.reduce((accum, { count }) => (accum + count), 0),
        cartItems: newListOfItems,
        cartTotal: newListOfItems.reduce((accum, { price, count }) => (accum + count * price), 0),
    };
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

export default updateShopingCart;