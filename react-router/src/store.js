import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


const initialState = {
  isLoading: false,
  items:     []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ITEMS_GET_PENDING':
      return {
        ...state,
        isLoading: true
      };
    case 'ITEMS_GET_FULFILLED':
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }

};

const rootReducer = combineReducers({
  data: reducer,
  routing: routerReducer
});

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middlewares);

const history = syncHistoryWithStore(browserHistory, store);

export default store;
