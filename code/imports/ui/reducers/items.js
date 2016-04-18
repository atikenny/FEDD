import { combineReducers } from 'redux';

const item = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                text: action.text,
                removed: false
            };
        case 'REMOVE_ITEM':
            if (state.id !== action.id) {
                return state;
            }
            
            return Object.assign({}, state, { removed: true });
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
        case 'REMOVE_ITEM':
            return state.map(_item => item(_item, action));
        default:
            return state;
    }
};

const listApp = combineReducers({ items });

export default listApp;