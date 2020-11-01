import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './components/Firebase/AuthProvider';
import { BasketProvider } from './components/pages/Basket/BasketContext';

ReactDOM.render(
  <AuthProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
