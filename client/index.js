import React from 'react';
import { render } from 'react-dom';
import styles from './stylesheets/style.scss';
import App from './components/App.jsx';
import { Provider } from 'react-redux'
import store from './store.js'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
