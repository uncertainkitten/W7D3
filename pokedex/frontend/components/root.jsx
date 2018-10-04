import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>Pokedex</h1>
    </div>
  </Provider>
);

export default Root;
