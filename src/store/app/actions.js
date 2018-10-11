import { buildActionCreator } from '../utils';

// namespace for this action
const NS = '@hackerNewsReader/app';

export const actionTypes = {
    SET_THEME: `${NS}/SET_THEME`,
    SET_LAYOUT: `${NS}/SET_LAYOUT`,
};

// actions return a plain ol' Javascript Object
const actions = {
    setTheme: buildActionCreator(actionTypes.SET_THEME),
    setLayout: buildActionCreator(actionTypes.SET_LAYOUT),
};

export default actions;

/* 
export const buildActionCreator = type => {
  return (payload = {}) => ({
    type,
    payload,
  });
};
*/