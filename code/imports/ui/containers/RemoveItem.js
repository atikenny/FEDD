import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

let RemoveItem = ({ dispatch, itemId }) => (
    <button onClick={() => {
        dispatch(removeItem(itemId));
    }}>Remove Item</button>
);

RemoveItem = connect()(RemoveItem);

export default RemoveItem;