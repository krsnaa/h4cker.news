import { combineReducers } from 'redux';

import AppReducer from './app/reducer';

/*
* Reducers act on actions.
* The reducers must be pure. Given the same arguments, it should calculate the next state
* and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
* */

const rootReducer = combineReducers({
    //state: (state = {}) => state
    app: AppReducer,
});

export default rootReducer;
