import React, { component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import Home from './app/components/home'; //Import the component file

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
