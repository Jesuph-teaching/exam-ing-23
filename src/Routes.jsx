import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'; 
import Books from './Pages/Books'; 
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
		<Route path="/checkout" component={Checkout} />
		<Route path="*" component={NotFound} />
        
      </Switch>
    </Router>
  );
};

export default Routes;
