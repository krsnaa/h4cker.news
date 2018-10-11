import { compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const isProd = process.env.NODE_ENV === 'production';

/**
|--------------------------------------------------
| Middleware only wraps the store's dispatch function.
| Technically, anything a middleware can do, you can do manually by wrapping every dispatch call
| https://redux.js.org/api/applymiddleware
|--------------------------------------------------
*/
const middlewareList = [];
middlewareList.push(thunk);

if (!isProd) {
    middlewareList.push(createLogger());
}

/**
|--------------------------------------------------
| store enhancers are the most powerful Redux extension mechanism.
| It is a higher-order function that composes a store creator to return a new, enhanced store creator.
| applyMiddleware is a store enhancer. redux-devtools is another.
| It is highly unlikely you'll ever want to write a store enhancer yourself.
| https://redux.js.org/glossary#store-enhancer
|--------------------------------------------------
*/
const storeEnhancers = [];
/* let devTool = f => f;
storeEnhancers.push(devTool); */

let composeEnhancers = compose;
if (!isProd) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancers(
    applyMiddleware(...middlewareList),
    ...storeEnhancers
)

export default middleware;
