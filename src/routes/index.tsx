import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;