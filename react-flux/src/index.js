import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let initialState = {
  blocks: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'BLOCK_WAS_ADDED':
      return {
        ...state,
        blocks: state.blocks.concat(payload)
      };
    case 'BLOCK_WAS_REMOVED':
      if(state.blocks.length > 0) {
        return {
          ...state,
          blocks: state.blocks.slice(0, -1)
        };
      }
      return state;
    case 'BLOCKS_WERE_UPLOADED':
      return {
        ...state,
        blocks: state.blocks.concat(payload)
      }
    default:
      return state;
  }
};

const middlewares = applyMiddleware(logger, thunk);

export const store = createStore(reducer, middlewares);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
