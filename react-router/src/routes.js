import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/';
import Item from './components/Item/';
import Items from './components/Items/';
import Itemik from './components/Itemik';
import NotFound from './components/NotFound/';

export const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Items} />
      {/*<Route path="items" component={Items}>*/}
        <Route path=":name" component={Itemik} />
      {/*</Route>*/}
    </Route>
    <Route path="*" component={NotFound} />
  </div>
);

