import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contact} />
    </Switch>
  );
};

export default Routes;
