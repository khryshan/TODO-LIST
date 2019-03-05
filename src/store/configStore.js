import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers/index';
import generatorId from '../middleware/generatorId'


const configureStore = ( initialState = {} ) => {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(generatorId)));

  return store;
}


export default configureStore;