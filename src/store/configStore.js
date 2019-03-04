import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers/index';


const configureStore = ( initialState = {} ) => {
  const store = createStore(reducers, composeWithDevTools());

  return store;
}


export default configureStore;