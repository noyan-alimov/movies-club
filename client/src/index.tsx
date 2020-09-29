import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='movies-club.eu.auth0.com'
      clientId='2pvJ42EJhFopBtXceu4nXt4ZDICyIvCq'
      redirectUri={window.location.origin}
      audience='https://moviesclub/api'
      scope=''
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
