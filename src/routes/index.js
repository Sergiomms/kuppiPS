import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../Components/Home/Index';
import ItemInfo from '../Components/Item_Infos/Index';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ItemInfo} />

      </Switch>
    </BrowserRouter>
  );
}
