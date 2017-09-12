import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root.jsx';
import configureStore from './store/store.js';
// import allTodos from './reducers/selectors.js';

const store = configureStore();
window.store = store;
// window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
