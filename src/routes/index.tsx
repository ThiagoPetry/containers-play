import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from '../Profile/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Profile} />
  </Switch>
);

export default Routes;
