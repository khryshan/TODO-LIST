import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configStore';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from './Layout';
import InputTask from '../containers/InputTask';
import List from '../containers/List';


const { store, persistor } = configureStore();

const Application = props => (
  <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <InputTask />
            <List />
          </Layout>
        </PersistGate>
      </Provider>
)

export default Application;