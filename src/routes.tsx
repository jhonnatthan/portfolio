import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Experiences from './pages/Experiences/Experiences';
import Formation from './pages/Formation/Formation';
import Home from './pages/Home/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contact} />
      <Route path="/experiencias" exact component={Experiences} />
      <Route path="/formacao" exact component={Formation} />
    </Switch>
  );
};

export default Routes;
