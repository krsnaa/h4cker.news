import { actionTypes } from './actions';
import { layouts, themes } from './utils';

const getInitialState = () => ({
    theme: themes.dark,
    layout: layouts.list,
});

// state, action
const app = (state = getInitialState(), { type, payload }) => {
    switch (type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                ...payload,
            };
        case actionTypes.SET_LAYOUT:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default app;
