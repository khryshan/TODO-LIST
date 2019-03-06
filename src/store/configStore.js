import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers/index';
import generatorId from '../middleware/generatorId';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = ( initialState = {} ) => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger, generatorId)));

  const persistor = persistStore(store);

  return { store, persistor };
}


export default configureStore;