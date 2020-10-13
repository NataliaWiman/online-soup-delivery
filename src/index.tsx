import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {AuthProvider} from './components/Firebase/AuthProvider';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
