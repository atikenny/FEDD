import { combineReducers } from 'redux';
import items from './items';
import sticky from './sticky';

const listApp = combineReducers({
    items,
    sticky
});

export default listApp;
