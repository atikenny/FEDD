import { combineReducers } from 'redux';
import items from './items';
import sticky from './sticky';
import scrollTop from './scrollTop';

const listApp = combineReducers({
    items,
    sticky,
    scrollTop
});

export default listApp;
