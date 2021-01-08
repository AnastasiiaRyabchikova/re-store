import updateBookList from './book-list';
import updateShopingCart from './shoping-cart';

const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shopingCart: {
        cartItems: [],
        total: 0,
    },
};

const reducer = (state = initialState, action) => {
    return {
        bookList: updateBookList(state, action),
        shopingCart: updateShopingCart(state, action),
    };
};

export default reducer;