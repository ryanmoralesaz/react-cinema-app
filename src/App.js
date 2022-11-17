import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>APP</div>
    </Provider>
  );
};

export default App;
