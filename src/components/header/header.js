import './header.css';
import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Header = ({numitems, total}) => (
        <header className="header">
            <span className="header__logo">ReStore</span>
            <div className="header__cart">
                <ShoppingCartIcon color="primary"/>
                <div className="header__cart-wrp">
                    <span>{numitems} items</span>
                    <span>{total}$</span>
                </div>
            </div>
        </header>
)

export default Header;