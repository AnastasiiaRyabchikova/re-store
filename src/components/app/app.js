import React from 'react';
import Header from '../header';
import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
const App = ({ items }) => {
    const totalCalc = items.reduce((accum, { price, count }) => (accum + count * price), 0);
    return (
        <React.Fragment>
            <Header numitems={items.length} total={totalCalc}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage} />
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = ({ shopingCart: { cartItems } }) => {
    return {
        items: cartItems,
    }
};

export default connect(mapStateToProps)(App);