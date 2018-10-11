import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// REDUX
import { Provider } from "react-redux";
import configureStore from './store'

import App from './components/App';
import setGlobalStyles from './styles/globals'

// styling instead of index.css
setGlobalStyles();

const renderApp = () => {
    
    const initialState = {};
    const store = configureStore(initialState);
    store.dispatch({ type: '@hackerNewsReader/@@INIT' })

    if (process.env.NODE_ENV !== 'production') {
        console.log('Initial state ->', store.getState());
    }

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );

};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
