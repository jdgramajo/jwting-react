import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
