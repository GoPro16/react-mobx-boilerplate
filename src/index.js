import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from "mobx-react";
import App from './areas/App';
import registerServiceWorker from './registerServiceWorker';

import * as stores from './store';


// For easier debugging
window._____APP_STATE_____ = stores;


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider {...stores}>
      <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./areas/App', () => {
    render(App);
  });
}
