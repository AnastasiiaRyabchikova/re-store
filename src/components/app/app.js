import React from 'react';
import Header from '../header';

import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
const App = () => {
    return (
        <React.Fragment>
            <Header numitems={5} total={500}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage} />
            </Switch>
        </React.Fragment>
    )
}

export default App;