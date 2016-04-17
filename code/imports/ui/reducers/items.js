import { combineReducers } from 'redux';

const item = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                text: action.text
            };
        default:
            return state;
    }
};

const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                item(undefined, action)
            ];
        default:
            return state;
    }
};

const listApp = combineReducers({ items });

export default listApp;