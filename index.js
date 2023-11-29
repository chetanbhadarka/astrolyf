/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import {name as appName} from './app.json';

import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './src/redux/store';

import {Provider} from 'react-redux';

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
